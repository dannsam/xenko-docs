# Graphics Compositor Overview

With the graphics compositor you can:

- Render a scene using
  - one or multiple cameras
  - filtering entities in the scene
  - to one or multiple render targets with a different viewports
- Render a scene with a camera to a render target that will be used as the input texture of a Material/Effect in a scene (e.g  render the rearview mirror point-of-view to a texture, and display it at the rear-view mirror place)
- Easily mix rendering mode (Forward, Forward+/Deferred - in a future release -...etc), at the same time in the same graphics composition
- Easily mix HDR and LDR rendering
- Apply Image/PostProcessing Effects on a render target, select before/after the rendering of a camera.
- Allow to easily clear a render target or clear only the depth buffer (to render for example always on top of a render target in a FPS game, or to render the UI)
- Manipulate the compositor from scripts (or any animation system) in the scene to modify the composition, enable effects...etc.

The graphics compositor is accessible by clicking on the Graphics Compositor asset and the properties of the graphics compositor will appear in the property editor.

> **Note**
> 
> Note that while the Scene Graphics Compositor is currently editable only through the property editor, we will add in a future release a dedicated editor to considerably ease the use of it    

# Concepts

The graphics compositor is a pluggable system (you can write your own compositor).

It is based on the following concepts:

- Camera slots
- Render Stages
- Render Features, which contains
  - Render Stage Selectors
  - Pipeline Processors
- Renderers

## Camera Slots

Because a camera can be setup in different renderers and different layers, it is more practical to define a set of Camera Slots at the graphics compositor level, and reference the camera in the renderers via a slot.

It allows to change/set the actual camera for a particular slot just once at the graphics compositor level, while many renderers may reference the same camera slot.

Cameras in your scene have a Slot setting:

![media/graphics-compositor-overview-2.png](media/graphics-compositor-overview-2.png) 

The **enabled** cameras matching the appropriate slots will be selected every frame.

> **Note**
>
> If multiple enabled cameras in your scene are bound to the same camera slot, the result in currently undefined.
> We later plan to add a priority or a similar mechanism to avoid such undefined state.

## Render Stage

A Render Stage defines a way to render a given object (usually with its associated effect/shader).

It also offer way to control advanced properties such as sorting and filtering of those objects.

See more information in [Render Stage](../rendering-pipeline/render-stage.md).

## Render Features

### Render Stage Selectors

A Render Stage Selector allows you to choose which object will be registered to which Render Stage.

They also allow you to choose which [Effect](../effects-and-shaders/effect-language.md) to choose when rendering a given object.

As an example, this is the typical setup for meshes:
- @'SiliconStudio.Xenko.Rendering.MeshTransparentRenderStageSelector' will choose either `Main` or `Transparent` Render Stage depending on material properties
  - Default effect is `XenkoForwardShadingEffect` defined by Xenko (you can create your own if you want)
- @'SiliconStudio.Xenko.Rendering.ShadowMapRenderStageSelector' will select non-transparent meshes that cast shadows and add them to the `ShadowMapCaster` Render Stage.
  - Default effect is `XenkoForwardShadingEffect.ShadowMapCaster` defined by Xenko
- Both of those are able to filter by Render Group

![media/graphics-compositor-overview-3.png](media/graphics-compositor-overview-3.png)

Everything is customizable so you can add another predefined Render Stage Selectors (i.e. to add UI to a later fullscreen pass) or create your own selector specific to your game.

### Pipeline Processors

Pipeline processors are classes that are called when creating the [Pipeline State](../low-level-api/pipeline-state.md).

This allows you to perform actions such as enabling alpha blending or wireframe rendering on a specific Render Stage.

There is a bunch of predefined Pipeline Processors and you can also create your own.

## Renderers

A renderer defines a specific rendering action. Several renderers are provided by default:

- [Clear RenderFrame](scene-renderers/clear-renderframe.md)
- [Render Camera](scene-renderers/render-camera.md)
- [Render Effect](scene-renderers/render-effect.md)

