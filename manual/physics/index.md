# Physics

Xenko simulates real-world physics such as gravity and collisions. This section explains how physics components work, how to add them to your project, and how to how to use them with scripts.

## In this section

* [Colliders](colliders/index.md)
    
    Create physics by adding collider components to entities

    * [Collider shapes](colliders/collider-shapes.md)

        Define the shape of collider components

    * [Triggers](colliders/triggers.md)

        Use colliders to detect when objects pass through them 

    * [Constraints](colliders/constraints.md)

        Limit the freedom rigid bodies have to move to create interesting and realistic physics

* [Raycasting](raycasting.md)

    Trace an invisible line through the scene to find intersecting objects

* [Simulation](simulation.md)

    How the Xenko engine controls physics

### Tutorials

* [Create a bouncing ball](tutorials/create-a-bouncing-ball.md)

    Use the static collider and rigid body components to create a ball bouncing on a floor

* [Script a triggered event](tutorials/script-a-triggered-event.md)
    
    Create a trigger that doubles the size of a ball when the ball passes through it

## Further reference

Xenko uses the open-source [Bullet Physics](http://bulletphysics.org/wordpress/) engine. For detailed information about this, see the [Bullet User Manual](https://github.com/bulletphysics/bullet3/blob/master/docs/Bullet_User_Manual.pdf).