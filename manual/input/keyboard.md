#Keyboard

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Level Programmer</span>

**Keyboard** is a common input device, which triggers various actions in desktop games. **Xenko Game Studio** handles keyboard input by implementing **Methods** and **Properties** of the ```Input``` base class and the ```KeyEvent``` struct.

##Check Keyboard Availability

Before you can handle keyboard input with either ```Input``` base class or ```KeyEvent``` struct, it's important to check, whether a keyboard is available in the system.

```HasKeyboard``` property of the ```Input``` base class returns a Boolean (true/false) value to indicate keyboard availability.

> [!Note] Suppose, the end user unplugged a keyboard, started a game, and then plugged in a keyboard in run-time.
> In this case ``HasKeyboard`` property returns a **false** value even when the user plugs in a keyboard.
> This means, user has to close and re-open game application, otherwise keyboard will not be available in the game.

**Syntax**: ```bool hasKeyboard = Input.HasKeyboard;```

##Use Public Lists

Using inbuilt key events you can identify key status (_Pressed/Released/Down_) and perform the required actions. You can adjust your **Game's Keyboard Controls** with the following public lists:

| Public List | Description |
| --- | --- |
| KeyDown | Gets a list of the keys being currently pressed down. |
| KeyEvent | Gets a list of the key events that happened in the last frame (keys pressed or released). |

**Declaration**: ```public KeyEvent(Keys key, KeyEventType type) ```

The ``KeyEvent`` has two parameters:

1. **Key**: The key that has been pressed or released.
2. **KeyEventType**: There are two key event types:
    * Pressed: A key has been pressed.
    * Released: A key has been released.

> [!Note] If you handle **Keyboard Input** with **Public Lists**, you have to check the states of all buttons at every update.

##Use Methods of the Input Class

```Input``` base class has several **Methods** that check keyboard states: Pressed, Down, and Released.

| Method | Description |
| --- | --- |
| IsKeyDown (Keys) | Checks if a specified key is currently being pressed down. |
| IsKeyPressed(Keys) | Checks if a specified key was pressed in the last frame. |
| IsKeyReleased(Keys) | Checks if a specified key was released in the last frame. |

> [!Note] Xenko API currently does not support retrieving interpreted keys,
> such as special characters and capital letters.

##Code Sample

```
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SiliconStudio.Core.Mathematics;
using SiliconStudio.Xenko.Input;
using SiliconStudio.Xenko.Engine;

namespace MyGame
{
    public class KeyboardEventsScript : SyncScript
    {
        //declared public member variables and properties will show in the game studio

        public override void Update()
        {
            //do something every new update
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

Now, you know how to handle **Keyboard Input** in your game. For information on how to handle other input devices, see [Input overview page](index.md).
