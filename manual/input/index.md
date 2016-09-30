#Input
Players use **Input** devices to interact with game environment.
Every game must support at least one input device, otherwise players won't be able to play it.

Xenko handles **Input** entirely via scripts. You have two options when handling **Input** from various devices:
1. Use [Input](xref="SiliconStudio.Xenko.Input.InputManager") base class **Methods** to retrieve the three states of the buttons, keys, and pointers: _Pressed_, _Down_, and _Released_.
2. Use corresponding ``Events' Lists`` to retrieve the two states of keys, buttons, and pointers: _Pressed_ and _Released_.

> [!Note] [Input](xref="SiliconStudio.Xenko.Input.InputManager") base class and ``Events' Lists`` handle **Input** in a different manner.
> Take this difference into account when writing your scripts. The following diagrams explain the difference between the two options:

![Handle user input via Input class methods](media/handle-input-with-input-base-class.png)

![Handle user input via Events' Lists](media/handle-input-with-events-lists.png)

Xenko supports all common **Input Devices**, including mouse, keyboard, gamepad, pointers, gestures, and sensors.
This section explains various **Input Devices** supported by Xenko.

![Input Devices](media/input-device-icons.png)

This section includes:

* [Gamepads](gamepads.md).
* [Gestures](gestures.md).
* [Keyboard](keyboard.md).
* [Mouse](mouse.md).
* [Pointers](pointers.md).
* [Sensors](sensors.md).
* [Virtual Buttons](virtual-buttons.md).