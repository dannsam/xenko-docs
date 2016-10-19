#Mouse

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

**Mouse** is a common input **device for desktop games**.
There are two ways to handle keyboard input in Xenko:

1. Query **Mouse Button States**.
2. For cross-platform games that target primarily mobile devices, you can use [PointerEvent](xref="SiliconStudio.Xenko.Input.PointerEvent") lists.
For more information on using **Pointers**, see [Pointers Overview Page](pointers.md).

You can access both from the [Input](xref="SiliconStudio.Xenko.Input.InputManager") base class.

Let's see the difference between using **Mouse Button States** and [PointerEvent](xref="SiliconStudio.Xenko.Input.PointerEvent") lists:

| Class | Game Type | When to Use? |
| --- | --- | --- |
| [Input](xref="SiliconStudio.Xenko.Input.InputManager") | Desktop only | For desktop games, you usually handle input with multiple mouse buttons. Therefore, use **Mouse Button States**. |
| [PointerEvent](xref="SiliconStudio.Xenko.Input.PointerEvent") | Cross-platform | For mobile games, you usually simulate pointers with just the left mouse button. Therefore, you can treat mouse input entirely like Pointers, no need to create separate mouse-specific controls. See [Pointers Overview Page](pointers.md) for details. |

See [Input Overview Page](index.md) to understand the difference between these options.

##Check Mouse Availability
Before handling mouse input, check whether a mouse is available in the system:

Use [Input.HasMouse](xref="SiliconStudio.Xenko.Input.InputManager.HasMouse") to check if the **Mouse** is currently connected.

> [!Note] Currently Xenko does not support mouse plugged at run-time. This feature will be added in the future releases.

##Use Input Base Class

###Mouse Position

[MousePosition](xref="SiliconStudio.Xenko.Input.InputManager.MousePosition") returns mouse pointer position.
It returns X and Y coordinates which determine mouse pointer position on the screen.
The values for X and Y are between 0 and 1 (normalized values):

* If (x,y) = (0,0): mouse pointer is in the top-left corner of the screen.
* If (x,y) = (1,1): mouse pointer is in the bottom-right corner of the screen.

> [!Note] Xenko uses normalized coordinates instead of actual screen sizes in pixels.
> This way, mouse pointer position adjusts correctly to any screen resolution,
> so you don't have to write separate code for every screen size.

###Mouse Delta

Use [MouseDelta](xref="SiliconStudio.Xenko.Input.InputManager.MouseDelta") to get mouse position since the last update. Use it to analyze mouse movement speed and direction.

[MouseDelta](xref="SiliconStudio.Xenko.Input.InputManager.MouseDelta") also uses **normalized coordinates**.

###Lock Mouse Position

In many games you want mouse cursor to move beyond the screen edges


 invisible and use mouse movement to rotate the camera view.
This feature is very common in FPS games where you need 360-degree rotation.

You can hide mouse pointer and adjust it not to get blocked at the edges of the screen.

mouse don't get block at the edge of your screen.
in some case you want to be able to rotation several without being blocked because you reached the end of your screen (for example FPS games).
In this case lock the mouse at its current position fix the problem (we automatically hide the cursor because it seems strange to the user otherwise).


Use the following properties/methods to lock and unlock mouse position:

| Method/Property | Description |
| --- | --- |
| [LockMousePosition(Boolean)](xref="SiliconStudio.Xenko.Input.InputManager.LockMousePosition.System.Boolean") | Locks mouse position and hides mouse pointer until the next call to ``UnlockMousePosition ()`` event. |
| [UnlockMousePosition()](xref="SiliconStudio.Xenko.Input.InputManager.UnlockMousePosition") | Unlocks mouse position previously locked by ``LockMousePosition (Boolean)`` event, and restores mouse visibility. |
| [IsMousePositionLocked](xref="SiliconStudio.Xenko.Input.InputManager.IsMousePositionLocked") | Checks if mouse position is currently locked. |

> [!Tip] You can get or set mouse visibility with [GameWindow.IsMouseVisible](xref="SiliconStudio.Xenko.Games.GameWindow.IsMouseVisible").

###Mouse Button States

You can use mouse buttons to trigger various actions in a game. For example, left mouse button is commonly used to shoot, jump, move left, etc.

[Input](xref="SiliconStudio.Xenko.Input.InputManager") base class has several **Methods** that check mouse button states: _Pressed_, _Down_, and _Released_:

| Method | Description |
| --- | --- |
| [HasDownMouseButtons()](xref="SiliconStudio.Xenko.Input.InputManager.HasDownMouseButtons") | Checks if one or more mouse buttons are currently being pressed down. |
| [HasPressedMouseButtons()](xref="SiliconStudio.Xenko.Input.InputManager.HasPressedMouseButtons") | Checks if one or more mouse buttons were pressed in the last update. |
| [HasReleasedMouseButtons()](xref="SiliconStudio.Xenko.Input.InputManager.HasReleasedMouseButtons") | Checks if one or more mouse buttons were released in the last update. |
| [IsMouseButtonDown (MouseButton)](xref="SiliconStudio.Xenko.Input.InputManager.IsMouseButtonDown.SiliconStudio.Xenko.Input.MouseButton") | Checks if a specified mouse button is currently being pressed down. |
| [IsMouseButtonPressed (MouseButton)](xref="SiliconStudio.Xenko.Input.InputManager.IsMouseButtonPressed.SiliconStudio.Xenko.Input.MouseButton") | Checks if a specified mouse button was pressed in the last update. |
| [IsMouseButtonReleased (MouseButton)](xref="SiliconStudio.Xenko.Input.InputManager.IsMouseButtonReleased.SiliconStudio.Xenko.Input.MouseButton") | Checks if a specified mouse button was released in the last update. |

###Mouse Wheel Delta 

You can use mouse wheel to control various actions in a game. This way, when mouse wheel position changes, it triggers certain events, e.g. switches weapons, moves characters, zooms in, etc.

[MouseWheelDelta](xref="SiliconStudio.Xenko.Input.InputManager.MouseWheelDelta") property returns the following values:

* Any floating value: There is a scroll movement on mouse wheel.
* "0": There is no movement.

> [!Note] [MouseWheelDelta](xref="SiliconStudio.Xenko.Input.InputManager.MouseWheelDelta") returns a positive value when a user scrolls forward and negative value when he/she scrolls backwards.

> [!Note] By default, [MouseWheelDelta](xref="SiliconStudio.Xenko.Input.InputManager.MouseWheelDelta") returns 120*x, where X is amount of wheel steps scrolled during the last update.

##Code Sample

```
public class MouseInputScript : SyncScript
{
	public override void Update()
	{
		//If left mouse button is being pressed down in this update, do something.
		if (Input.IsMouseButtonDown(MouseButton.Left))
		{   
		}
		//If middle mouse button was pressed since the last update, do something.
		if (Input.IsMouseButtonPressed(MouseButton.Middle))
		{  
		}

		//If mouse pointer moved more than 0.2 units of the screen size in X direction, do something.
		if (Input.MouseDelta.X > 0.2f)
		{
		}
		
		//Analyze each pointer recorded during last update.
		foreach (PointerEvent e in Input.PointerEvents)
		{   
			//If left mouse button is being pressed down in this update, do something.
			if (e.State == PointerState.Down)
			{
			}
		}
	}
}
```

<div class="doc-relatedtopics">
* [Gamepads](gamepads.md)
* [Keyboard](keyboard.md)
* [Pointers](pointers.md)
* [Virtual Buttons](virtual-buttons.md)
</div>
