#Gamepads

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

**Gamepads** are popular console input devices, e.g. Xbox Elite Wireless Controller and PS4 DualShock.
Some players use gamepads instead of usual keyboard/mouse even on desktop platforms.

Each **Gamepad** brand has unique buttons and features. Therefore, it's important to understand how to handle gamepad input and what limitations **Xenko** has with regards to different gamepad types.

##Check Gamepad Availability

Before you can handle gamepad input, check whether a gamepad is available in the system:

1. [Input.HasGamePad](xref="SiliconStudio.Xenko.Input.InputManager.HasGamePad") property returns a Boolean (true/false) value that indicates gamepad availability.

2. [Input.GamePadCount](xref="SiliconStudio.Xenko.Input.InputManager.GamePadCount") property gets the number of gamepads connected to the system.

3. [Input.GamePadState.IsConnected](xref="SiliconStudio.Xenko.Input.GamePadState.IsConnected") field is a Boolean (true/false) value that indicates if a specific gamepad is connected.

> [!Note] 
> Currently Xenko does not support gamepad plugged at run-time. This feature will be added in the future releases.

##Gamepad Buttons

Below is an image of the Xbox Elite Wireless Controller. Let's use it to study how to handle **Gamepad Input** in your games:

![Xbox Gamepad](media/input-gamepad-standard-gamepad.png)

1. Most gamepad controls are **Digital** buttons. They have only three states: _Pressed_, _Down_, _Released_.
2. Right and Left **Triggers** (**C** & **D**) are **Analog** buttons. A player can pull a gamepad Trigger to a different degree. Therefore, you have to get the precise pull-degree of the **Triggers** at every update.
3. Right and Left **Thumbs** of **Thumb Sticks** (**A** & **B**) combine functionality of **Analog** and **Digital** buttons. Here's how you can handle **Input** from **Thumbs**:

|User Input | How to handle input?|
|----|----|
|A player presses a stick like a button | Handle like input from a digital button with the usual three states (_Pressed_, _Down_, _Released_). |
|A player rotates a stick in some direction | Use **Thumb stick x-axis/y-axis value** to get a precise stick position at every update. |

## Handle Gamepad Input

### Digital Buttons

For **Digital buttons** as well as for instances when a player **Presses Thumb buttons**, use three methods of the [Input](xref="SiliconStudio.Xenko.Input.InputManager") base class:

| Method | Functionality |
|----|----|
| [IsPadButtonDown(Int32, GamePadButton)](xref="SiliconStudio.Xenko.Input.InputManager.IsPadButtonDown.System.Int32") | Checks whether the specified gamepad button is being pressed down. |
| [IsPadButtonPressed(Int32, GamePadButton)](xref="SiliconStudio.Xenko.Input.InputManager.IsPadButtonPressed.System.Int32") | Checks whether the specified gamepad button was pressed since the previous update. |
| [IsPadButtonReleased(Int32, GamePadButton)](xref="SiliconStudio.Xenko.Input.InputManager.IsPadButtonReleased.System.Int32") | Checks whether the specified gamepad button was released since the previous update. |

_Index (Int32)_: Specifies a gamepad you want to check.

_GamePadButton_: Specifies a button you want to check.

You can also get information on digital buttons with the [GamePadState.Buttons](xref="SiliconStudio.Xenko.Input.GamePadState.Buttons") field.

> [!Note] ``Buttons`` field is a bitmask that uses binary system.
> Depending on the bitmask value you can determine which buttons are _Up_ or _Down_.

### Analog Buttons

[Input.GetGamePad(Int32)](xref="SiliconStudio.Xenko.Input.InputManager.GetGamePad.System.Int32") method handles **Analog Input** from **Triggers** and **Thumbs' Rotations**.

_Index (Int32)_: Specifies a gamepad you want to check.

Use the following fields of the [Input.GetGamePad(Int32)](xref="SiliconStudio.Xenko.Input.InputManager.GetGamePad.System.Int32") method to handle **Input** from a specific **Analog** button:

| Field | Description |
|----|----|
| [LeftThumb](xref="SiliconStudio.Xenko.Input.GamePadState.LeftThumb) | Left thumb stick x-axis/y-axis value in the range [-1.0f, 1.0f] for both axis. |
| [LeftTrigger](xref="SiliconStudio.Xenko.Input.GamePadState.LeftTrigger) | Left trigger analog control value in the range [0, 1.0f] for a single axis. |
| [RightThumb](xref="SiliconStudio.Xenko.Input.GamePadState.RightThumb) | Right thumb stick x-axis/y-axis value in the range [-1.0f, 1.0f] for both axis. |
| [RightTrigger](xref="SiliconStudio.Xenko.Input.GamePadState.RightTrigger) | Right trigger analog control value in the range [0, 1.0f] for a single axis. |

### Gamepad Vibration
[Input.SetGamePadVibration(Int32, Single, Single)](xref="SiliconStudio.Xenko.Input.InputManager.SetGamePadVibration.System.Int32.System.Single.System.Single") method sets vibration states for gamepads.

> [!Note] Currently, you cannot control gamepad vibration in Xenko.
> This feature will be added in the future releases.

##Gamepad Limitations

Currently, Xenko doesn't distinguish between **Gamepads** of different brands. Such approach implies certain limitations.
For instance, PS4 DualShock controller has a touchpad, but you can't use this touchpad as an **Input Source** in Xenko.
This issue will be addressed in the future releases of the Game Engine.

##Code Sample

```
public class TestScript : SyncScript
{
	public override void Update()
	{   
		//Check if a gamepad is available.
		if (Input.HasGamePad)
		{
			//Get a number of plugged-in gamepads.
			int gamepadCount = Input.GamePadCount;
			
			// Check each gamepad's status.
			for (int i = 0; i < gamepadCount; i++)
			{
				//Get analog sticks' position (Thumbs)
				Vector2 speed = Input.GetGamePad(i).LeftThumb;
				Vector2 direction = Input.GetGamePad(i).RightThumb;

				//Get digital buttons's status.
				if (Input.IsPadButtonDown(i, GamePadButton.X))
				{
					// Perform a repetitive action (for example: shoot).
				}
				if (Input.IsPadButtonPressed(i, GamePadButton.A))
				{
					// Perform a one-time action (for example: use med-kit). 
					// The action is triggered only once, even if player holds the button down.
				}
			}
		}
	}
}
```

<div class="doc-relatedtopics">
* [Keyboard](keyboard.md)
* [Virtual Buttons](virtual-buttons.md)
</div>
