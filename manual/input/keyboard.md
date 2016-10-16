#Keyboard

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

The **Keyboard** is the most common input device for **desktop games**.
There are two ways to handles keyboard input in Xenko, first by **querying key states**, 
and secondly by **using [KeyEvent](xref="SiliconStudio.Xenko.Input.KeyEvent") lists**.
You can access both from the [Input](xref="SiliconStudio.Xenko.Input.InputManager") base class.

See [Input Overview Page](index.md) to understand the difference between the different options.

##Check Keyboard Availability

Before analyzing keyboard input, it's important to first check that you have a keyboard is available to the system.

[Input.HasKeyboard](xref="SiliconStudio.Xenko.Input.InputManager.HasKeyboard") property returns a Boolean (true/false) value that indicates keyboard availability.

> [!Note] Currently Xenko does not support keyboard plugged at run-time. This feature will be added in the future releases.

##Get Key States

[Input](xref="SiliconStudio.Xenko.Input.InputManager") base class provides several **Methods** to query keyboard states: _Pressed_, _Down_, and _Released_.

| Method | Description |
| --- | --- |
| [IsKeyDown(Keys)](xref="SiliconStudio.Xenko.Input.InputManager.IsKeyDown.SiliconStudio.Xenko.Input.Keys") | Checks if a specified key is currently being pressed down. |
| [IsKeyPressed(Keys)](xref="SiliconStudio.Xenko.Input.InputManager.IsKeyPressed.SiliconStudio.Xenko.Input.Keys") | Checks if a specified key was pressed in the last frame. |
| [IsKeyReleased(Keys)](xref="SiliconStudio.Xenko.Input.InputManager.IsKeyReleased.SiliconStudio.Xenko.Input.Keys") | Checks if a specified key was released in the last frame. |

> [!Note] Xenko API currently does not support retrieving interpreted keys,
> such as special characters and capital letters.

##Get Key Events

There are some cases when you want to **know all the keys** that are currently down or that have been pressed during last frame.
The key **state query API is not well suited** in this case as you would have to make a query for each of the available keys.
You can use the **Key Events** collections available in the [Input](xref="SiliconStudio.Xenko.Input.InputManager") base class
for this purpose.

| Public List | Description |
| --- | --- |
| [KeyDown](xref="SiliconStudio.Xenko.Input.InputManager.KeyDown") | Gets a list of the keys being currently pressed down. |
| [KeyEvents](xref="SiliconStudio.Xenko.Input.InputManager.KeyEvents") | Gets a list of the key events that happened in the last frame (keys pressed or released). |

Every [KeyEvent](xref="SiliconStudio.Xenko.Input.KeyEvent") has two parameters:

1. **Key**: The key that has been pressed or released.
2. **KeyEventType**: There are two key event types:
    * _Pressed_: A key has been pressed.
    * _Released_: A key has been released.

##Code Sample

```
    public class KeyboardEventsScript : SyncScript
    {
        //Declared public member variables and properties will show in the game studio.

        public override void Update()
        {
            //Perform an action in every update.
            if (Game.IsRunning)
            {
                if (Input.IsKeyDown(Keys.Left))
                {
                    this.Entity.Transform.Position.X -= 0.1f;
                }
                if (Input.IsKeyDown(Keys.Right))
                {
                    this.Entity.Transform.Position.X += 0.1f;
                }
            }
        }
    }
```

<div class="doc-relatedtopics">
* [Gamepads](gamepads.md)
* [Mouse](mouse.md)
* [Virtual Buttons](virtual-buttons.md)
</div>
