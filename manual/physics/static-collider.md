# Static collider

<div class="doc-incomplete"/>

A static collider is an object that itself is not affected by forces like gravity or collision and therefore doesn't move (i.e. static), but does affect rigid body objects when they collide with it. This type of collider is typically used for static game objects such as a wall or a floor object.

**To create a static collider:**

1. Start Game Studio with the empty Game project

2. Select the ground (gray plane) in the Scene Editor

3. Click 'Add component' in the Property grid

4. Select 'Static collider'

5. Now find the created static collider in the 'Property grid', and expand to view the collider properties

6. Select the '+' icon behind 'Collider Shapes' and select 'Infinite Plane'

Now you've created a static collider for the ground plane in the empty Game Studio project, which allows other physics objects to interact with it.

## Static collider properties

Property              | Description
----------------------|---------------------------------------------------------
Collision group       | Defines to which collision group this collider belongs. 
Can collide with      | Defines with which groups this collider can collide.
Collision events      | Toggles whether this collider received collision events. (this is useful just to increase performance when processing collisions after the simulation, it has no implications in the physics world)
Can Sleep             | Toggles whether this collider can sleep.
Restitution           | This coefficient defines how much energy remains after a collision for the objects to rebound from one another. Typical values range from 0...1 where 0 means all energy is lost, and 1 means all energy is preserved and the objects will move away from each other at the same speed they collided. This collider won't move tho, the properties is valid for the bodies hitting it.
Friction              | Defines how much surface friction this entity has.
Rolling Friction      | Defines how much rolling friction this entity has.
Ccd Motion Threshold  | Continuous collision detected velocity threshold - this value indicates at which velocity the Ccd kicks in to prevent errors for objects that are moving very fast.
Ccd Swept Sphere Radius | Continuous collision detected sphere radius - this is the radius of the bounding sphere containing the position between 2 physics frames.
Is Trigger            | Toggles whether this collider is a trigger. (bodies will be able to penetrate this collider in this case)

If for any reason it is necessary to move this collider at run-time please do something like this: (not that this now works but in the future we might bake static geometry and so it won't be possible)
```
PhysicsComponent.Entity.Transform.Position += PhysicsComponent.Entity.Transform.Position + Vector3.UnitX;
PhysicsComponent.Entity.Transform.UpdateWorldMatrix();
PhysicsComponent.UpdatePhysicsTransformation();
```
