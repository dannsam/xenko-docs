# Graphics compositor for developers

**TO BE DELETED!**

## Renderers

The default renderers implementing the @'SiliconStudio.Xenko.Rendering.Compositing.ISceneRenderer' are:

- @'SiliconStudio.Xenko.Rendering.Compositing.SceneCameraRenderer', to render the current scene from a camera
- @'SiliconStudio.Xenko.Rendering.Compositing.ForwardRenderer', to render objects in a typical Forward or Forward+ renderer style
- @'SiliconStudio.Xenko.Rendering.Compositing.DelegateSceneRenderer', to delegate the rendering to a method callback
- @'SiliconStudio.Xenko.Rendering.Compositing.ClearRenderer', to clear the colors/depth of a render frame

## How to customize the default rendering pipeline

You can make many operations by making some changes to the Graphics Compositor asset (such as adding new RenderStage). However, it's sometimes necessary to drastically change rendering when implementing new techniques. Many techniques affect many specific parts of the pipeline.

### Forward renderer

Xenko comes with a default Forward/Forward+ rendering pipeline, defined in the class @'SiliconStudio.Xenko.Rendering.Compositing.ForwardRenderer'. It is responsible for:

- clearing the render target
- rendering Main and Transparent pass
- *Optional*: running post effects
- *Optional*: rendering shadow maps
- *Optional*: rendering multiple eyes for VR rendering
- *Optional:* rendering a Z-prepass or GBuffer if some part of the Main, Transparent or Post Effects rendering need it

Many of these operations affect others:
- In VR, we might want to:
  - render the shadow map only once
  - run the rendering twice, or use instancing for better efficiency
- Some post effects require extra GBuffer: for example, real-time local reflections (RLR) need normals and roughness, and temporal antialiasing needs velocity buffers.
- Soft-edge particles need to resolve depth buffer before starting transparent passes.

In practice, it's impossible to implement all these features completely independently, as they affect and overlap each other. As a result, the Xenko forward pipeline is written in a simple class designed to be easy to understand, and we encourage you to copy it for any custom effect integration.

> [!Note]
> Rather than copy the `ForwardRenderer` source code, we plan to implement a way customize it in an easier, more visual way.