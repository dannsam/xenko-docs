# Pointers

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

**Pointers** are points on the device screen corresponding to **finger touches**.

On desktop platforms, the left mouse button can be used to simulate pointers. For more information on mouse controls, see [Mouse Input](mouse.md).

Devices with multi-touch functionality support several simultaneous pointers.

## How Xenko processes input from pointers

1. The user touches the screen or clicks the left mouse button.
2. Xenko creates a pointer.
3. Xenko assigns **pointer ID** to that pointer corresponding to a given finger.
4. Every time the pointer is modified, Xenko creates a new **pointer event** with that pointer.
5. For each new finger, Xenko creates a new pointer with a new pointer ID.

> [!Note] 
> Each **pointer event** contains information on only one pointer. If several pointers are modified simultaneously in the same update, Xenko creates a separate **pointer event** for each pointer.

> [!Note] 
> Pointer events are listed in chronological order (time of the event).

> [!Warning]
> Each OS handles pointer modifications differently. This means the same finger gesture can generate slightly different pointer event sequences across different platforms.
>
> For example, Android doesn't create new a pointer event when a finger touches the screen but doesn't move.
> For more details, check the documentation for your OS.

You can enable **gesture recognition** to detect gestures such as **long presses** and **taps**. For more information, see [Gestures](gestures.md).

## Multi-touch
If multi-touch is disabled, Xenko triggers events only for the first finger that touches the screen. Multi-touch is enabled by default.

To enable **multi-touch**, use [MultiTouchEnabled](xref="SiliconStudio.Xenko.Input.InputManager.MultiTouchEnabled").

## The `PointerEvent` class

[PointerEvent](xref="SiliconStudio.Xenko.Input.PointerEvent") reports pointer events. It contains the current **pointer status** and time information. It is thrown every time the **pointer** is modified.

You can access the list of **pointer events** since the last update using 
[PointerEvents](xref="SiliconStudio.Xenko.Input.InputManager.PointerEvents"). The list is cleared at every update, so you don't need to clear it manually. Pointer events not analyzed during a frame turn are lost.

### Get pointer information

You can use the following properties to get information about the pointer that triggered the event:

|Property|Description|
|--------|-----------|
|[PointerEvent.IsPrimary](xref="SiliconStudio.Xenko.Input.PointerEvent.IsPrimary")| Indicates if the pointer which triggered the event was the first finger to touch the screen |
|[PointerEvent.PointerType](xref="SiliconStudio.Xenko.Input.PointerEvent.PointerType") | Indicates if the pointer which triggered the event was simulated from _Mouse_ or real _Touch_. |
|[PointerEvent.PointerId](xref="SiliconStudio.Xenko.Input.PointerEvent.PointerId") | Indicates the id the **Pointer** which triggered the event. |

> [!Warning]
> The ID of a pointer is valid only during a single _Down->Move->Up_ sequence of the pointer events.
> A finger can have different IDs each time it touches the screen (even if this happens very fast).

> [!Warning]
> Each OS has its own way to assign IDs to pointers.
> There's no relation between the pointer ID values and corresponding fingers.

### Get Pointer Position

Use [PointerEvent.Position](xref="SiliconStudio.Xenko.Input.PointerEvent.Position") to retrieve **Pointer Position**.

Xenko uses **normalized coordinates** for Pointer positions instead of actual screen sizes in pixels.
This way, pointer position **adjusts correctly** to any screen resolution, so you don't have to write separate code for every screen size.

* (0,0) represents the left-top corner of the screen
* (1,1) represents the right-bottom corner of the screen.

### Get Pointer State

Use the [PointerEvent.State](xref="SiliconStudio.Xenko.Input.PointerEvent.State") to check the **Action** performed by the pointer
when the event was triggered. It returns a value inside [PointerState](xref="SiliconStudio.Xenko.Input.PointerState"). 

There are five possible states:

* _Down_: Pointer just touched the screen.
* _Move_: Pointer changes position on the screen.
* _Up_: Pointer left the screen.
* _Out_: Pointer gets out of the touch region.
* _Cancel_: The pointer sequence got canceled. This can happen when the application is interrupted (phone call, etc.).

> [!Note] A sequence of **Pointer Events** for a particular pointer
> always starts with **Down** action, then followed by 0 or more **Move** actions
> and ends with **Up**, **Out** or **Cancel** action.

### Get Delta Values

Use [PointerEvent.DeltaTime](xref="SiliconStudio.Xenko.Input.PointerEvent.DeltaTime") to get the amount of time elapsed from the previous update.

Use [PointerEvent.DeltaPosition](xref="SiliconStudio.Xenko.Input.PointerEvent.DeltaPosition") to get the change of the pointer position since the previous update.

> [!Note] Delta values are always nulls at the beginning of the sequence of pointer events.
> That is, when **Pointer State** is _Down_, delta values are always nulls.

## Example code

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

## See also
* [Gestures](gestures.md)
* [Mouse](mouse.md)
* [Virtual buttons](virtual-buttons.md)
