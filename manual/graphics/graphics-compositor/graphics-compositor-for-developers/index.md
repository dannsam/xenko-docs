# Graphics Compositor For Developers

## Renderers

The default renderers implementing the @'SiliconStudio.Xenko.Rendering.Compositing.ISceneRenderer':

- @'SiliconStudio.Xenko.Rendering.Compositing.SceneCameraRenderer' to render the current scene from a camera
- @'SiliconStudio.Xenko.Rendering.Compositing.ForwardRenderer' to render objects in a typical Forward or Forward+ renderer style
- @'SiliconStudio.Xenko.Rendering.Compositing.DelegateSceneRenderer' to delegate the rendering to a method callback
- @'SiliconStudio.Xenko.Rendering.Compositing.ClearRenderer' to clear the colors/depth of a render frame

## How to customize the default rendering pipeline

Many operations should be possible to do just by doing some changes to the Graphics Compositor asset (such as adding new RenderStage).

However, sometimes it is necessary to drastically change rendering when implementing new techniques. Many effects impacts many specific parts of the pipeline.

### Forward Renderer

Xenko comes with a default Forward/Forward+ rendering pipeline defined in the class @'SiliconStudio.Xenko.Rendering.Compositing.ForwardRenderer'.

It is responsible for:
- Clear the render target
- Render Main and Transparent pass
- *Optional*: run post effects
- *Optional*: render shadow maps
- *Optional*: render multiple eyes for VR rendering
- *Optional:* render a Z-prepass or GBuffer if some part of the Main, Transparent or Post Effects rendering need it.

Many of those operations affect each others:
- In VR, we might want to:
  - render shadow map only once
  - run the rendering twice, or use instancing for better efficiency
- Some post effects might require some extra GBuffer: realtime local reflections (RLR) need normals and roughness, temporal antialiasing need velocity buffers, etc...
- Soft-edge particles need to resolve depth buffer before starting transparent passes

In practice, it is impossible to implement all those features completely independently considering how much they affect and overlap each others.

Trying to offer enough extensibility points on the code side (i.e. virtual methods) proved to be impossible, especially since people expect to combine multiple rendering options.

However, we don't want people to have to mess with thousands of files and recompile the engine to customize the rendering pipeline.

As a result, Xenko forward pipeline is written in a simple class designed to be easy to understand, and users are encouraged to copy it to do any custom effect integration.

> **Note**
>
> Rather than copying the `ForwardRenderer` source code, we later plan to have some easier way to customize it in a more visual way.