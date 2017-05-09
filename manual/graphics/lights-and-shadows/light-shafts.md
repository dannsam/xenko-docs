# Light shafts

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>
<span class="label label-doc-audience">Artist</span>

**Light shafts**, also called **god rays**, simulate visible rays (crepucular rays) originating from a light source. 

<video autoplay loop class="responsive-video" poster="media/lightshaft_CoS_640.jpg">
   <source src="media/lightshaft_CoS_640.mp4" type="video/mp4">
</video>

Xenko light shafts are shadow map-based and use ray-marching rather than post effects, so they're visible even when the light source isn't.

<video autoplay loop class="responsive-video" poster="media/lightshaft_640.jpg">
   <source src="media/lightshaft_640.mp4" type="video/mp4">
</video>

To create light shafts, use three components together: **lights**, **light shafts**, and **light shaft bounding volumes**.

Only [directional lights](directional-lights.md) can create light shafts.

## 1. Enable light shafts in the graphics compositor

1. In the **asset view** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics Compositor asset](..\graphics-compositor\media\graphics-compositor-asset.png)

    The graphics compositor editor opens.

    ![Graphics Compositor editor](..\graphics-compositor\media\graphics-compositor-editor.png)

2. Select the **forward renderer** node.

3. In the **property grid** (on the right by default), next to **Light shafts**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) and select **LightShafts**.

## 1. Add a light shaft component

1. In your scene, select the entity with the **directional light** you want to cast light shafts.

    For more information about how to use directional lights, including how to add them, see [directional lights](directional-lights.md).

2. In the **property grid**, in the **Light** component properties, make sure the **Shadow** checkbox is selected.

    ![Enable light shafts](media/light-shafts-enable-shadows.png)

3. Expand **Shadow** and set the **cascade count** to **one cascade**.

    ![One cascade](media/light-shafts-one-cascade.png)

    > ![Note]
    > Directional lights must use a single shadow cascade to create light shafts.

4. Click **add component** and select **light shaft**.

    ![Add light shaft component](media/add-light-shaft-component.png)

    Game Studio adds a light shaft component to the entity.

## 3. Add a light shaft bounding volume

The **light shaft bounding volume** defines the area in which directional lights cast light shafts.

1. In the **asset view**, click **Add asset**. 

2. Under **Models**, select a model in the shape you want the volume to be (eg a cube).

    ![Cube model](media/add-cube-model.png)

    The **asset picker** opens.

    ![Asset picker](media/asset-picker.png)

3. You don't need a material for the model, so click **Cancel** to create a model without a material.

4. In the scene, create an empty **entity**. It doesn't matter where.

5. With the entity selected, in the **property grid**, click **Add component** and select **light shaft bounding volume**.

    ![Add light shaft bounding volume component](media/add-light-shaft-bounding-volume.png)

6. In the **light shaft bounding volume** component properties, next to **light shaft**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Pick an asset up**).

7. In the **entity picker**, select the entity with the directional light you want to cast light shafts and click **OK**.

8. In the **light shaft bounding volume** component properties, next to **Model**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Pick an asset up**).

9. In the **asset picker**, select the model you created and click **OK**.

    ![Select model](media/select-procedural-model.png)

    This model defines the shape of the light shaft bounding volume.

10. Using the **transform** component, position the entity where you want directional lights to cast light shafts. 

### 3a. Optional: Add a model to the bounding volume to use as a guide

Currently, Game Studio doesn't display the bounding volume in the scene editor. Instead, you can use **model** component as a guide.

1. On the entity with the light shaft bounding volume component, click **Add component** and select Model.

    ![Add model to bounding volume](media/add-model-component-to-bounding-volume-entity.png)

2. Under the **Model** component properties, next to **Model**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Pick an asset up**).

3. In the **asset picker**, select the model you created and click **OK**.

    ![Select model](media/select-procedural-model.png)

4. Under **Materials**, clear the **Cast shadows** checkbox. This prevents the model from blocking your light shafts.

    ![Clear model shadows](media/clear-model-shadows.png)

As the model has no material, it's only visible in the scene editor, and not at runtime.

## See also

* [Directional lights](directional-lights.md)
* [Shadows](shadows.md)
* [Graphics compositor](../graphics-compositor/index.md)