#Input

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

**Input** devices allow users to interact with games and applications.
Every interactive game should support at least one input device, otherwise it will be impossible to play.

Standard input devices are _Keyboard_, _Mouse_, _Gamepad_, _Pointers_, _Gestures_, and _Sensors_.
Xenko handles **Input** entirely via scripts.

![Input Devices](media/input-device-icons.png)

## Check Device Availability
To check whether a particular input device is available,
use the corresponding property of the [Input](xref="SiliconStudio.Xenko.Input.InputManager") base class.
For instance, use [Input.HasMouse](xref="SiliconStudio.Xenko.Input.InputManager.HasMouse") to check if the **Mouse** is connected.

> [!Note] 
> Currently Xenko does not support devices plugged at run-time. This feature will be added in the future releases.

After you check device availability, there are _Four_ ways to handle **Input** in Xenko.

##1: Query States

You can query the **State** of the _Keys_ and _Buttons_ in the last update:

* For _Gamepad digital buttons_, _Keyboard_, and _Mouse buttons_, the **States** are _Down_ and _Up_.
* For _Gamepad analog buttons_ (thumbs and shoulders), you should query _Stick Position_, rather than **State**.
* For _Sensors_, you should query _Float_ or _Vector_ values, rather than **State**.

For instance, [KeyDown](xref="SiliconStudio.Xenko.Input.InputManager.KeyDown") gets a list of the keys that were _Down_ in the last update.


[Diagram 1]
[Diagram 2]
[Diagram 3]
**Diagram user actions/ states for**
**simple (one state change between the two updates) button change,**
**complex button change (2 state changes) and one analog trigger change (trigger goes from val a to b).**

##2: Query State Changes

You can query the **Change of State** of the Buttons and Keys since the previous update.
In this case, you have to query each Button and Key separately.

* For _Gamepad digital buttons_, _Keyboard_, and _Mouse buttons_, the **States** are _Pressed, _Down_ and _Released_.
* For _Mouse Position_ and _Mouse Wheel Scrolls_, you query the _Delta Values_ since the previous update.

[Diagram 4]
[Diagram 5]
[Diagram 6]
**Diagram with simple and complex case (1 / 2 changes)**
**changes are compared to previous frame (pressed -> release -> pressed in one update produces no change)**

**Query Delta Changes**
**simple diagram**

##3: Query the List of Events
For _Pointers_, _Gestures_, and _Keyboard_, you can query the **List of Events** that happened in the last update.

[Diagram 7]
[Diagram 8]
**Diagram showing simple (1 action) and complex (pressed/move, release pointer) case.**

##4: Use Virtual Buttons
You can use **Virtual Buttons** system to abstract **Input** of your game.
This way, you associate keys to actions and write your gameplay based on those actions rather than keys.

Fore more info read[Vritual keys].

[Diagram 9]


This section includes:

* [Gamepads](gamepads.md).
* [Gestures](gestures.md).
* [Keyboard](keyboard.md).
* [Mouse](mouse.md).
* [Pointers](pointers.md).
* [Sensors](sensors.md).
* [Virtual Buttons](virtual-buttons.md).