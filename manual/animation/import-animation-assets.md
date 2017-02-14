# Import animation assets

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>

This page explains how to import skinned meshes, skeletons, and animations to your project. For information about how to create procedural models, see [Create assets](../get-started/create-assets.md).

>[!Note]
>Make sure you skin your mesh correctly to the skeleton. If you don't, you won't be able to animate your model correctly.

Xenko supports the following types of 3D model file:

``.3ds``, ``.blend``, ``.dae``, ``.dxf``, ``.fbx``, ``.md2``, ``.md3``, ``.obj``, ``.x``

> [!Tip]
> If you need to import a custom file format, you can write a [custom asset](../engine/asset/create-a-custom-asset.md) compiler to support it.

## Import a model, animation, or skeleton

You can import models, animations, and skeletons just like any other asset.

* Drag the asset from Explorer to the **asset view** (in the bottom pane by default).

    ![Choose Asset Type](media/create-and-add-assets-drag-and-drop-model.png)

* Alternatively, in the **asset view**, click ![Add asset](media/create-and-add-assets-add-new-asset-button.png) and select **Import directly from files**.

    ![Choose Asset Type](media/create-and-add-assets-add-new1.png)

### Choose the asset type

After you drop or select the asset, specify whether it's a 3D **model**, **animation**, or **skeleton**.

![Choose Asset Type](media/create-and-add-assets-choose-asset-type.png)

* If you choose **Model** as the asset type, Xenko gives you the option to import any additional materials, textures and skeletons it finds in the model file. You can also choose to import the skeleton from the model (**Import new skeleton**), import no skeleton (**Don't use skeleton**), or specify a different skeleton (**Use existing skeleton** in the field.

    ![Choose asset type](media/create-and-add-assets-model-import-parameters.png)

* If you choose **Skeleton**, Xenko imports only the skeleton from the model. You might want to do this, for example, if you want to use it for a new skeleton that uses a subset of its nodes. 

* If you choose **Animation**, Xenko imports only the animation from the model. This is sufficient for regular animations (see [Import animations](import-animations.md)). For additive information, there are some extra steps. For details, see [Additive animation](additive-animation.md).

## See also

* [Import animations](import-animations.md)
* [Set up animations](set-up-animations.md)