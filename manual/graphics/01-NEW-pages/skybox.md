# Skybox

A **skybox** is a special technique that creates distant-looking backgrounds.
Game engine puts the scene inside an extremely big cube, and then projects background textures inside skybox's faces.
This simulates three-dimensional surroundings that look spacious, even if the actual game level is quite small.

The examples of skybox backgrounds include skies, clouds, mountains, and other scenery.

> [!Tip]
> Skybox backgrounds are pre-rendered, meaning the system requires little GPU and CPU resources to render them at runtime.

## Create a cubemap

For skyboxes, Xenko uses cubemaps with a `.dds` extension.

> [!Note]
> Currently, you cannot convert `.jpg` or other images to cubemap directly in Game Studio. The feature will be added in a future release.

You can use external software to create a cubemap out of separate images, for instance:

* [Nvidia conversion tool](https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop).
* [ATI conversion tool](http://developer.amd.com/tools-and-sdks/archive/games-cgi/cubemapgen).

You will require six images for each face of the cubemap.
Use the above-mentioned or similar tools to combine separate images into a proper `.dds` skybox texture.

> [!Warning]
> Currently, Xenko doesn't support spherical and hemispherical skydomes. Please, use cube-shaped skyboxes only.

## Add cubemap texture to project

Once you have a cubemap, you can add it to your project:

1. In **Asset view**, click ![](media/engine-skybox-add-new-asset-button.png) and show path to your `.dds` file.
2. When prompted, choose _texture_ file type and press **OK**.
    
    ![Select texture as asset type](media/engine-skybox-select-asset-type.png)

    Alternatively, you can simply drag and drop skybox texture from **Windows explorer** to **Asset view**.

    ![Drag and drop background texture](media/engine-skybox-drag-and-drop-background-texture.gif)

## Add skybox to a project

By default, **skybox asset** is included in every new Xenko project.
Yet, sometimes you want more than one skybox.
For instance when you need to split the screen into several section and use a separate camera with a unique skybox for each section.

Here's how to add a **skybox asset** to your project:

1. In **Asset view**, click ![](media/engine-skybox-add-new-asset-button.png)
2. Select _Miscellaneous_, and then choose _Skybox_

    ![Choose asset type](media/engine-skybox-choose-asset-type.png)

3. Choose skybox texture from the assets of your project or press _Cancel_ to add the texture later.
    
    ![Choose texture](media/engine-skybox-select-skybox-texture.png)

## Add skybox component to an entity
You can override the default **skybox** by adding a [skybox component](xref:SiliconStudio.Xenko.Engine.SkyboxComponent) to the camera entity.
This might be useful for multiplayer games, when the screen is split in halves, and each half uses its own skybox.

Here's how to add a [skybox component](xref:SiliconStudio.Xenko.Engine.SkyboxComponent) to an entity: 

1. In **scene view**, select a camera that you want to add a skybox component to.
2. In **property grid**, click _Add component_ and select _Skybox component_.

    ![Add skybox component](media/engine-skybox-add-skybox-component.png)

3. Choose skybox asset you want to use with this component.

    ![Skybox component's properties](media/engine-skybox-skybox-components-properties.png)

4. You can also change the following settings of the skybox component:
    * Specify how to display skybox in the background.
    * Set the light intensity of the skybox from 0 (no light intensity) to 100 (maximum).

## Code sample

```cs
public Skybox skybox;
public void ChangeSkyboxParameters()
{
    //Add skybox component to entity.
    var skyboxComponent = Entity.Get<SkyboxComponent>();

    //Replace existing skybox.
    skyboxComponent.Skybox = skybox;
    
    //Change light intensity of the skybox.
    skyboxComponent.Intensity = 1.5f;

    //Change skybox background mode.
    skyboxComponent.Background = SkyboxBackground.Irradiance;

    //Change skybox background color.
    skyboxComponent.Background = SkyboxBackground.Color;
}
```