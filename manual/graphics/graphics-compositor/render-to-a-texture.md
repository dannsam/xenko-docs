# Render to a texture

You can render to textures in your scene instead of directly to the screen. You can use this, for example, to display part of your scene on a TV screen in the same scene, such as security camera footage.

## 1. Create a camera slot

Camera slots link the graphics compositor to the cameras in your scene. For more information, see [Camera slots](camera-slots.md).

1. In the **asset view** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics Compositor asset](media/graphics-compositor-asset.png)

    The graphics compositor editor opens.

    ![Graphics Compositor editor](media/graphics-compositor-editor.png)

2. On the left, under **Camera slots**, click the **green plus** icon to create a camera slot.

    ![Camera slots](media/graphics-compositor-camera-slots.png)

    > [!Tip]
    > To name a camera slot, double-click it in the list and type a new name.

## 2. Create a camera and bind it to the slot

1. In your scene, add a camera component to the entity you want to be your camera.

    ![Add camera component](media/add-camera-component.png)

2. Position the entity so the camera captures the area of the scene you want to render to a texture.

3. In the **property grid** (on the right by default), in the **Camera** component properties, under **Slot**, select the slot you created in the previous step.

    ![media/graphics-compositor-overview-2.png](media/graphics-compositor-overview-2.png)

4. Position your camera so it captures the area of the scene you want to render to a texture.

## 3. Create a render target texture

The render target texture displays the camera output.

In the **asset view**, click **Add asset** and select **Texture** > **Render target**.

![Add render target](media/add-render-target.png)

Game Studio adds a **render target** texture to your project assets.

![Render texture](media/render-target-texture-in-asset-view.png) 

## 4. Use a render target texture

Use the render target texture in the scene where you want to display the camera output. This page suggests two examples.

### Use the render target texture in a material

1. In the material properties, under **Shading**, next to **Diffuse map**, click the **blue arrow** button and select **Texture**.

    ![Select texture](media/select-texture.png)

2. Click the **hand** icon (**pick asset up**) to open the asset picker.

3. In the asset picker, select the **Render texture** asset and click **OK**.

    ![Select render frame](media/select-render-frame.png)

### Use the render target texture in a sprite component

1. Create an entity and position it where you want to display the texture.

2. With the entity selected, in the **Property grid**, click **Add component** and add a **sprite** component.

    ![Add sprite component](media/add-sprite-component.png)

3. In the sprite component properties, next to **Source**, click the **blue arrow** button and select **Texture**.

    ![Select sprite source](media/sprite-source-texture.png)

4. Click the **hand** icon (**pick asset up**) to open the asset picker.

5. In the asset picker, select the **Render texture** asset and click **OK**.

    ![Select render frame](media/select-render-frame.png)

6. Under the **Source** properties, clear the **Is transparent** checkbox.

    ![Clear-is-transparent](media/clear-is-transparent.png)

## 5. Set up the graphics compositor

> [!Note]
> There are several ways to implement this in the graphics compositor. This page explains one method.

1. In the graphics compositor, select the **Entry points** node.

    ![Entry points node](media/entry-points-node.png)

2. In the **property grid** on the right, next to **Game renderer**, click the blue arrow and select **

...

3. Select **SceneRendererCollection**.

4. 

## Sample

For an example of rendering to a camera in a project, see the **Animation** sample included with Xenko.