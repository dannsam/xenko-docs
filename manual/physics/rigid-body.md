# Rigid body

<div class="doc-incomplete"/>

Rigid body simulation refers to the simulation of physics for objects that do not deform. Rigid body simulation can be used for collision between objects, and for objects that need to respond to incoming collisions.

**To enable rigid body simulation for a sphere entity:**

1. Start Game Studio with the empty Game project

2. Select the Sphere in the Scene Editor

3. Click 'Add component' in the Property grid

4. Select 'Rigidbody'

5. Now find the created Rigidbody in the 'Property grid', and expand to view the Rigidbody properties

6. Select the '+' icon behind 'Collider Shapes' and select 'Sphere'

Now you've created a Rigidbody for a sphere, the sphere and ground plane are ready to interact with each other. Run your game and you can see how the sphere is affected by gravity and collides with the plane.

## Rigid body properties

Property              | Description
----------------------|---------------------------------------------------------
Collision group       | Defines to which collision group this rigidbody belongs.
Can collide with      | Defines with which groups this rigidbody can collide.
Collision events      | Toggles whether this rigidbody received collision events. (this is useful just to increase performance when processing collisions after the simulation, it has no implications in the physics world)
Can Sleep             | Toggles whether this entity can sleep. (this is useful just to increase performance as bodies will stop under a certain threshold)
Restitution           | This coefficient defines how much energy remains after a collision for the objects to rebound from one another. Typical values range from 0...1 where 0 means all energy is lost, and 1 means all energy is preserved and the objects will move away from each other at the same speed they collided.
Friction              | Defines how much surface friction this rigidbody has.
Rolling Friction      | Defines how much rolling friction this rigidbody has.
Ccd Motion Threshold  | Continuous collision detected velocity threshold - this value indicates at which velocity the Ccd kicks in to prevent errors for objects that are moving very fast.
Ccd Swept Sphere Radius | Continuous collision detected sphere radius - this is the radius of the bounding sphere containing the position between 2 physics frames.
Is Trigger            | Toggles whether this rigidbody is a trigger. (which means it will not have dynamic response anymore as well)
Is Kinematic          | Toggles whether this rigidbody is kinemetic (which means it is driven by the Transformation component of the entity this rigidbody is contained)
Mass                  | Defines the mass of this entity. (KG is not correct, the solver uses a non physically correct unit and masses should not have big discrepancies between bodies, a more complex solver is required for KG correctness)
Linear Damping        | Damping factor for directional forces.
Angular Damping       | Damping factor for rotational forces.
Override gravity      | Use custom set gravity vector.
Gravity               | Defines a custom gravity vector.
Node Name             | If the entity this collider is part of contains a bones structure, the node name can refer to a bones node name to be linked to that specific bone.
