# Custom scene renderer

You can create a custom renderer by directly implementing the @'SiliconStudio.Xenko.Rendering.ISceneRenderer' or using a delegate through the @'SiliconStudio.Xenko.Rendering.SceneDelegateRenderer'

## Implement an ISceneRenderer

You can use a base implementation of this interface:

* @'SiliconStudio.Xenko.Rendering.SceneRendererBase': Provides a default implementation of @'SiliconStudio.Xenko.Rendering.ISceneRenderer' and automatically binds the output defines on the renderer to the GraphicsDevice before calling the `DrawCore` method.
* @'SiliconStudio.Xenko.Rendering.SceneRendererViewportBase': Inherits from @'SiliconStudio.Xenko.Rendering.SceneRendererBase' and add the ability to configure a specific viewport 

 

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

In some situations, you simply want to develop a renderer and attach it to a method directly. You can use @'SiliconStudio.Xenko.Rendering.SceneDelegateRenderer':

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


