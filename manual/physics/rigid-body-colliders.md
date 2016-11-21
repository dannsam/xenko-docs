# Rigid bodies

**Rigid body colliders** are entities that move based on physical forces applied to them, such collisions (with other rigid bodies and [static colliders](static-colliders.md)) and gravity. Typical rigid body colliders are boxes and furniture.

## Create a rigid body collider

To create a rigid body, add a **rigid body component** to an entity.

1. In the **Scene Editor**, select the entity you want to be a rigid body (such as a box).

2. In the **Property grid**, click **Add component** and select **Rigidbody**.

//screenshot

Now the entity is a rigid body. You still need to set the shape of the rigid body component to match the shape of the entity.

1. In the **Property grid**, expand the **Rigidbody component** to view its properties.

2. Next to **Collider Shapes**, click the **green + icon** and select the shape you want.

//screenshot

## Rigid body properties

Property              | Description
----------------------|---------------------------------------------------------
Collision group       | Defines which collision group the rigid body belongs to.
Can collide with      | Defines which groups the rigid body collides with.
Collision events      | Toggles whether this rigidbody receives collision events. This improves performance when processing collisions after the simulation; it has no effect on physics.)
Can sleep             | Toggles whether this entity can sleep. This improves performance as bodies stop under a certain threshold.
Restitution           | Defines the amount of kinetic energy lost or gained after a collision. A typical value is between 0 and 1. If the restitution property of colliding entities is 0, the entities lose all energy and stop moving immediately on impact. If the restitution is 1, they lose no energy and rebound with the same velocity they collided at. Use this to change the "bounciness" of rigid bodies.
Friction              | Defines the surface friction.
Rolling Friction      | Defines the rolling friction.
Ccd Motion Threshold  | Sets the velocity at which the continuous collision-detected velocity threshold takes over, to prevent errors for fast-moving objects.
Ccd Swept Sphere Radius | Continuous collision detected sphere radius - this is the radius of the bounding sphere containing the position between 2 physics frames.
Is Trigger            | Toggles whether the rigid body is a trigger. (which means it will not have dynamic response anymore as well)
Is Kinematic          | Toggles whether the rigid body is kinemetic (which means it is driven by the Transformation component of the entity this rigidbody is contained)
Mass                  | Defines the mass of this entity. (KG is not correct, the solver uses a non physically correct unit and masses should not have big discrepancies between bodies, a more complex solver is required for KG correctness)
Linear damping        | Damping factor for directional forces.
Angular damping      | Damping factor for rotational forces.
Override gravity      | Use custom set gravity vector.
Gravity               | Defines a custom gravity vector.
Node Name             | If the entity this collider is part of contains a bone structure, the node name can refer to a bones node name to be linked to that specific bone.



Continuous collision detection prevents fast-moving entities from passing through other entities without detecting collisions. 