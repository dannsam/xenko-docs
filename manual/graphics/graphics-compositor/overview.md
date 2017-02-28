# Graphics compositor

With the graphics compositor you can:

- render a scene using
  - one or multiple cameras
  - filtering entities in the scene
  - to one or multiple render targets with a different viewports
- render a scene with a camera to a render target used as the input texture of a Material/Effect in a scene (eg render the rear-view mirror point-of-view to a texture, and display it on the rear-view mirror model)
- easily mix the rendering mode at the same time in the same graphics composition
- easily mix HDR and LDR rendering
- apply ImagePostProcessing Effects on a render target, selected before/after rendering a camera
- let you easily clear a render target or clear only the depth buffer (eg to always render on top of a render target in a FPS game, or to render the UI)
- manipulate the compositor from scripts (or any animation system) in the scene to modify the composition, enable effects, etc

## Access the graphics compositor

In the **Asset view**, click the **Graphics Compositor** asset.

# Concepts

The graphics compositor is a pluggable system, meaning you can write your own compositor. It's based on the following concepts:

- camera slots
- render stages
- render features, which contain
  - render stage selectors
  - pipeline processors
- renderers

## Camera slots

Because you can set up cameras in different renderers and layers, it's more practical to define a set of camera slots at the graphics compositor level, and reference the camera in the renderers via a slot. This lets you set the actual camera for a particular slot just once at the graphics compositor level, while many renderers may reference the same camera slot.

Cameras in your scene have a *Slot* setting:

![media/graphics-compositor-overview-2.png](media/graphics-compositor-overview-2.png) 

The **enabled** cameras matching the appropriate slots are selected every frame.

> [!Note]
> If multiple enabled cameras in your scene are bound to the same camera slot, the result is undefined. Future version of Xenko will have a priority or a similar mechanism to avoid this.

## Render stage

Render stages define ways to render given objects (usually with their associated effects/shaders). They also offer ways to control advanced properties such as sorting and filtering of those objects. For more information, see [Render stage](../rendering-pipeline/render-stage.md).

## Render features

### Render stage selectors

Render stage selectors let you choose which objects are registered to which render stage, and choose which [effect](../effects-and-shaders/effect-language.md) to use when rendering a given object.

For example, this is the typical setup for meshes:

- @'SiliconStudio.Xenko.Rendering.MeshTransparentRenderStageSelector' chooses either the `Main` or `Transparent` render stage depending on material properties
  - The default effect is `XenkoForwardShadingEffect` defined by Xenko (you can create your own if you want)
- @'SiliconStudio.Xenko.Rendering.ShadowMapRenderStageSelector' selects non-transparent meshes that cast shadows and add them to the `ShadowMapCaster` render stage
  - The default effect is `XenkoForwardShadingEffect.ShadowMapCaster`, defined by Xenko

Either can filter by render group.

![media/graphics-compositor-overview-3.png](media/graphics-compositor-overview-3.png)

Everything is customizable, so you can add another predefined render stage selectors (eg to add UI to a later fullscreen pass) or create your own selector specific to your game.

### Pipeline processors

Pipeline processors are classes that are called when creating the [Pipeline State](../low-level-api/pipeline-state.md). This lets you do things such as enable alpha blending or wireframe rendering on a specific render stage.

There are many predefined pipeline processors. You can also create your own.

## Renderers

A renderer defines a specific rendering action. Several renderers are provided by default:

- [Clear RenderFrame](scene-renderers/clear-renderframe.md)
- [Render Camera](scene-renderers/render-camera.md)
- [Render Effect](scene-renderers/render-effect.md)