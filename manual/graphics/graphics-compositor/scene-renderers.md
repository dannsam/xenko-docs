# Scene renderers

Scene renderers let you customize the [Collect](../render-pipeline/render-features.md#collect) and [Draw](../render-pipeline/render-features.md#draw) phases of the rendering.

The default renderers are:

- [Clear RenderFrame](clear.md)
- [Render Camera](render-camera.md)
- @'SiliconStudio.Xenko.Rendering.Compositing.ForceAspectRatioSceneRenderer', which you can use before the [camera renderer](render-camera.md) to force aspect ratio

## Select a renderer



## Clear

Clears a frame with a solid color.

![media/clear-renderframe-1.png](media/clear-renderframe-1.png)

### Properties

| Property      | Description              
| ------------- | ----------
| Clear Flags   | <br>What to clear in the render frame (**Color only**, **Depth only**, or **Color and depth**)
| Color         | The color used to clear the color texture of the render frame. Only valid when **Clear Flags** is set to **Color** or **Color and depth**
| Depth Value   | The depth value used to clear the depth texture of the render frame
| Stencil Value | The stencil value used to clear the stencil texture of the render frame
| Output        | See common properties in [Scene renderers](index.md)

## Render camera

Create and set up a [render view](../rendering-pipeline/index.md#render%20views) using a [camera slot](camera-slots.md). This renders using @'SiliconStudio.Xenko.Rendering.Compositing.SceneCameraRenderer.Child'.

RENDERS FROM THE CAMERA SLOT YOU SPECIFY USING THE RENDERING CHILD YOU SPECIFY (EG FORWARD RENDER)

![media/render-camera-1.png](media/render-camera-1.png)

### Properties

| Property      | Description                                                             
| ------------- | ----------
| Child         | Select a renderer for this camera, such as ForwardRenderer or a custom renderer     
| Camera        | Specify a camera slot defined at the level of the Scene Graphics Compositor    

## Scene renderer collection

The **scene renderer collection** executes multiple renderers in sequence.

you add them as children...

for example you can add forward renderers... 

![Add to scene collection](media/add-renderer-to-scene-renderer-collection.png)

To add a renderer to the collection, next to **Children**, click the **green plus icon** and select the renderer you want to add. You can add as many as you need.

>[!Note]
>Xenko executes the renderers in the list order...

## 