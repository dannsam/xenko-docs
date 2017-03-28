# Point lights

**Point lights** emit light in all directions within a sphere. They're useful for simulating sources of local light, such as lamps and lightbulbs, and cast shadows.

![media/PointLightOverview.png](media/PointLightOverview.png) 

In Game Studio, point lights have the following icon:

![media/PointLight.png](media/PointLight.png) 

Once selected, the point light gizmo displays the sphere in which it projects light:

![media/PointLightSelected.png](media/PointLightSelected.png)

## Properties

![media/PointLightProperties.png](media/PointLightProperties.png) 

| Property            | Description                                                                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Color               | The color of the point light. Currently, the light supports an RGB color. Future versions of Xenko will also support temperature colors                      |
| Radius              | The sphere influence radius in meters. Beyond this range, the light doesn't affect models                                           |
| Shadow             | <br>If shadows are enabled, the light casts shadows.</br><br> **Filter:** Lets you produce soft shadows instead of hard shadows. Currently, the implemented technique is PCF (Percentage Closer Filtering). Other techniques will be available in future versions of Xenko.</br> <br>**Size:** The size of texture to use for shadowing mapping. Larger textures produce better shadows edges, but are much more costly. For more information, see [Shadows](shadows.md)</br>     |          
| Bias Parameters     | <br>These parameters are used to avoid some artifacts of the shadow map technique.</br> <br>**Depth Bias:** The amount of depth to add to the sampling depth to avoid shadow acne</br> <br>**Normal Offset Scale**: A factor multiplied by the depth bias toward the normal </br>                                                                   |
| Intensity           | The intensity of the light. The color is multiplied by this value before being sent to the shader|
| Culling Mask        | Which entity groups are affected by this light. By default, all groups are affected                                                        |