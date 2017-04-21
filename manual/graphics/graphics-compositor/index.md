# Graphics compositor

<span class="label label-doc-level">Advanced</span>
<span class="label label-doc-audience">Programmer</span>

>[!Note]
>This page requires a basic understanding of graphics pipelines.

>[!Note]
>The graphics compositor editor is a work in progress.

The **graphics compositor** organizes how a [scene](../game-studio/scenes.md) is rendered. You can use it to customize almost every part of the rendering pipeline. For example, you can:

- use one or multiple cameras
- filter entities in the scene
- render to one or more render targets, with different viewports
- render a scene with a camera to a render target used as the input texture of a Material/Effect in a scene (eg render the rear-view mirror point-of-view to a texture, and display it on the rear-view mirror model)
- mix the rendering mode at the same time in the same graphics composition
- mix HDR and LDR rendering
- apply ImagePostProcessing Effects on a render target, selected before/after rendering a camera
- clear a render target or clear only the depth buffer (eg to always render on top of a render target in a FPS game, or render the UI)
- manipulate the compositor from scripts (or any animation system) in the scene to modify the composition, enable effects, etc

## Set the graphics compositor

You can have multiple graphics compositors in your project, but you can only use one compositor at a time. At runtime, Xenko uses the graphics compositor you specify in [Game Settings](media/game-studio/game-settings.md).

The graphics compositor and the **root scene asset** work together. They're both defined in the...  

You can swap out the root scene or the graphics compositor, or both, but you should make sure that they work together at any given frame.

## Open the graphics compositor

In the **asset view** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

![Graphics Compositor asset](media/graphics-compositor-asset.png)

The Graphics Compositor editor opens.

![Graphics Compositor editor](media/graphics-compositor-editor.png)

## Entry points

In the **Entry Points** node, you set up the entry points for your rendering pipeline. There are three entry points: **Game**, **SingleView**, and **Editor**.

| Entry point | Description 
|-------------|------------
| Game        | The entry point from your game. You must have at least one camera in your scene
| SingleView  |                     
| Editor      | Entry point for the Scene Editor in Game Studio

#### Add a step

Next to **Game**, in the drop-down menu, select where you want to send the output from your game.

The Entry Points node adds a *Child* after the *Game*.

1. Under **Child**, select the renderer you want to send the entry point to.

... add a camera slot...

2. Set the properties of the renderer. For more details about each renderer, see...

You can repeat steps 1 and 2 to add as many steps as you need. To remove a step, select **None** from the drop-down menu. 

>[!Note]
>When you remove a step, you also remove its child steps.

## Forward Renderer

The **Forward Renderer** node controls the additional effects applied to the inputs. 



## Camera slots

**Camera slots** link the graphics compositor to the camera entities in your scene. This means you can change the root scene or graphics compositor without having to assign new cameras each time. You can create as many camera slots as you need.

You don't have to create a different camera slot for each camera in your scene. In fact, you can have fewer slots than cameras, and just change which cameras use each slot. The best practice is to disable the camera components on cameras you don't want to render.

> [!Note]
> Each camera slot must have a camera assigned to it. If you have an unused camera slot, delete it.
>
> You can't assign a camera to more than one slot. If you need to do this, duplicate the camera entity and assign it to a different slot.

### Create a camera slot

In the graphics compositor editor, on the left, under **Camera slots**, click the **green plus** icon.

To name a camera slot, double-click it in the list and type a new name.

### Blind a camera to a camera slot

1. In your scene, select the **entity** with the camera component you want to bind.

2. In the **property grid** (on the right by default), under **Slot**, select the camera slot you want to bind the camera to.

> [!Note]
> The drop-down menu lists camera slots from the graphics compositor currently selected in the game settings.

![media/graphics-compositor-overview-2.png](media/graphics-compositor-overview-2.png) 

The graphics compositor matches enabled cameras to their appropriate slots each frame.

> [!Note]
> If multiple enabled cameras in your scene use the same camera slot, the result is undefined. Future versions of Xenko will have a priority system or similar to avoid this.

## Render stage

Render stages define ways to render given objects (usually with their associated effects/shaders). They also offer ways to control advanced properties such as sorting and filtering of those objects. For more information, see [Render stage](../rendering-pipeline/render-stage.md).

## Render features

Render features prepare, collect, and draw all the data associated with types of objects which can be rendered (eg meshes, visual effects, debug shapes, sprites, etc). The render feature collects the correct vertex buffers, sets the materials, and invokes the draw calls.

### Render stage selectors

Render stage selectors define which objects in your scene are sent to which render stage, and choose which [effect](../effects-and-shaders/effect-language.md) to use when rendering a given object.

For example, this is the typical setup for meshes:

- @'SiliconStudio.Xenko.Rendering.MeshTransparentRenderStageSelector' chooses either the `Main` or `Transparent` render stage, depending on the material properties. The default effect is `XenkoForwardShadingEffect` defined by Xenko (you can create your own if you want).
- @'SiliconStudio.Xenko.Rendering.ShadowMapRenderStageSelector' selects opaqe meshes that cast shadows and adds them to the `ShadowMapCaster` render stage. The default effect is `XenkoForwardShadingEffect.ShadowMapCaster`, defined by Xenko.

Either can filter by render group.

![media/graphics-compositor-overview-3.png](media/graphics-compositor-overview-3.png)

You can customize everything, so you can add other predefined render stage selectors (eg to add UI to a later full-screen pass), or create your own selector specific to your game.

### Pipeline processors

Pipeline processors are classes called when creating the [pipeline state](../low-level-api/pipeline-state.md). This lets you do things such as enable alpha blending or wireframe rendering on a specific render stage.

Xenko includes several predefined pipeline processors. You can also create your own.

## Renderers

Renderers define a specific rendering action. Xenko includes several renderers:

- [Clear](scene-renderers/clear.md)
- [Render Camera](scene-renderers/render-camera.md)
- [Render Effect](scene-renderers/render-effect.md)

### Render Camera

Create and set up a [render view](../rendering-pipeline/index.md#render-views) using a camera slot. It renders using @'SiliconStudio.Xenko.Rendering.Compositing.SceneCameraRenderer.Child'.

![Render camera](scene-renderers/media/render-camera-1.png)

## Properties

| Property      | Description
| ------------- | -------------
| Child         | Select a renderer for this camera, such as ForwardRenderer or any of your custom renderers  
| Camera        | Specify a Camera slot defined at the level of the Scene Graphics Compositor