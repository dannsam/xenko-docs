#Pointers

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

**Pointers** are points on the device screen corresponding to **finger touches**:

* On desktop platforms, the left mouse button can be used to simulate pointers. For more information on mouse controls, see [Mouse Input](mouse.md).
* Devices with multi-touch functionality support several simultaneous pointers.

##Understand Pointers

Here's how Xenko processes Input from Pointers.

1. A user touches the screen (or presses left mouse button).
2. Xenko **creates a Pointer**.
3. Xenko assigns **PointerId** to that Pointer corresponding to a given finger.
4. New **Pointer Event** with that Pointer ID is created every time a the **Pointer** is modified.
5. For the each new finger, Xenko creates a **new Pointer** with a **different ID**.

> [!Warning]
> Each OS handles pointer modifications in a different manner. 
> Therefore, the same finger gesture can generate slightly different pointer event sequence depending on the platform.
> For instance, **on Android** the system does not create **Pointer Events** when a finger touches the screen but doesn't move.
> Other OS/Hardware can treat such actions differently. Check particular OS/Hardware documentation for details.

Alternatively, you can enable **Gesture Recognition** to detect **Long Press**, **Taps**, etc.
See [Gestures](gestures.md) for more information.

> [!Note] **Pointer Event** contains information on **only one pointer**.
> If several pointers are modified simultaneously in the same update,  Xenko creates a separate **Pointer Event** for each pointer.

> [!Note] Pointer events are listed in chronological order (time of the event).

##Use Multi-Touch
**To active Multi-Touch** functionality use [MultiTouchEnabled](xref="SiliconStudio.Xenko.Input.InputManager.MultiTouchEnabled").

It indicates if simultaneous multiple finger touches are enabled or not.
If Multi-touch is disabled, Xenko triggers events only for the first finger that touches the screen.

> [!Note] By default, multi-touch is enabled.

##Use PointerEvent Class

[PointerEvent](xref="SiliconStudio.Xenko.Input.PointerEvent") class is used to report pointer events.
It contains the current **Pointer Status** and time information.
It is thrown every time that modification happens to the **Pointer**.

You can access the list of **Pointer Events** that happened since the last update using the 
[PointerEvents](xref="SiliconStudio.Xenko.Input.InputManager.PointerEvents").
The list is cleared at every update, so you don't need to clear it manually.
All pointer events not analyzed during a frame turn are lost.

###Get Pointer Information

You can use the following properties to get information about the pointer that triggered the event:

|Property|Description|
|--------|-----------|
|[PointerEvent.IsPrimary](xref="SiliconStudio.Xenko.Input.PointerEvent.IsPrimary")| Indicate if the pointer which triggered the event was the first finger to touch the screen |
|[PointerEvent.PointerType](xref="SiliconStudio.Xenko.Input.PointerEvent.PointerType") | Indicate if the pointer which triggered the event was simulated from _Mouse_ or real _Touch_. |
|[PointerEvent.PointerId](xref="SiliconStudio.Xenko.Input.PointerEvent.PointerId") | Indicate the id the **Pointer** which triggered the event. |

> [!Warning]
> The ID of a pointer is valid only during a single _Down->Move->Up_ sequence of pointer events.
> A finger can have different IDs each time it touches the screen (even if this happens very fast).

> [!Warning]
> Each OS have its own way to assign IDs to pointers.
> You should not make any assumption between the pointer ID values and corresponding fingers.

###Get Pointer Position

Use [PointerEvent.Position](xref="SiliconStudio.Xenko.Input.PointerEvent.Position") to retrieve **Pointer Position**.

Xenko uses **normalized coordinates** for Pointer positions instead of actual screen sizes in pixels.
This way, pointer position **adjusts correctly** to any screen resolution, so you don't have to write separate code for every screen size.

* (0,0) represents the left-top corner of the screen
* (1,1) represents the right-bottom corner of the screen.

###Get Pointer State

Use the [PointerEvent.State](xref="SiliconStudio.Xenko.Input.PointerEvent.State") to check the **Action** performed by the pointer
when the event was triggered. It returns a value inside [PointerState](xref="SiliconStudio.Xenko.Input.PointerState"). 

There are five possible states:

* _Down_: Pointer just touched the screen.
* _Move_: Pointer changes position on the screen.
* _Up_: Pointer left the screen.
* _Out_: Pointer gets out of the touch region.
* _Cancel_: The pointer sequence got canceled. This can happen for example when the application is interrupted (phone call, etc.).

> [!Note] A sequence of **Pointer Events** for a particular pointer
> always starts with **Down** action, then followed by 0 or more **Move** actions
> and ends with **Up**, **Out** or **Cancel** action.


###Get Delta Values

Use [PointerEvent.DeltaTime](xref="SiliconStudio.Xenko.Input.PointerEvent.DeltaTime") to get the amount of time elapsed from the previous update.

Use [PointerEvent.DeltaPosition](xref="SiliconStudio.Xenko.Input.PointerEvent.DeltaPosition") to get the change of the pointer position since the previous update.

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
* [Virtual Buttons](virtual-buttons.md)
</div>
