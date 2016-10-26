# Raycasting

<div class="doc-incomplete"/>

Raycasting is the process of tracing along a vector (ray) to detect any intersection with colliders in a scene. This process can be used for instance to determine what object is under the mouse pointer when the user clicks somewhere in the 3D image.

Raycasting can be done in your code using the current ```Simulation``` object. Using the ```Simulation.Raycast(Vector3 from, Vector3 to)``` function, it is easy to check if any collider intersects with this ray, and retrieve the collider the ray first hits.

The following snipped will show you how to raycast from mouse screen position to the world:

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