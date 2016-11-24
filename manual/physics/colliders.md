# Colliders

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>

To create a physics object, add a **collider** component to an entity. There are three types of collider component: **static colliders**,  **rigid bodies**, and **characters**.

![Static and rigid body colliders](media/static-and-rigid-body-colliders.png)

## Static colliders

**Static colliders** aren't moved by forces such as gravity and collisions, but other physics objects can bump into them. Typical static colliders are strong immovable objects like walls, floors, large rocks, and so on.

### Move a static collider at runtime
If you need to move a static collider at runtime, you can do it programatically with:

```
PhysicsComponent.Entity.Transform.Position += PhysicsComponent.Entity.Transform.Position + Vector3.UnitX;
PhysicsComponent.Entity.Transform.UpdateWorldMatrix();
PhysicsComponent.UpdatePhysicsTransformation();
```

## Rigid bodies

Rigid bodies move based on physical forces applied to them, such gravity and collisions. Typical rigid bodies are boxes, balls, furniture, and so on — objects that get pushed and knocked around.

### Kinematic rigid bodies

By default, rigid bodies are moved only by the forces acting on them, such as gravity and collisions. However, sometimes you want to give them some specific movement. For example, you could have an elevator move up and down (controlled in a script via its Transform property) rather than have other objects push and pull it. This is a **kinematic** rigid body.

Although kinematic rigid bodies aren't moved by physics, other objects can still collide with them. In the case of the elevator, for example, objects placed inside won't fall through the elevator floor.

![Kinematic elevator](media/kinematic-elevator-1.png)

To make a rigid-body collider kinematic, in the **Property grid**, under the component properties, select **Is kinematic** in the **Rigidbody**.

### Scripting kinematic rigid bodies
You can script the _is kinematic_ property to turn on and off on certain events. For example, imagine our kinematic elevator's suspension cables are cut. You can script the _is kinematic_ property to change to _false_ when this happens. The elevator becomes subject to the usual forces of physics, and plummets.

![Kinematic elevator with objects](media/kinematic-elevator-2.png)

## Characters

**Character** components are used for entities which need to respond to user input (eg player characters) but also interact with other colliders. Player characters without the Character component will pass through other colliders.

> [!Note]
> Entities with the character component can only be moved with `SetVelocity`, `Jump` and `Teleport`.

## Add a collider component to an entity

1. In the **Scene Editor**, select the entity you want to add the component to.

2. In the **Property grid**, click **Add component** and select **Rigidbody**, **Static Collider**, or **Character**.

>[!Note]
> For colliders to interact with other physics objects, you need to set a [collider shape](collider-shapes.md) in the **Properties** grid.

## Triggers
When a collider is a **trigger**, objects no longer bump into it. Instead they pass through it, **triggering** an event which you can detect in your code. For example, you can use a trigger to detect when a player character enters ("collides" with) a room, and use this in your script to trigger an event.

To make a collider a trigger, in the **Property grid**, under the component properties, select **Is Trigger**.

For an example of how to use triggers, see the [Script a triggered event](tutorials/script-a-triggered-event.md) tutorial.

## Component properties

Property              | Component             |  Description
----------------------|-----------------------|---------------------------------
Collision Group       | Rigid body, static collider, character             | Sets which collision group the object belongs to.
Can Collide With      | Rigid body, static collider, character             | Sets which groups the object collides with.
Collision Events      | Rigid body, static collider, character              | If this is enabled, the object reports collision events, which you can use in scripts. It has no effect on physics. If you have no scripts using collision events for the object, disable this option to save CPU.
Can Sleep             | Rigid body, static collider, character              | If this is enabled, the physics engine doesn't process physics objects when they're not moving. This saves CPU.
Restitution           | Rigid body, static collider, character             | Sets the amount of kinetic energy lost or gained after a collision. A typical value is between 0 and 1. If the restitution property of colliding entities is 0, the entities lose all energy and stop moving immediately on impact. If the restitution is 1, they lose no energy and rebound with the same velocity they collided at. Use this to change the "bounciness" of rigid bodies.
Friction              | Rigid body, static collider, character              | Sets the surface friction.
Rolling Friction      | Rigid body, static collider, character              | Sets the rolling friction.
CCD Motion Threshold  | Rigid body, static collider, character               | Sets the velocity at which continuous collision detection (CCD) takes over. CCD prevents fast-moving entities (such as bullets) erroneously passing through other entities.
CCD Swept Sphere Radius | Rigid body, static collider, character             |  Sets the radius of the bounding sphere containing the position between two physics frames during continuous collision detection.
Is Trigger            | Rigid body, static collider                          |  Toggles whether the rigid body is a trigger.
Is Kinematic          | Rigid body                                           | Toggles whether the rigid body is kinematic and therefore moved only by its Transform property.
Mass                  | Rigid body                                           | Sets the collider mass. For large differences, use a point value; for example, write *0.1* or *10*, not *1* or *100000*.
Linear damping        | Rigid body                                           | The amount of damping for directional forces.
Angular damping       | Rigid body                                          | The amount of damping for rotational forces.
Gravity               | Rigid body, character                             | For rigid bodies, sets a custom gravity vector applied if Override Gravity is selected. For characters, specifies how much gravity affects the character.
Override Gravity      | Rigid body                                           | Overrides gravity with the vector specified in Override Gravity.
Node Name             | Rigid body                                        | If the collider entity contains a bone structure, the node name can refer to a bones node name to be linked to that specific bone.
Collider Shapes       | Rigid body                                       | Adds a [collider shape](collider-shapes.md).
Step Height           | Character                                        | The maximum height the character can step onto.
Fall Speed            | Character                                        | The maximum fall speed.
Max Slope             | Character                                         | The maximum slope the character can climb, in degrees. 
Jump Speed            | Character                                        | The amount of jump force.