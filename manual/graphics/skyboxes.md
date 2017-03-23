# Skyboxes
<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>
<span class="label label-doc-audience">Programmer</span>

**Skyboxes** are backgrounds that create the illusion of space and distance. Typical skybox backgrounds include skies, clouds, mountains, and other scenery.

To create a skybox, Xenko encloses the scene in a cube and maps a texture, called a **cubemap**, on the cube's inner faces. This simulates three-dimensional surroundings that appear spacious. Skyboxes are pre-rendered, so require little GPU and CPU. You can also [use skyboxes to light a scene](lights-and-shadows/skybox-lights.md).

![Distant planet skybox](media/skybox-disassembled.png)

![Merged skybox](media/skybox-assembled.png)

> [!Note]
> Currently, Xenko doesn't support skydomes.

## Cubemaps

Cubemaps are composed of six images, one for each face of the skybox cube. Xenko uses cubemaps with the extension `.dds`.

Currently, Game Studio can't convert image files to `.dds` files. Use another application to create a cubemap from separate image files, such as:

* [Nvidia conversion tool](https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop)
* [ATI conversion tool](http://developer.amd.com/tools-and-sdks/archive/games-cgi/cubemapgen)

### Add a cubemap to a project

* In the **Asset view**, click ![](media/engine-skybox-add-new-asset-button.png), select **Textures** > **Color texture**, and browse to the `.dds` file.

    ![Select texture as asset type](media/engine-skybox-select-asset-type.png)

* Alternatively, drag and drop a `.dds` file from **Windows Explorer** to the **Asset view**, then select **Color texture**.

    ![Drag and drop background texture](media/drag-texture.gif)

The cubemap is now available as an asset in your project. You can use the cubemap asset in your skybox asset.

## Add a skybox to a project

1. In the **Asset view**, click ![Add new asset](media/engine-skybox-add-new-asset-button.png)

2. Select **Miscellaneous**, and choose **Skybox**.

    ![Choose asset type](media/engine-skybox-choose-asset-type.png)

    The **Asset picker** opens.

3. Choose a skybox texture (`.dds` file) from the project assets and click **OK**.
    
    ![Choose texture](media/engine-skybox-select-skybox-texture.png)

## Use a skybox texture

To use a skybox texture, add it to a **background component**.

Xenko includes an entity with a background component in the project by default. Only one skybox can be active in a scene at a time. If there are multiple skyboxes, Xenko only loads the first.

You can add background components to as many entities as you need. You might want to include more than one background, for example, if you want to switch skyboxes at runtime.

To add a skybox texture to an entity:

1. In the **Scene view**, select the entity you want to add the component to.

    This can be an empty entity. Its position in the scene doesn't matter.

2. In the **Property grid** (on the right by default), click **Add component** and select **Background**.

    ![Add background component](media/engine-skybox-add-background-component.png)

3. Under **texture**, specify the skybox texture you want to use.

    ![Background component properties](media/engine-skybox-background-component-properties.png)

Xenko displays the skybox in the scene.

## Use a skybox texture as a light source

You can set the skybox as the light type in a [Light component](xref:SiliconStudio.Xenko.Engine.LightComponent). Xenko analyzes the skybox texture and generates lighting using [image-based lighting (Wikipedia)](https://en.wikipedia.org/wiki/Image-based_lighting). For more information, see [Skybox lights](lights-and-shadows/skybox-lights.md).

## Example code

The following code changes the skybox background:

```cs
public Texture cubemapTexture;
public void ChangeBackgroundParameters()
{
    // Get the background component from an entity
	var background = directionalLight.Get<BackgroundComponent>();

	// Replace the existing background
	background.Texture = cubemapTexture;

	// Change the background intensity
	background.Intensity = 1.5f;
}
```

## See also

* [Skybox lights](lights-and-shadows/skybox-lights.md)
* [Lighting and shadows](lights-and-shadows/index.md)