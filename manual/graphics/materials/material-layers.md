# Material layers

You can combine multiple materials to build more complex materials. 

![media/material-layers-1.png](media/material-layers-1.png)  

This screenshot shows the blending of a rust material with a gold material:

![media/material-layers-2.png](media/material-layers-2.png) 

This diagram shows the definition of the materials blended in the screenshot above:

![media/material-layers-3.png](media/material-layers-3.png)

## Blend maps

**Blend maps** are textures that determine how Game Studio blends layers.

![Blend map diagram](media/blend-map-diagram.png)

![Blend map diagram](media/blend-map-diagram2.png)

Note how the blend map texture corresponds to the patterning on the result.

## Add a layer

1. Select the material you want to add a layer to.

2. In the **property grid** (on the right by default), next to **Layers**, click the **green plus icon**.

    ![Add a layer](media/add-a-layer.png)

    Game Studio adds a layer to the material.

    ![Empty layer](media/empty-layer.png)

3. Next to **Layer 0**, click the hand icon.

    The **asset picker** opens.

    ![Asset picker](media/material-asset-picker.png)

4. Specify a material you want to add as a layer and click **OK**.

    Game Studio adds the material as a layer.
    
    ![Added layer](media/added-layer.png)

5. Next to **Blend Map**, click the **hand icon**.

    The **asset picker** opens.

    ![Asset picker](media/texture-asset-picker.png)

6. Select the texture you want to use as a blend map for this layer.

Game Studio blends the material layers using the blend map you specified.

<br>A blend map [scalar provider](material-colors.md) that defines how much the current material is blend to the previous one (upper layer).</br> <br>A value of 0 means that the previous material in the layer is fully used.</br> <br>A value of 1 means that the material referenced by this layer is fully used.</br> <br>Values between 0 and 1 generate a blend of a parameters of the previous material with the material defined by this layer</br>

## Layer properties

| Property        | Description |
| --------------- | --------------- | 
| Material        | The material blended in this layer|
| Blend Map       | The blend map used to blend this layer with the layer above                                  |
| Layer Overrides |  **UV Scale** : A UV scale applied to all textures UV of the material of the layer (excluding the occlusion map) |

> [!Note] 
> Xenko blends individual layer attributes if they have the same shading model; otherwise, Xenko blends the shading model.

## See also

- [Material colors](material-colors.md)
- [Material attributes](material-attributes.md)
- [Materials for developers](materials-for-developers.md)