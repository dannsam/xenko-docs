# Highlights

## Scene hierarchy and scene streaming

Working with scenes has become more flexible. Instead of a single scene, your game can now use a hierarchy of scenes to organize entities into levels, areas or layers, and let teams collaborate on them more efficiently.

Game Studio displays child scenes together with their parent. Individual scenes can be loaded, unload, locked and moved around.

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-2.0/scene_editor_640.jpg">
   <source src="media/ReleaseNotes-2.0/scene_editor_640.mp4" type="video/mp4">
</video>

When running your game, the **default scene** set in your **game settings** is loaded as the **root scene** and can be used to store persistent entities. More scenes can be dynamically loaded and unloaded from scripts and added as **child scenes**.

```
var childScene = Content.Load<Scene>("myChildScene");
SceneSystem.SceneInstance.RootScene.Children.Add(childScene);
```

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-2.0/scene_streaming_640.jpg">
   <source src="media/ReleaseNotes-2.0/scene_streaming_640.mp4" type="video/mp4">
</video>

To get started, take a look at the new built-in `SceneStreamingScript`. It demonstrates background scene loading when passing through trigger volumes. 

You can now use a scene's `Offset` to move its entities both at design time and runtime.

The `ChildSceneComponent` has been removed. We encourage all entities to be managed by a single **entity manager** and rendered by a single **graphics compositor**.

## Global illumination with light probes

Light probes capture the lighting at the position you place them. They simulate indirect light, the effect of light bouncing off surfaces and illuminating other surfaces.

They can make a dramatic difference to the mood and appearance of your scene.

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-2.0/light_probes_640.jpg">
   <source src="media/ReleaseNotes-2.0/light_probes_640.mp4" type="video/mp4">
</video>

Light probes can be **placed freely** and are processed **per pixel**. This means you can use them not only on small dynamic objects, but also large or static objects (until we have light maps for those!).

## Light shafts

Xenko now supports shadow map-based light shafts for directional lights.

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-2.0/lightshaft_CoS_640.jpg">
   <source src="media/ReleaseNotes-2.0/lightshaft_CoS_640.mp4" type="video/mp4">
</video>

Our implementation uses ray-marching rather than post effects, making the shaft visible and cool-looking even if the light source isn't visible.

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-2.0/lightshaft_640.jpg">
   <source src="media/ReleaseNotes-2.0/lightshaft_640.mp4" type="video/mp4">
</video>

## Graphics compositor

The graphics compositor is now a separate asset.

Rendering parameters (such as VR) and post effect parameters can be tweaked in just a few clicks.

![Graphics compositor](media/ReleaseNotes-2.0/graphics_compositor.jpg)

This is just the first step towards making the graphics compositor easy to customize and extend. Stay tuned for more changes in future releases! 

## Visual Studio package improvements

Programmers working with Xenko often go back and forth between Game Studio and Visual Studio. To make their lives easier:

* Game Studio now comes with full Visual Studio 2017 support.
* You can now open the current solution in Game Studio directly from Visual Studio.
* Previously, when assets are compiling, MSBuild didn't report any progress until finished. It now displays information, warnings and errors while it compiles.

# Breaking changes

## Backward compatibility

Xenko 2.0 supports project upgrades only for projects created with Xenko 1.10 Beta. If you want to upgrade a project made with an older version, update it to Xenko 1.10 first.

## Visual Studio support

Xenko 2.0 supports Visual Studio 2015 and Visual Studio 2017 as IDEs. Visual Studio 2013 and earlier versions are no longer supported. 

When upgrading a project from earlier version, in its `.csproj` file, set `ToolsVersion="14.0"` as the minimum required version.

## Navigation

All compontents related to navigation have been moved to their own `SiliconStudio.Xenko.Navigation` assembly and namespace.

# Changelog

## Version 2.0.0

Release date 2017/04/25

### Enhancements

#### General

* Added VR game template
* Game Studio and actual runtime game now share the same build cache. This should speed up build times.

#### Game Studio

* Improved how internal objects of an asset can be referenced
* Improved keyboard navigation in tree views (eg entity hierarchy in scene and prefab editors)
* Improved scrolling in tree views
* Improved drag and drop performance
* Entities can now be dragged and dropped from one scene to another
* Exceptions in the embedded game of a scene editor no longer crash Game Studio and can be recoverable
* Components of vectors can now be edited independently when using multi-selection
* Camera navigation now uses a different key set:
    * Alt + left mouse button - orbit
    * Mouse wheel - zoom
    * Right mouse button - spin camera
    * Middle mouse button - pan
    * Right + middle mouse buttons - camera hover
* Added camera speed slider
* The "New game" template has been touched up
* "Save" and "Save all" have been merged into just "Save"
* Navigation mesh overlay visibility can now be toggled per group
* Scripts can now be closed without saving and opened again later
* Script undo history now persists after closing a script

#### Assets

* Texture assets are now split into color, normal and grayscale subtypes
* Replaced `SkyboxUsage` enum on `SkyboxAsset` with a boolean `IsSpecularOnly`

#### Engine

* Added support for splash screens (they show only in release builds)

#### Audio

* Added HRTF binaural audio support for Windows (10+)

#### Graphics

* Added MSAA support
* Added custom MSAA resolving filters
* Shadow cascade calculation is now more stable
* Multiple render targets now have better support
* Point lights can now cast shadows
* `SkyboxComponent` has been removed and the functionality moved into the `LightComponent` and `BackgroundComponent`
* `BackgroundComponent` now accepts cubemap textures as an input

#### Materials

#### Particles

* Additive rotation no longer has a default value of 1 radian; it's now 0
* Initializers and updaters no longer add particle fields when disabled

#### Physics

* Reworked collisions filtering to improve performance

#### Navigation

* Bounding boxes can now be placed in the scene
* Navigation meshes can now be generated/updated at runtime
* `TryFindPath` now returns false instead of crashing if no navigation mesh is loaded
* Navigation mesh layer indexes have been replaced with groups

#### VR

* Unique device-agnostic API
* Oculus Rift support (HMD and controllers)
* Vive support (HMD and controllers)

### Issues fixed

#### General

#### Game Studio

* Naming project libraries now avoids collisions
* Invalid characters in the project name are now filtered out correctly and don't prevent the project compiling
* Changing gizmo sizes no longer causes the slider to jump
* Switching between gizmos no longer crashes the scene editor
* Asset copy/paste now works better
* Thumbnail behavior is now more stable
* Fixed leaking of deleted assets or entities when navigating through the selection history
* Fixed renaming assets undo/redo
* Renaming an asset no longer closes its editor
* Fixed reparenting assets with Alt key (maintains world position)
* Fixed many problems related to manipulation of entities from prefabs
* Fixed many problems related to moving entities in the scene hierarchy
* The property grid now properly handles multi-selection
* Fixed many problems related to properties overridden from Prefabs or from Archetypes
* Fixed many problems related to copy/paste in the property grid
* Fixed some cases where *Create prefab from selection* wasn't properly linking the selected entities to the newly created prefab
* Fixed several problems when manipulating the model or materials in a `ModelComponent`, especially when the entity is inherited from a prefab
* The material highlighting button now works properly
* Assets that failed to save now prevent Game Studio from closing and losing your changes
* Sprites can be selected again in the scene editor
* Undoing/redoing creation or removal of script assets now works correctly
* Setting a translation snap of 0 now works as expected
* Light gizmos correctly update when changing the light type
* Typing the URL to a reference in an asset picked now works as expected

#### Assets


#### Engine

* Fixed right Shift key detection in WinForms
* The `Start` method of scripts is now always called before the `Update` method of any `SyncScript` in the same frame
* `SyncScripts` no longer cause crashes when scheduled from a different thread
* Scripts are no longer started or updated if another script removes them from the scene in the same frame
* `ImageElements` are now properly displayed when using a `SpriteFromTexture`
 
#### Graphics

* Orthographic views no longer display broken shadows
* Shadows no longer disappear when viewed exactly vertically
* Cascade blending no longer causes holes in shadows
* Tesselated objects now cast shadows
* Normal-mapped object lighting is now correct when non-uniform scaling is applied
* Using unbound vertex streams in shaders no longer causes crashes
* Bright post effects are now more stable
* VR now shares shadows and culling for each eye
* Clustered lighting now works with multiple render views
* Fixed RGB/HSV color conversions
* Fixed engine exit when using RenderDoc profiling
* Fixed Multisample Quality Level for MSAA textures
* Tesselation and displacement mapping no longer cause rendering errors in the editor
 
#### Physics

* Removing and re-adding entities no longer causes crashes in certain situations
 
# Known Issues

* On Linux, when switching the underlying Graphics Platform, rendering doesn't occur or fail. To fix the problem, delete the cache, local, and roaming folders on the Linux host and restart the game.
* Performance issues on mobile (being worked on)
* On iOS, if `Enable device-specific builds` is toggled on (from the project properties), it's not possible to debug game code. To speed up your development manually select the architecture of your device from the Advanced tab.
* Live scripting has been temporarily disabled