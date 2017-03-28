# Ambient lights

**Ambient lights** are uniform lights that illuminate the entire scene. Because they don't come from any specific direction or source, ambient lights illuminate everything equally, even objects in shadow or obscured by other objects. They don't cast shadows. 

Ambient lights aren't realistic light sources. Instead, they contribute to the overall brightness and aesthetic of a scene.

![media/AmbientLightOverview.png](media/AmbientLightOverview.png) 

An example of an object lit uniformly with ambient lighting (with a pure diffuse material):

| ![media/AmbientLight.png](media/AmbientLight.png)  |

## Properties

![media/AmbientLightProperties.png](media/AmbientLightProperties.png) 

| Property     | Description                                                                                                                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Color        | The color of the light. Note: Currently, the light supports an RGB color. Future versions of Xenko will also support temperature colors |
| Intensity    | The intensity of the light. Note that currently, this value has no units                                                          |
| Culling Mask | Defines which entity groups are affected by the light. By default, all groups are affected.  |