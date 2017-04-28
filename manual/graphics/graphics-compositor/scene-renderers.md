# Scene renderers

Scene renderers let you customize the [Collect](../render-pipeline/render-features.md#collect) and [Draw](../render-pipeline/render-features.md#draw) phases of the rendering. You select scene renderers in the **entry points** node properties.

![Select renderer](media/connect-entry-point.png)

For more information about selecting renderers, see the [Graphics compositor](index.md) page.

## Clear

Clears a frame, with a solid color.

![Clear properties](media/clear-renderframe-1.png)

### Properties

| Property      | Description              
| ------------- | ----------
| Clear Flags   | <br>What to clear in the render frame (**Color only**, **Depth only**, or **Color and depth**)
| Color         | The color used to clear the color texture of the render frame. Only valid when **Clear Flags** is set to **Color** or **Color and depth**
| Depth Value   | The depth value used to clear the depth texture of the render frame
| Stencil Value | The stencil value used to clear the stencil texture of the render frame
| Output        | See common properties in [Scene renderers](index.md)

## Render camera

Renders a [view](../rendering-pipeline/index.md#render%20views) from a [camera slot](camera-slots.md) using @'SiliconStudio.Xenko.Rendering.Compositing.SceneCameraRenderer.Child'.

![Render camera properties](media/render-camera-1.png)

### Properties

| Property      | Description                                                             
| ------------- | ----------
| Camera        | Specify a [camera slot](camera-slot.md) to render from
| Child         | Specify a renderer for the camera (eg a forward renderer or a custom renderer)

## Scene renderer collection

The **scene renderer collection** executes multiple renderers in sequence. You can add as many renderers to the collection as you need.

>[!Note]
>Xenko executes the renderers in list order.

To add a renderer to the collection, next to **Children**, click the **green plus icon** and select the renderer you want to add.

![Add to scene collection](media/add-renderer-to-scene-renderer-collection.png)

## Forward renderer

The **forward renderer** does most of the heavy lifting in your pipeline. From the forward renderer, you can apply [post effects](../post-effects/index.md) and light shafts. 

The forward renderer is also where you set VR options. For more information, see [Virtual reality](../../virtual-reality.md).



## Single stage renderer

![Single stage renderer](media/single-stage-renderer.png)

## Force aspect ratio scene renderer

@'SiliconStudio.Xenko.Rendering.Compositing.ForceAspectRatioSceneRenderer', which you can use before the [camera renderer](render-camera.md) to force aspect ratio

## Render texture

Renders to a render texture, which you can then use in a material (eg to create a rear-view mirror).

## See also

* [Graphics compositor](index.md)
* [Camera slots](camera-slots.md)