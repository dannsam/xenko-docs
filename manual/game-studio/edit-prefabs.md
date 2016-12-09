# Edit prefabs
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Designer</span>

You can edit prefabs in the **Prefab Editor**.

## Open the Prefab Editor ##

From the **Asset View**:

* Right-click the prefab you want to edit and select **Edit asset**:

    ![Right-click prefab](media/edit-prefab-with-edit-asset-button.png)

* Alternatively, double-click the prefab you want to edit:

    ![Double-click prefab](media/open-prefab-editor.gif)

To open the Prefab Editor from the **Scene Editor**, right-click any child of a prefab instance and select **Open prefab in editor**.

![Open prefab in editor](media/use-prefabs-prefab-open-prefab-from-prefab-instance.png)

## Use the Prefab Editor ##

![Edit prefabs](media/prefab-editor.png)

The Prefab Editor works similarly to the Scene Editor. For example, you can:

* add and delete entities
* use [transformation gizmos](../get-started/arrange-entities.md) to translate, rotate and scale entities
* create parent-child relations between entities
* add and modify entity components (scripts, materials, models, animations, etc)

For more information about managing entities, see [Populate a scene](../get-started/populate-a-scene.md).

![Prefab editor](media/prefab-editor.png)

When you edit a prefab in the Prefab Editor, the changes are applied to the instances of the prefab in the scene in **real time**.

This video demonstrates what happens when we make changes to the prefab. The Scene Editor is on the left, and the Prefab Editor on the right:

<p>
<video autoplay loop class="responsive-video" poster="media/edit-prefab-and-update-instances.jpg">
   <source src="media/edit-prefab-and-update-instances.mp4" type="video/mp4">
</video>
</p>

When you edit an instance of a prefab in the scene, the prefab itself isn't affected - only that instance. This is called an **override**.

In the following video, the **Lamp** prefab contains several box entities that belong to the **Boxes** parent. When we delete the boxes from the instance, only that instance is affected. The prefab (shown on the right) is unchanged.

If we add another box to the Boxes parent in the prefab, it doesn't appear in the overridden instance. That's because we deleted the Boxes parent from that instance.

<p>
<video autoplay loop class="responsive-video" poster="media/delete-boxes-from-prefab-instance.jpg">
   <source src="media/delete-boxes-from-prefab-instance.mp4" type="video/mp4">
</video>
</p>