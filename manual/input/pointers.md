#Pointers

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Level Programmer</span>

**Pointers** are points on the device screen corresponding to **finger touches**:
* On desktop platforms, left-mouse-button clicks create pointers. For more information on mouse controls, see [Mouse Input](mouse.md).
* Devices with multi-touch functionality support several simultaneous pointers.

##Understand Pointers

Here's how Xenko handles Input from Pointers:

1. Every time the end-user touches the screen (or presses left mouse button) he/she **creates a Pointer**.
2. Xenko assigns **PointerId** to that Pointer.
3. **Game Engine** creates new **Pointer Event** for that Pointer ID every time when a modification happens to that **Pointer**.
4. For the next touch, even, if it's just split-seconds away from the last one, Xenko creates a **new Pointer** with a **different ID**.

In **Step 3**, particular OS/Hardware types approach pointer modifications in a different manner.
For instance, **on Android** when a finger touches the screen but doesn't move, the system creates a single _Down_ **Pointer Event**.
Until a finger moves, the system does not create additional **Pointer Events**. Other OS/Hardware can treat such actions differently.
Check particular OS/Hardware documentation for details.

Alternatively, you can enable **Gesture Recognition** of the **Long Press Gesture** to use _Long Press_ functionality. See [Getures](gestures.md) for more information.

> [!Note] **Pointer Event** contains information on **only one pointer**.
> If several pointers are modified simultaneously in the same update,  Xenko creates a separate **Pointer Event** for each pointer.

> [!Note] Pointer events are listed in chronological order (time of the event).

##Use Multi-Touch
**To manage Multi-Touch** functionality use ``MultiTouchEnabled`` property of the ``Input`` base class.

It gets or sets a Boolean value (true/false) indicating if simultaneous multiple finger touches are enabled or not.
If Multi-touch is disabled, Xenko triggers events of only one finger at a time.

**Syntax**: ``public abstract bool MultiTouchEnabled { get; set; }``

> [!Note] By default, multi-touch functionality is enabled.

##Use PointerEvent Class

```PointerEvent``` class of the ``Input`` base class handles all input from **Pointers**.
A ```PointerEvent``` contains information on the **Pointer status**.
It is thrown every time when a modification happens to that **Pointer**.
The ```Input.IInputManager``` interface provides access to the list of **Pointer Events** that happened during the last update via the ```Input.PointerEvents``` field.

Xenko buffers a detailed sequence of pointer events every update. Developer gets this sequence in the next update.
The list is cleared every update, so you don't need to clear it manually.
All pointer events not analyzed during a frame turn are lost.

```PointerEvent``` class has the following properties, use them to handle **Pointer input**:

###Get Pointer Details

```IsPrimary``` property is a Boolean value (true/false) for multi-touch functionality. It checks if a Pointer is a **primary pointer**.
Only input from the primary pointer will be treated as a mouse pointer.

```PointerType``` checks Pointer type. There are three pointer types in total: _Mouse_, _Touch_, and _None_.

```PointerId``` property identifies **Pointer** that triggered a certain **Pointer event**.

Each pointer has its own ID that is valid only during _Down->Move->Up_ sequence of pointer events.
So a finger can have different IDs each time it touches the screen.

Suppose a player removes a finger from the screen and in just a split-second touches the screen again with the same finger.
This new touch is a new **Pointer**. It gets a **different ID** and starts a new sequence of pointer events.

###Get Pointer State & Position

```Position``` property of the ```PointerEvent``` class checks **Pointer Position**.

Xenko uses **normalized coordinates** for Pointer positions instead of actual screen sizes in pixels.
This way, pointer position **adjusts correctly** to any screen resolution, so you don't have to write separate code for every screen size.

* (0,0) represents the left-top corner of the screen
* (1,1) represents the right-bottom corner of the screen.

```State``` property gets the data from the **Enum** ```PointerState```. It is an enumeration describing the **Action** performed by the pointer. There are five states:

* _Down_: Pointer just touched the screen.
* _Move_: Pointer changes position along the screen.
* _Up_: Pointer left the screen.
* _Out_: Pointer gets out of the touch region.
* _Cancel_: Pointer is canceled (disappeared from hardware, invalid, etc).

> [!Note] Most hardware types don't distinguish between _Out_ and _Cancel_ actions and treat both as _Out_.

> [!Note] A sequence of **Pointer Events** for a particular pointer
> always starts with **Down** action, then followed by 0 or more **Move** actions
> and ends with **Up**, **Out** or **Cancel** action.


###Get Delta Values

```DeltaTime``` gets the amount of time elapsed from the previous update.

```DeltaPosition``` gets the change of the pointer position since the previous update.

> [!Note] Delta values are always nulls at the beginning of the sequence of pointer events.
> That is, when **Pointer State** is _Down_, delta values are always nulls.

##Code Sample

Here is a sample script that tracks pointer movement along the screen and prints its positions:

```
        public override async Task Execute()
        {
            var pointerPositions = new Dictionary<int, Vector2>(); 
            while (true)
            {
                await Scheduler.NextFrame();
                foreach (var pointerEvent in Input.PointerEvents)
                {
                    switch (pointerEvent.State)
                    {
                        case PointerState.Down:
                            pointerPositions[pointerEvent.PointerId] = pointerEvent.Position;
                            break;
                        case PointerState.Move:
                            pointerPositions[pointerEvent.PointerId] = pointerEvent.Position;
                            break;
                        case PointerState.Up:
                        case PointerState.Out:
                        case PointerState.Cancel:
                            pointerPositions.Remove(pointerEvent.PointerId);
                            break;
                        default:
                            throw new ArgumentOutOfRangeException();
                    }
                }
                var positionsStr = pointerPositions.Values.Aggregate("", (current, pointer) => current + (pointer.ToString() + ", "));
                logger.Info("There are currently {0} pointers on the screen located at {1}", pointerPositions.Count, positionsStr);
            }
        }
```

<div class="doc-relatedtopics">
* [Gestures](gestures.md)
* [Mouse](mouse.md)
* [Virtual Keys](virtual-keys.md)
</div>
