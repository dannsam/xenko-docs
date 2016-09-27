#Mouse

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

**Mouse** is a common input device that triggers various actions in desktop games.
**Xenko Game Studio** handles mouse input by implementing **Methods** and **Properties** of the [Input](xref="SiliconStudio.Xenko.Input.InputManager") base class.

For cross-platform games that target primarily mobile devices, you can also use [PointerEvent](xref="SiliconStudio.Xenko.Input.PointerEvent") class.
For more information on using **Pointers**, see [Pointers Overview Page](pointers.md).
Let's see the difference between using [Input](xref="SiliconStudio.Xenko.Input.InputManager") base class and [PointerEvent](xref="SiliconStudio.Xenko.Input.PointerEvent") class for **Mouse Input**:

| Class | Game Type | When to Use? |
| --- | --- | --- |
| [Input](xref="SiliconStudio.Xenko.Input.InputManager") | Desktop only | For desktop games, you usually handle input with multiple mouse buttons. Therefore, use properties and methods of the [Input](xref="SiliconStudio.Xenko.Input.InputManager") base class. |
| [PointerEvent](xref="SiliconStudio.Xenko.Input.PointerEvent") | Cross-platform | For mobile games, you usually simulate pointers with just the left mouse button. Therefore, you can treat mouse input entirely like Pointers, no need to create separate mouse-specific controls. See [Pointers Overview Page](pointers.md) for details. |


##Check Mouse Availability
Before you can handle mouse input with either [Input](xref="SiliconStudio.Xenko.Input.InputManager") base class or [PointerEvent](xref="SiliconStudio.Xenko.Input.PointerEvent") class, it's important to check, whether a mouse is available in the system.

[Input.HasMouse](xref="SiliconStudio.Xenko.Input.InputManager.HasMouse") property returns a Boolean (true/false) value that indicates mouse availability.

> [!Note] Currently Xenko does not support mouse plugged at run-time. This feature will be added in the future releases.

**Syntax**: ```bool hasMouse = Input.HasMouse;```

##Use Input Base Class

###Mouse Position

[Input.MousePosition](xref="SiliconStudio.Xenko.Input.InputManager.MousePosition") property checks mouse pointer position.
It returns X and Y coordinates which determine mouse pointer position on the screen.
The values for X and Y are between 0 and 1 (normalized values):

* If (x,y) = (0,0): mouse pointer is in the top-left corner of the screen.
* If (x,y) = (1,1): mouse pointer is in the bottom-right corner of the screen.

> [!Note] Xenko uses normalized coordinates instead of actual screen sizes in pixels.
> This way, mouse pointer position adjusts correctly to any screen resolution,
> so you don't have to write separate code for every screen size.

###Mouse Delta

[Input.MouseDelta](xref="SiliconStudio.Xenko.Input.InputManager.MouseDelta") property checks mouse position since the last update. Use it to analyze mouse movement speed and direction.

[Input.MouseDelta](xref="SiliconStudio.Xenko.Input.InputManager.MouseDelta") property also uses **normalized coordinates**.

###Lock Mouse Position

Sometimes you need to lock mouse position, hide mouse pointer, and then unlock mouse position and restore mouse pointer visibility.
For instance, when you need to play a video in a game, and mouse pointer only distracts a player.

Use the following properties/methods to lock and unlock mouse position:

| Method | Description |
| --- | --- |
| [Input.LockMousePosition(Boolean)](xref="SiliconStudio.Xenko.Input.InputManager.LockMousePosition.System.Boolean") | Locks mouse position and hides mouse pointer until the next call to ```UnlockMousePosition ()``` event. |
| [Input.UnlockMousePosition()](xref="SiliconStudio.Xenko.Input.InputManager.UnlockMousePosition") | Unlocks mouse position previously locked by ```LockMousePosition (Boolean)``` event, and restores mouse visibility. |


> [!Note] [Input.IsMousePositionLocked](xref="SiliconStudio.Xenko.Input.InputManager.IsMousePositionLocked") property checks if mouse position is currently locked.

###Mouse Button Events

You can assign mouse buttons to trigger various actions in a game. For example, left mouse button can be assigned to shoot, jump, move left, etc.

[Input](xref="SiliconStudio.Xenko.Input.InputManager") base class has several **Methods** that check mouse button states: _Pressed_, _Down_, and _Released_:

| Method | Description |
| --- | --- |
| [HasDownMouseButtons()](xref="SiliconStudio.Xenko.Input.InputManager.HasDownMouseButtons") | Checks if one or more mouse buttons are currently being pressed down. |
| [HasPressedMouseButtons()](xref="SiliconStudio.Xenko.Input.InputManager.HasPressedMouseButtons") | Checks if one or more mouse buttons were pressed in the last update. |
| [HasReleasedMouseButtons()](xref="SiliconStudio.Xenko.Input.InputManager.HasReleasedMouseButtons") | Checks if one or more mouse buttons were released in the last update. |
| [IsMouseButtonDown (MouseButton)](xref="SiliconStudio.Xenko.Input.InputManager.IsMouseButtonDown.SiliconStudio.Xenko.Input.MouseButton") | Checks if a specified mouse button is currently being pressed down. For example, ```IsMouseButtonPressed(MouseButton.Middle)``` event triggers an action, associated with the middle mouse button. |
| [IsMouseButtonPressed (MouseButton)](xref="SiliconStudio.Xenko.Input.InputManager.IsMouseButtonPressed.SiliconStudio.Xenko.Input.MouseButton") | Checks if a specified mouse button was pressed in the last update. For example, ```IsMouseButtonPressed(MouseButton.Left)``` event triggers an action, associated with the left mouse button. |
| [IsMouseButtonReleased (MouseButton)](xref="SiliconStudio.Xenko.Input.InputManager.IsMouseButtonReleased.SiliconStudio.Xenko.Input.MouseButton") | Checks if a specified mouse button was released in the last update. For example, ```IsMouseButtonReleased(MouseButton.Right)``` event triggers an action, associated with the right mouse button. |

###Mouse Wheel Delta 

You can assign mouse wheel to control various actions in a game. This way, when mouse wheel position changes, it triggers certain events, e.g. switches weapons, moves characters, zooms in, etc.

[Input.MouseWheelDelta](xref="SiliconStudio.Xenko.Input.InputManager.MouseWheelDelta") property returns the following values:

* Any floating value: There is a scroll movement on mouse wheel.
* Null: There is no movement.

> [!Note] [Input.MouseWheelDelta](xref="SiliconStudio.Xenko.Input.InputManager.MouseWheelDelta") returns a positive value when a user scrolls forward and negative value when he/she scrolls backwards.

> [!Note] By default, [Input.MouseWheelDelta](xref="SiliconStudio.Xenko.Input.InputManager.MouseWheelDelta") returns 120*x, where X is amount of wheel steps scrolled during the last update.

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
}
```

<div class="doc-relatedtopics">
* [Gamepads](gamepads.md)
* [Keyboard](keyboard.md)
* [Pointers](pointers.md)
* [Virtual Keys](virtual-keys.md)
</div>
