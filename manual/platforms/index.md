# Multiplatform support

Xenko is cross-platform game engine. You can create your game once, then compile and deploy it on all the platforms Xenko supports. The engine converts C# and shaders to the different native languages and abstracts the concepts that differ between platforms, so you don't have to adapt your code for each  platform.

## Supported platforms

- Windows Desktop 7, 8, 10
- Windows Universal (UWP)
- [Linux (Ubuntu)](linux/index.md)
- Android 2.3+
- iOS 8.0+

> [!TIP]
> At runtime, you can check which platform your game is executing by using the [Platform.Type](xref:SiliconStudio.Core.Platform.Type) variable.

## Supported graphic APIs

- DirectX 9, 10, 11, 12
- OpenGL 3, 4
- OpenGL ES 2, 3
- Vulkan

> [!TIP]
> At runtime, you can check which graphics backend your game is executing by using the [GraphicsDevice.Platform](xref:SiliconStudio.Xenko.Graphics.GraphicsDevice.Platform) variable.

## Preprocessor variables

Xenko defines preprocessor variables if you want to write code that compiles only under a specific platform. For more information, see [Preprocessor variables](../scripts/preprocessor-variables.md).