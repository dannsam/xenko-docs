# Create and import animations
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Designer</span>

Xenko allows you to use different types of animations in your projects.
This page explains how to import **3D Animations**.
For Sprite animations, see [2D-Animations](2d-animations.md).

## Create animations

You can create **Animation** assets with any dedicated software like _3DS Max_, _Maya_, or _Softimage_, and then import it to **Game Studio**.
You can animate any **3D Models**, as long as it has been correctly skinned with the **Skeleton** your animation targets.
Here are some examples of **Animation** from the FPS Game Template:

* Idle animation.
* Reloading animation.
* Shooting animation.

## Import animations

After you create **Skeleton** and **Animation** in dedicated software, export them as appropriate file formats.
If there are multiple **Animations** for a single **Model**, export each Animation as a separate file.
Xenko currently doesn't support importing of several animation from the same file.

So for a model with two **Animations** you should export files as follows:

1. Skeleton.
2. Animation 1.
3. Animation 2.

Import files exactly as you exported them from _3DS Max_, _Maya_ or similar software: import **Animations** and **Skeletons** separately.

### How to import animations
1. In **Asset View**, click ![Add Asset](media/create-and-add-assets-add-new-asset-button.png).

2. Click ![Import Directly from File](media/create-and-add-assets-import-directly-from-file.png)

3. Navigate to your animation in Windows Explorer.

4. Choose **Asset Type**, in this example it's a **3D Model**.

    ![Choose Asset Type](media/create-and-add-assets-choose-asset-type.png)

## See also
