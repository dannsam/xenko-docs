# Animation

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>
<span class="label label-doc-audience">Programmer</span>

For 3D animation, you need three assets:

* a skeleton
* a skinned model
* an animation clip

### Skeletons

**Skeletons** are digital structures which describe deformation patterns of 3D models. Skeletons are made of bones that form a hierarchy. When parent bones change their position, they also affect the positions of child bones. For example, a hand bone might have five child bones (the fingers and thumb); when the hand moves up and down, the fingers and thumb move with it.

Skeletons don't have to resemble the skeletons of real humans or animals. You can make skeletons to animate any 3D model.

>[!NOTE]
>There's currently no way to visualize skeletons in Game Studio.

### Skinned models

**Skinning** is the process of assigning weights to vertices and bones they depend on. Each vertex usually depends on one to four bones.

**Skinned models** are models that have been skinned to match a skeleton. The **skin** describes how vertices of the mesh transform when bones move. 

>[!Note]
>Meshes and skeletons have to match. If you don't skin the mesh properly to the skeleton, you can't animate the model correctly.

>[!NOTE]
>In Game Studio, you can only create simple 3D models such as spheres and cubes. For information about how to do this, see [Create assets](../get-started/create-assets.md). To create more complex models, use dedicated software like 3DS Max, Maya, or Blender, then [import the model into Game Studio](import-animations.md).

### Animation clips

**Animation clips** describe the pose of a **skeleton** at a particular moment. The skeleton moves according to the animation. The mesh vertices transform (skin) to match the current pose.

## In this section

* [Import animation assets](import-animation-assets.md)
* [Import animations](import-animations.md)
* [Preview animations](preview-animations.md)
* [Set up animation](set-up-animations.md)
* [Use 3D animation](use-animations.md)
* [Procedural animation](procedural-animation.md)
* [Additive animation](additive-animation.md)
* [Custom blending trees](custom-blending-trees.md)