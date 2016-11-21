# Raycasts

Raycasting traces an invisible line through the scene to find intersecting colliders (static colliders and rigid bodies). This is useful, for example, to check which colliders are in a gun's line of fire, or under the mouse cursor when the user clicks in a 3D image.

Implement a raycast using the current ```Simulation``` object. To find the first collider the raycast intersects with, use the function ```Simulation.Raycast(Vector3 from, Vector3 to)```.

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