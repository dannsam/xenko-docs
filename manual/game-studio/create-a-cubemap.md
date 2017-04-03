

## Create a cubemap

*Cubemaps** are a six-sided textures. Xenko uses cubemaps with the extension `.dds`. They're used for purposes such as [skyboxes](../graphics/skyboxes.md).

![Distant planet skybox](../graphics/media/skybox-disassembled.png)

![Merged skybox](../graphics/media/skybox-assembled.png)

Currently, Game Studio can't convert image files to `.dds` files. Use another application to create a cubemap from separate image files, such as:

* [Nvidia conversion tool](https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop)
* [ATI conversion tool](http://developer.amd.com/tools-and-sdks/archive/games-cgi/cubemapgen)

## Create a cubemap in Game Studio

1. In the **scene editor**, position the camera at the point where you want to capture the cubemap. The direction the camera is facing doesn't matter.

2. In the scene editor toolbar, click **Generate cubemap**.

3. Browse to the location on disk you want to save the cubemap, specify a name, and click **Save**.

>![Tip]
>We recommend you save the cubemap in your project **Resources** folder. For more information, see [Organize your files in version control](../files-and-folders/organize-your-files-in-version-control.md).

Game Studio creates a cubemap in the location you specified.

## See also

* [Skyboxes](../graphics/skyboxes.md)