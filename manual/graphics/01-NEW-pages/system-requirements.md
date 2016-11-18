# System requirements

Xenko is a cross-platform game engine, so there's no need to adapt your code to each specific platform.
Create a single project and seamlessly deploy it on all supported platforms.
Game Engine automatically converts **C#** and **Shaders** code to specific platform language and abstracts the concepts that differ between platforms.

![System requirements and supported APIs](media/game-engine-system-requirements-intro-pic.png)

## System specifications

To develop projects on Xenko, your PC has to fulfill the following **requirements**:

| Requirement | Specifications |
|-------|-------|
| Platform | Windows Desktop (7/8/8.1/10) |
| IDE for writing code | Visual Studio 2012/2013/2015<br> Xamarin Studio |
| CPU | x64 Quad Core<br> x64 Dual Core Hyper-threaded |
| GPU | DirectX 10+ compatible GPU |

RAM requirements vary depending on the project's complexity:
* Developing simple 2D applications does not require much RAM.
* Developing 3D games with numerous assets requires larger amounts of RAM.

### Mobile development

There are additional requirements if your project targets popular mobile platforms:

| Platform | Requirements |
|-------|-------|
| Andriod | Xamarin license* |
| iOS | Mac Computer, Xamarin license* |

> [!Note]
> If you use Visual Studio, you automatically have free Xamarin license.

## Supported graphics APIs 

In Xenko, you can create projects that target the following **graphics APIs**:

* DirectX 9, 10, 11, 12
* OpenGL 3, 4
* OpenGL ES 2, 3
* Vulkan

> [!Tip]
> Use [GraphicsDevice.Platform](xref:SiliconStudio.Xenko.Graphics.GraphicsDevice\(SiliconStudio.Xenko.Graphics.GraphicsDevice.Platform\)) variable to check which graphics API is executed at runtime.

## Supported platforms

With Xenko, you can develop applications for the following **platforms**:

* Windows Desktop
* Windows Universal (UWP)
* Linux
* Android
* iOS

> [!Tip]
> Use [Platform.Type](xref:SiliconStudio.Core.PlatformType) variable to check which platform the application executes at runtime.

## Pre-processor variables

If you want to write code that can compiles only under a specific platform, use preprocessor variables.
For more information, see [Preprocessor Variables](../scripts/preprocessor-variables.md).
