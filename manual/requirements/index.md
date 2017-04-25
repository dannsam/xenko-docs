# Requirements

![Requirements](media/requirements.png)

To develop projects with Xenko, you need:

| Requirement     | Specifications 
|-----------------|----------------
|Hard drive space | 5GB
| Operating system | Windows 7, 8.1, 10 
| IDE for writing code | Visual Studio 2015 or 2017
| CPU | x64
| GPU | DirectX 10+ compatible GPU
| RAM | 4GB (minimum), 8GB (recommended) 

RAM requirements vary depending on your project:

* Developing simple 2D applications doesn't require much RAM.
* Developing 3D games with lots of assets requires larger amounts of RAM.

## Mobile development

To develop for mobile platforms, you also need:

| Platform | Requirements
|----------|-------
| Android  | Xamarin* 
| iOS      | Mac computer, Xamarin* 

> [!Note]
> * If you use Visual Studio, you already have Xamarin. If you need to, you can get it from the [Xamarin site](https://store.xamarin.com/).

For information about supported platforms, see [Platforms](../platforms/index.md).

## Run games made with Xenko

To run games made with Xenko, you need:

- .NET 4.6.1
- DirectX11 (included with Windows 10 and later)
- Visual C++ 2015 runtimes (x86 and/or x64, depending on what you set in your project properties in Visual Studio)