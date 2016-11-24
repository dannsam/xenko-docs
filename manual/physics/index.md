# Physics

<div class="doc-incomplete"/>

Xenko simulates real-world physics such as gravity and collisions. This section explains how collider components work, how to add them to your project, and how to how to use them with scripts.

## Physics components
Create physics by adding [collider components](colliders.md) to entities. There are three types of collider component:

* **static colliders**, which other objects bump into (walls, floors, large rocks)
* **rigid bodies**, for objects moved around by physics (eg balls, boxes, furniture)
* **character**, for player characters controlled via user input that need to bump into things

You can also use colliders as triggers, which detect collisions. For example, you can use a trigger to detect when a player character enters ("collides" with) a room.

* [Raycasting](raycasts.md) trace a line (ray) through the scene to find intersecting objects. This is useful, for example, to find which objects are under the mouse cursor when a user clicks in a 3D image, or to check which objects are in a gun's line of fire.
* [Constraints](constraints.md) limit collider movement; for example, a swinging chain.

## Physics simulation
Xenko physics are controlled by [Simulation](xref:SiliconStudio.Xenko.Physics.Simulation). You can set how [Simulation](xref:SiliconStudio.Xenko.Physics.Simulation) is initialized by a few flags in [PhysicsSettings](xref:SiliconStudio.Xenko.Physics.PhysicsSettings), accessible from Game Studio in the **Game Settings** asset.

* `CollisionsOnly` initializes the [Simulation](xref:SiliconStudio.Xenko.Physics.Simulation) with collision detection with no dynamic.
* `ContinuosCollisionDetection` initializes the [Simulation](xref:SiliconStudio.Xenko.Physics.Simulation) with continuous collision detection (CCD). CCD prevents fast-moving entities (such as bullets) erroneously passing through other entities.

From the [Simulation](xref:SiliconStudio.Xenko.Physics.Simulation), you can change some options on the fly, including:
* `Gravity` 
* `FixedTimeStep`
* the number of `MaxSubSteps` the engine should take in the case of slow update rate