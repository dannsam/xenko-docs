# Static colliders

<div class="doc-incomplete"/>

**Static colliders** aren't affected by forces such as gravity and collision. However, they _cause_ collisions when [rigid bodies](rigid-bodies.md) collide with them. Typical static colliders are strong immovable objects like walls, floors, large rocks, and so on.

## Add a static collider component to an entity

To create a static collider, we need to add a **static collider component** to an entity.

1. In the **Scene Editor**, select the entity you want to be a static collider (such as a wall or floor).

2. In the **Property grid**, click **Add component** and select **Static Collider**.

Now the entity is a static collider. You still need to set the shape of the static collider component to match the shape of the entity. 

1. In the **Property grid**, expand the **Static Collider component** to view its properties.

2. Next to **Collider Shapes**, click the **green + icon** and select the shape you want.

## Static collider properties

Property              | Description
----------------------|---------------------------------------------------------
Collision group       | Defines which collision group the static collider belongs to. 
Can collide with      | Defines which groups the static collider can collide with.
Collision events      | Toggles whether the static collider receives collision events. This is useful to improve performance when processing collisions after the simulation; it has no effect on physics.)
Can Sleep             | Toggles whether the static collider can sleep.
Restitution           | Defines the amount of kinetic energy lost or gained after a collision. A typical value is between 0 and 1. If the restitution property of colliding entities is 0, the entities lose all energy and stop moving immediately on impact. If the restitution is 1, they lose no energy and rebound with the same velocity they collided at. As static colliders don't move, their restitution only affects rigid bodies that collide with them. Use this to change the "bounciness" of rigid bodies that collide with the static collider. 
Friction              | Defines how much surface friction the static collider has.
Rolling Friction      | Defines how much rolling friction the static collider has.
Ccd Motion Threshold  | Continuous collision detected velocity threshold - this value indicates at which velocity the Ccd kicks in to prevent errors for objects that are moving very fast.
Ccd Swept Sphere Radius | Continuous collision detected sphere radius - this is the radius of the bounding sphere containing the position between 2 physics frames.
Is Trigger            | Toggles whether this collider is a trigger. (bodies will be able to penetrate this collider in this case)

If you need to move the static collider at runtime, use:

If for any reason it is necessary to move this collider at run-time please do something like this: (not that this now works but in the future we might bake static geometry and so it won't be possible)
```
PhysicsComponent.Entity.Transform.Position += PhysicsComponent.Entity.Transform.Position + Vector3.UnitX;
PhysicsComponent.Entity.Transform.UpdateWorldMatrix();
PhysicsComponent.UpdatePhysicsTransformation();
```
