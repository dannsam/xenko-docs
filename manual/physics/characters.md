# Characters

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>

**Characters** respond to user [input](../input/index.md) (eg player characters), but also interact with other colliders (eg bump into things). Player characters without the Character component will pass through objects.

> [!Note]
> Entities with the character component can only be moved with SetVelocity, Jump, and Teleport.

## Add a collider component to an entity

1. In the **Scene Editor**, select the entity you want to add the component to.

2. In the **Property grid**, click **Add component** and select **Rigidbody**, **Static Collider**, or **Character**.

>[!Note]
> For colliders to interact with other physics objects, you need to set a [collider shape](collider-shapes.md) in the **Properties** grid. The capsule shape is appropriate for most character colliders.

## Component properties

You can adjust the character component properties in the **Property grid**.

Property              |   Description
----------------------|-----------------------
Collision Group       | Sets which collision group the object belongs to.
Can Collide With      | Sets which groups the object collides with.
Collision Events      | If this is enabled, the object reports collision events, which you can use in scripts. It has no effect on physics. If you have no scripts using collision events for the object, disable this option to save CPU.
Can Sleep             | If this is enabled, the physics engine doesn't process physics objects when they're not moving. This saves CPU.
Restitution           | Sets the amount of kinetic energy lost or gained after a collision. A typical value is between 0 and 1. If the restitution property of colliding entities is 0, the entities lose all energy and stop moving immediately on impact. If the restitution is 1, they lose no energy and rebound with the same velocity they collided at. Use this to change the "bounciness" of rigid bodies.
Friction              | Sets the surface friction.
Rolling Friction      | Sets the rolling friction.
CCD Motion Threshold  | Sets the velocity at which continuous collision detection (CCD) takes over. CCD prevents fast-moving entities (such as bullets) erroneously passing through other entities.
CCD Swept Sphere Radius | Sets the radius of the bounding sphere containing the position between two physics frames during continuous collision detection.              
Gravity               | For rigid bodies, sets a custom gravity vector applied if Override Gravity is selected. For characters, specifies how much gravity affects the character.
Step Height           | The maximum height the character can step onto.
Fall Speed            | The maximum fall speed.
Max Slope             | The maximum slope the character can climb, in degrees. 
Jump Speed            | The amount of jump force.