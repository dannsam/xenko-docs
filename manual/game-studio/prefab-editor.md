# Prefab Editor
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Designer</span>

You can edit prefabs in the **Prefab Editor**.

![Prefab Editor](media/prefab-editor.png)

The Prefab Editor works similarly to the Scene Editor. For example, you can:

* add and delete entities to the prefab
* use [transformation gizmos](../get-started/arrange-entities.md) to translate, rotate and scale the entities in the prefab
* create parent-child relations between entities in the prefab
* add and modify entity components (scripts, materials, models, animations, etc)

For more information about managing entities, see [Populate a scene](../get-started/populate-a-scene.md).

![Prefab editor](media/prefab-editor.png)

When you edit a prefab in the Prefab Editor, the changes are applied to the instances of the prefabs in the scene in **real time**.

This video demonstrates what happens when we make changes to the prefab. The Scene Editor is on the left, and the Prefab Editor on the right:

<video autoplay loop class="responsive-video" poster="media/edit-prefab-and-update-instances.jpg">
   <source src="media/edit-prefab-and-update-instances.mp4" type="video/mp4">
</video>

When you edit an instance of a prefab in the scene, the prefab isn't affected. In the following video, the prefab contains several box entities that belong to the box parent.


## Modify prefabs at runtime

Sometimes you need to change certain Properties of a Prefab at runtime.

For example, imagine you have a tree prefab that contains a script named *ChangeTreeColor*. The script changes the tree color from green to red at certain point in the game. At this point, the script doesn't affect existing instances of the tree prefab. It only changes the color of future instances of the prefab.