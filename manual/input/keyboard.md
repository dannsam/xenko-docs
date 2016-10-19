#Keyboard

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

**Keyboard** is the most common input **device for desktop games**.
There are two ways to handle keyboard input in Xenko:

1. Query **Key States**.
2. Use [KeyEvent](xref="SiliconStudio.Xenko.Input.KeyEvent") lists.

You can access both from the [Input](xref="SiliconStudio.Xenko.Input.InputManager") base class.

See [Input Overview Page](index.md) to understand the difference between these options.

##Check Keyboard Availability

Before handling keyboard input, check whether a keyboard is available in the system:

Use [Input.HasKeyboard](xref="SiliconStudio.Xenko.Input.InputManager.HasKeyboard") to check if the **Keyboard** is currently connected.

> [!Note] Currently Xenko does not support keyboard plugged at run-time. This feature will be added in the future releases.

##Get Key States

You can query **Key states and state changes** with the following **Methods**:

| Method | Description |
| --- | --- |
| [IsKeyDown(Keys)](xref="SiliconStudio.Xenko.Input.InputManager.IsKeyDown.SiliconStudio.Xenko.Input.Keys") | Checks if a specified key is in the _Down_ state. |
| [IsKeyPressed(Keys)](xref="SiliconStudio.Xenko.Input.InputManager.IsKeyPressed.SiliconStudio.Xenko.Input.Keys") | Checks if a specified key was _Pressed_ since the previous update. |
| [IsKeyReleased(Keys)](xref="SiliconStudio.Xenko.Input.InputManager.IsKeyReleased.SiliconStudio.Xenko.Input.Keys") | Checks if a specified key was _Released_ since the previous update. |

> [!Note] Xenko API currently does not support retrieving interpreted keys,
> such as special characters and capital letters.

##Get Key Events

In some cases, you want to know all **Keys** that are currently _Down_, or all **Keys** that have been _Pressed_ during last frame.
The **Key state query API is not well suited** in this case, as you have to query each available key separately.

Instead, you can use **Key Events** collections available in the [Input](xref="SiliconStudio.Xenko.Input.InputManager") base class.

| Public List | Description |
| --- | --- |
| [KeyDown](xref="SiliconStudio.Xenko.Input.InputManager.KeyDown") | Gets a list of the keys that were down in the last update. |
| [KeyEvents](xref="SiliconStudio.Xenko.Input.InputManager.KeyEvents") | Gets a list of the key events that happened in the last update (keys pressed or released). |

Every [KeyEvent](xref="SiliconStudio.Xenko.Input.KeyEvent") has two parameters:

1. **Key**: The key that has been _Pressed_ or _Released_.
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
