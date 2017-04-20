# Post-effects

**Post-effects** are usually applied after your game has completed the rendering of a frame, but before the UI is drawn. You can use post-effects to tune or embellish an image; for example, by giving it a more natural, realistic look, or to create stylized filmic effects.

![media/post-effects-reference-1.png](media/post-effects-reference-1.png) 

Post-effects are usually applied to an image. This means they have no connection with vertices or meshes. They only work with the color values of each pixel (and sometimes their depth).

Typically, you set up a post-effect by specifying:

- input buffers (eg color, depth)
- one or several output buffers
- parameters to customize the behavior of the post-effect during its rendering pass

Xenko provides several pre-defined post-effects. You can also extend the system to create your own.

## Add a post-effect

You add and edit post effects in the graphics compositor.

1. In the **asset view** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Grap hics Compositor asset](media/graphics-compositor-asset.png)

    The Graphics Compositor editor opens.

    ![Graphics Compositor editor](media/graphics-compositor-editor.png)

2. Select the **post-processing effects** node. right-click and select **PostProcessingEffects**.

    If there's no post-process effects node, right-click and select ** Create

    Game Studio adds a post-effect layer to the pipeline.

2. Connect the layer to the other layers in the pipeline.

3. Select the **PostProcessingEffects** layer.

4. In the **property grid** (on the right by default), enable the post-effects you want to use. For details about each post-effect and its setting, see the pages below.

## In this section

* [Bloom](bloom.md)
* [Bright filter](bright-filter.md)
* [Color transforms](color-transforms/index.md)
* [Depth of field](depth-of-field.md)
* [Lens flare](lens-flare.md)
* [Light streaks](light-streaks.md)