# Physics

<div class="doc-incomplete"/>

The Xenko engine provides you with tools to realistically simulate physics in your game or application. The Xenko Physics engine simulates forces such as gravity and collision in a natural convincing way. With the built-in components it's easy to enable physics for your entities and allow them to interact with eachother.

This section will show you how to enable physics in Game Studio, how to use the correct physics component for your needs, and how to apply forces to an Entity through scripting. We will also show you how to use triggers, which allow you to trigger an event when an object enters a certain space for instance.

## Basics

Physics simulation is the process of simulating how physical objects interact with each other, and how they react to forces such as gravity or collisions. In Xenko we refer to physics objects as **Physics components**. In Xenko we use 3 types of physics components:

* [Rigid body](rigid-body.md)
* [Static colliders](static-collider.md)
* [Character](character-controller.md)

**Rigid bodies** can be both dynamic or kinematic. Dynamic ones will move based on the forces (such as gravity and collisions) applied to them and the interaction with the environment and other bodies. Kinematic ones are driven generally by scripts and they totally act in a kinematic way allowing special behaviors, they won't have any physical response applied to themselves but they will cause and interact with dynamic bodies.

**Static colliders** are meant to be static and never move. They will cause a collision when a rigid body collider collides with it, but will not move themselves. Typically static game elements such as walls and floors will be static colliders, and game elements (such as players, cars, etc.) will be rigid body colliders.

**Characters** are a special kind of physics component, designed to approximate and facilitate the movement of a character in the physics world. The Character component allows for some specific functionality, useful to have when moving around a character in your world, that needs to interact with colliders, but also needs to respond to user input (such as keyboard, or mouse inputs) in an interactive way.

Besides collision detection and dynamic response, the physics simulation in Xenko offers:

* [Triggers](triggers.md) - these are objects that detect collision, but no not affect the objects that collide with it. This allows for script logic to be linked when an object enters (collides with) another object.
* [Raycasting](raycasting.md) - this is the process of tracing a line (ray) through the scene, to find out which objects intersect with this ray. This can be useful for instance to find objects in the scene based on the screen position where the user clicks is mouse, or finding out which objects are affected by a fired projectile.
* [Constraints](constraints.md) - constraints can be used to link colliders together with certain conditions. An exampleof this is: limbs that have a limited amount of rotation to be realistic.

In Xenko the orchestrator of all those types above is a `Simulation`, the way a `Simulation` is initialized can be decided by few flags in the `PhysicsSettings` which are accessible from the Game Studio under the Game Settings.
Few flags are important:
* `CollisionsOnly`: This will initialize the `Simulation` to support collision detection but no dynamic will be simulated.
* `ContinuosCollisionDetection`: This will initialize the `Simulation` with Continous collision detection support. Quite useful if you have very high velocity rigidbody such as bullets in a FPS game.
* Other flags are not currently implemented/working.

From the `Simulation` itself you can change on the flight many things which include:
* the `FixedTimeStep` time of the `Simulation`
* the number of `MaxSubSteps` the engine should do in the case of update rate being slow.
* the `Gravity` of the `Simulation`.
