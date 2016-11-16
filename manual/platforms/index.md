# Multiplatform support

Xenko is cross-platform game engine. 

This means that it allows you to create your game once and seamlessly 
compile and deploy it on the all the Xenko supported platforms.
The engine converts C# and shaders to the different native languages 
and abstracts the concepts that differ from one platform to the other,
so that you don't have adapt your game code to each specific platform.

## Supported platforms

Xenko currently supports for following platforms:
- Windows Desktop 7, 8, 10
- Windows Universal (UWP)
- [Linux (Ubuntu)](linux/index.md)
- Android 2.3+
- iOS 8.0+

For information concerning a specific platform, click on the corresponding link.

> [!TIP]
> At runtime, you can check on which platform your game is executing by using the 
> [Platform.Type](xref:SiliconStudio.Core.Platform.Type) variable.


## Supported graphic APIs

Xenko currently support the following graphics back-ends:
- DirectX 9, 10, 11, 12
- OpenGL 3, 4
- OpenGL ES 2, 3
- Vulkan

For information concerning a specific API, click on the corresponding link.

> [!TIP]
> At runtime, you can check on which graphics back-end your game is executing by using the 
> [GraphicsDevice.Platform](xref:SiliconStudio.Xenko.Graphics.GraphicsDevice.Platform) variable.

## Preprocessor variables

Xenko defines preprocessor variables if you want to write code that can 
compile only under a specific platform, for more information see
[Preprocessor variables](../scripts/preprocessor-variables.md).
