# Raycasting

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>

**Raycasting** traces an invisible line through the scene to find intersecting physics objects.
Raycasting is useful, for example, to check which objects are in a gun's line of fire, or are under the mouse cursor when the user clicks.

To raycast, in the current [Simulation](xref:SiliconStudio.Xenko.Physics.Simulation), use [Simulation.Raycast](xref:SiliconStudio.Xenko.Physics.Simulation/(SiliconStudio.Core.Mathematics.Vector3.SiliconStudio.Core.Mathematics.Vector3/)).

For an example of raycasting in a simple game, load the **Physics Sample** project.

## Example code

This code sends a raycast from the mouse's screen position:

```cs
public static bool ScreenPositionToWorldPositionRaycast(Vector2 screenPos, CameraComponent camera, Simulation simulation)
{
    Matrix invViewProj = Matrix.Invert(camera.ViewProjectionMatrix);

    Vector3 sPos;
    sPos.X = screenPos.X * 2f - 1f;
    sPos.Y = 1f - screenPos.Y * 2f;

    sPos.Z = 0f;
    var vectorNear = Vector3.Transform(sPos, invViewProj);
    vectorNear /= vectorNear.W;

    sPos.Z = 1f;
    var vectorFar = Vector3.Transform(sPos, invViewProj);
    vectorFar /= vectorFar.W;

    var result = simulation.Raycast(vectorNear.XYZ(), vectorFar.XYZ());
    return result.Succeeded;
}
```

## See also
* [Colliders](colliders/index.md)