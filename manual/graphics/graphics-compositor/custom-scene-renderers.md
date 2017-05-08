# Custom scene renderer

To create a custom renderer, directly implement the @'SiliconStudio.Xenko.Rendering.Compositing.ISceneRenderer' or use a delegate through the @'SiliconStudio.Xenko.Rendering.Compositing.DelegateSceneRenderer'.

## Implement an ISceneRenderer

You can use a base implementation of this interface:

* @'SiliconStudio.Xenko.Rendering.Compositing.SceneRendererBase': Provides a default implementation of @'SiliconStudio.Xenko.Rendering.Compositing.ISceneRenderer' and automatically binds the output defines on the renderer to the GraphicsDevice before calling the `DrawCore` method.
* @'SiliconStudio.Xenko.Rendering.Compositing.SceneRendererViewportBase': Inherits from @'SiliconStudio.Xenko.Rendering.Compositing.SceneRendererBase' and add the ability to configure a specific viewport.

```cs
[DataContract("MyCustomRenderer")]
[Display("My Custom Renderer")]
public sealed class MyCustomRenderer : SceneRendererBase
{
    // Implements the DrawCore method
    protected override void DrawCore(RenderContext context, RenderFrame output)
    {
        // Access to the graphics device
        var graphicsDevice = context.GraphicsDevice;
        // Clears the the currrent render target
        graphicsDevice.Clear(output.RenderTargets[0], Color.CornflowerBlue);
        // [...] 
    }
}
```

## Use a delegate

If you just want to develop a renderer and attach it to a method directly, use @'SiliconStudio.Xenko.Rendering.Compositing.DelegateSceneRenderer':

```cs
var sceneDelegateRenderer = new SceneDelegateRenderer(
    (renderContext, frame) =>
    {
        // Access to the graphics device
        var graphicsDevice = context.GraphicsDevice;
        // Clears the the currrent render target
        graphicsDevice.Clear(output.RenderTargets[0], Color.CornflowerBlue);
        // [...] 
   });
```