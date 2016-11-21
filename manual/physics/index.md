# Physics

<div class="doc-incomplete"/>

The Xenko engine simulates **physical forces** such as gravity and collision. You add physics to your project by adding With the built-in components it's easy to enable physics for your entities and allow them to interact with eachother.

This section will show you how to enable physics in Game Studio, how to use the correct physics component for your needs, and how to apply forces to an Entity through scripting. We will also show you how to use triggers, which allow you to trigger an event when an object enters a certain space for instance.


Physics simulation is the process of simulating how physical objects interact with each other, and how they react to forces such as gravity or collisions. 

## Physics components
In Xenko, physics objects are called **physics components**. There are three types of physics component:

* [Rigid bodies](rigid-body.md)
* [Static colliders](static-collider.md)
* [Characters](character-controller.md)

**Rigid bodies** can be either dynamic or kinematic.

* Dynamic rigid bodies move based on the forces applied to them, such as gravity and collisions, and their interaction with the environment and other bodies. They are typically controlled with scripts.

* Kinematic bodies are generally driven by scripts and they totally act in a kinematic way allowing special behaviors, they won't have any physical response applied to themselves but they will cause and interact with dynamic bodies.

Typical rigid body colliders are characters and cars.

**Static colliders** don't move, but cause a collision when a rigid body collides with them. Typical static colliders are walls and floors.

**Characters** are a special kind of physics component which approximate the movement of a character in the physics world. The Character component allows for some specific functionality, useful to have when moving around a character in your world, that needs to interact with colliders, but also needs to respond to user input (such as keyboard, or mouse inputs) in an interactive way.

Besides collision detection and dynamic response, you can also use:

* [Triggers](triggers.md) detect collision, but don't affect the objects they collide with. This means you can link script logic when an entity enters (collides with) another entity. For example, you can use a trigger to detect when a player character enters ("collides" with) a room.
* [Raycasting](raycasting.md) traces a line (ray) through the scene to find intersecting objects. This is useful, for example, to find which objects are under the mouse cursor when a user clicks in a 3D image, or to check which objects are in a gun's line of fire.
* [Constraints](constraints.md) link colliders with certain conditions. For example, limbs that have a limited amount of rotation to be realistic.

The orchestrator of all those types above is a `Simulation`. How `Simulation` is initialized can be decided by few flags in the `PhysicsSettings` which are accessible from the Game Studio under the Game Settings.
A few flags are important:
* `CollisionsOnly`: This will initialize the `Simulation` to support collision detection but no dynamic will be simulated.
* `ContinuosCollisionDetection`: This will initialize the `Simulation` with Continuous collision detection support. Quite useful if you have very high velocity rigidbody such as bullets in a FPS game.
* Other flags are not currently implemented/working.

From the `Simulation` itself you can change on the flight many things which include:
* the `FixedTimeStep` time of the `Simulation`
* the number of `MaxSubSteps` the engine should do in the case of update rate being slow.
* the `Gravity` of the `Simulation`.
