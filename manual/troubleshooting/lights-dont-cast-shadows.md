# Lights don't cast shadows

If you've enabled shadows on a light in your scene, but it isn't casting shadows, make sure you have enough space in the **shadow atlas**. You might need to reduce the **size** of the shadows in the properties of your light components to create room.

![media/DirectionalLightProperties.png](../graphics/lights-and-shadows/media/DirectionalLightProperties-size.png)

| Size: 2x     | Size: 1x
| ---------------------------------------------------------------- | -------------------------------------------------------------
| ![FPS scene shadow map](../graphics/lights-and-shadows/media/shadow-atlas-2x.png)               | ![FPS scene shadow map](../graphics/lights-and-shadows/media/shadow-atlas-1x.png)
| <br>This light source uses the entirety of the shadow atlas. <br>This means other lights won't cast shadows, as there's no room left in the atlas.</br> | <br>This light source uses half the shadow atlas.</br> <br>The other half is unused and can be allocated to other light sources.</br>

## See also

* [Graphics - Shadows](../graphics/lights-and-shadows/shadows.md)