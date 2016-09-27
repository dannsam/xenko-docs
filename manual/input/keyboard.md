#Keyboard

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

**Keyboard** is a common input device, which triggers various actions in desktop games. **Xenko Game Studio** handles keyboard input by implementing **Methods** and **Properties** of the [Input](xref="SiliconStudio.Xenko.Input.InputManager")  base class and the [KeyEvent](xref="SiliconStudio.Xenko.Input.KeyEvent") struct.

##Check Keyboard Availability

Before you can handle keyboard input with either [Input](xref="SiliconStudio.Xenko.Input.InputManager") base class or [KeyEvent](xref="SiliconStudio.Xenko.Input.KeyEvent") struct, it's important to check, whether a keyboard is available in the system.

[Input.HasKeyboard](xref="SiliconStudio.Xenko.Input.InputManager.HasKeyboard") property returns a Boolean (true/false) value that indicates keyboard availability.

> [!Note] Currently Xenko does not support keyboard plugged at run-time. This feature will be added in the future releases.

**Syntax**: ```bool hasKeyboard = Input.HasKeyboard;```

##Get Key States

[Input](xref="SiliconStudio.Xenko.Input.InputManager") base class has several **Methods** that check keyboard states: _Pressed_, _Down_, and _Released_.

| Method | Description |
| --- | --- |
| [IsKeyDown(Keys)](xref="SiliconStudio.Xenko.Input.InputManager.IsKeyDown.SiliconStudio.Xenko.Input.Keys") | Checks if a specified key is currently being pressed down. |
| [IsKeyPressed(Keys)](xref="SiliconStudio.Xenko.Input.InputManager.IsKeyPressed.SiliconStudio.Xenko.Input.Keys") | Checks if a specified key was pressed in the last frame. |
| [IsKeyReleased(Keys)](xref="SiliconStudio.Xenko.Input.InputManager.IsKeyReleased.SiliconStudio.Xenko.Input.Keys") | Checks if a specified key was released in the last frame. |

> [!Note] Xenko API currently does not support retrieving interpreted keys,
> such as special characters and capital letters.

##Get Key Events

Using inbuilt key events you can identify key status (_Pressed/Released/Down_) and perform the required actions. You can adjust your **Game's Keyboard Controls** with the following public lists:

| Public List | Description |
| --- | --- |
| [KeyDown](xref="SiliconStudio.Xenko.Input.InputManager.KeyDown") | Gets a list of the keys being currently pressed down. |
| [KeyEvents](xref="SiliconStudio.Xenko.Input.InputManager.KeyEvents") | Gets a list of the key events that happened in the last frame (keys pressed or released). |

**Declaration**: ```public KeyEvent(Keys key, KeyEventType type) ```

Every [KeyEvent](xref="SiliconStudio.Xenko.Input.KeyEvent") has two parameters:

1. **Key**: The key that has been pressed or released.
2. **KeyEventType**: There are two key event types:
    * _Pressed_: A key has been pressed.
    * _Released_: A key has been released.

> [!Note] If you handle **Keyboard Input** with **Public Lists**, you have to check the states of all buttons at every update.

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
* [Virtual Keys](virtual-keys.md)
</div>
