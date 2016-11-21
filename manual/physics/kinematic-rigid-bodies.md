## Kinematic rigid bodies

By default, rigid bodies are moved only by the forces acting on them, such as gravity and collisions. However, sometimes you want to control rigid bodies directly instead. For example, you might want to script an elevator to move up and down (controlled in a script via its Transform property) rather than have other objects push and pull it. This is a **kinematic** rigid body.

Although rigid bodies aren't moved by physics, other objects can still collide with them. In the case of the elevator, for example, objects placed inside won't fall through the elevator floor.

To make a rigid body entity kinematic, select **Is kinematic** in the **Rigidbody** component properties.

//screenshot

You can script the _is kinematic_ property to turn on and off on certain events. For example, imagine the elevator's suspension cables are cut. You can script the _is kinematic_ property to change to _false_ when this happens. The elevator is now subject to the usual forces of physics, and plummets to the bottom of the elevator shaft.