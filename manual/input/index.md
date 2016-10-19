#Input

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

**Input devices** allow users to interact with games and applications.
Every interactive game should support at least one input device, otherwise it will be impossible to play.

![Input Devices](media/input-device-icons.png)

Standard input devices are _Keyboard_, _Mouse_, _Gamepad_, _Pointers_, _Gestures_, and _Sensors_.

Xenko provides two types of APIs:
* Low-level APIs are close to hardware, so they let you query input with minimum latency. They allow fast processing of the input from pointers, keyboard, mouse, gamepad, etc.
* High-level APIs interpret Input for you, but they have higher latency. These APis are reserved for Gestures and some Sensors.

Xenko handles **Input** entirely via scripts.

## Overview

To check whether a particular input device is available,
use the corresponding property of the [Input](xref="SiliconStudio.Xenko.Input.InputManager") base class.
For instance, use [Input.HasMouse](xref="SiliconStudio.Xenko.Input.InputManager.HasMouse") to check if the **Mouse** is connected.

> [!Note] 
> Currently Xenko does not support devices plugged at run-time. This feature will be added in the future releases.

After you check device availability, there are _Four_ ways to handle **Input** in Xenko.

###1: Query States

You can query the **State** of the _Keys_ and _Buttons_ in the last update.
For instance, [KeyDown](xref="SiliconStudio.Xenko.Input.InputManager.KeyDown") gets a list of the keys that were _Down_ in the last update.

Here's how you should handle input from various devices:

* For _Gamepad digital buttons_ and _Keyboard_, query which keys and buttons are _Down_.
* For _Gamepad analog buttons_ (thumbs and shoulders), query _Position_ value.
* For _Sensors_, query _Float_ or _Vector_ values.


[Diagram 1]
[Diagram 2]
[Diagram 3]
**Diagram user actions/ states for**
**simple (one state change between the two updates) button change,**
**complex button change (2 state changes) and one analog trigger change (trigger goes from val a to b).**

###2: Query State Changes

You can query the **Change of State** of the _Buttons_ and _Keys_ since the previous update.
In this case, you don't get the list of all buttons and keys, but have to query each Button and Key separately.

* For _Gamepad digital buttons_, _Keyboard_, and _Mouse buttons_, query if the button or key was _Pressed, _Down_ and _Released_ in the last update.
* For _Mouse Position_ and _Mouse Wheel Scrolls_, query _Delta Values_ since the previous update.

[Diagram 4]
[Diagram 5]
[Diagram 6]
**Diagram with simple and complex case (1 / 2 changes)**
**changes are compared to previous frame (pressed -> release -> pressed in one update produces no change)**

**Query Delta Changes**
**simple diagram**

###3: Query the List of Events
For _Pointers_, _Gestures_, and _Keyboard_, you can query the **List of Events** that happened in the last update.

[Diagram 7]
[Diagram 8]
**Diagram showing simple (1 action) and complex (pressed/move, release pointer) case.**

###4: Use Virtual Buttons
You can use **Virtual Buttons**, so that the **Input** is not tied to physical buttons and keys.
Associate keys to actions, and write your gameplay based on those actions rather than particular keys.

Fore more info read[Vritual keys].

[Diagram 9]


##Available Input APIs

* [Gamepads](gamepads.md): Low-level API lets you control buttons and analog sticks of the XBox-like gamepads.
* [Gestures](gestures.md): High-level API interprets predefined patterns of finger touches.
* [Keyboard](keyboard.md): Low-level API allows you to query the state of keys and control keyboard input.
* [Mouse](mouse.md): Low-level API lets you query the state of mouse buttons, query input from mouse wheel and additional mouse buttons.
* [Pointers](pointers.md): Low-level API for mobile devices allows to query data of finger touches.
* [Sensors](sensors.md): Special API that interprets input from the sensors of the mobile devices.
* [Virtual Buttons](virtual-buttons.md): Special API helps you build games and applications around user actions rather than particular physical keys and buttons.
