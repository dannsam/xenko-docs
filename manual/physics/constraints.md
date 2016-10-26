# Constraints

<div class="doc-incomplete"/>

Constraints allow for interaction and dependency among rigidbodies. Types of constraints in Xenko are:

* Hinge
* Gear
* Slider
* Cone Twist - limited amount of freedom, twist and turn
* Point to Point - fixed distance between 2 colliders
* 6 degrees of freedom

At this point constraints can be used only from Scripts as there is not yet support to use them and compose them from the Game Studio. In the future a better Physics editor will be implemented to allow easier creation and composition.

**Please not that this API will be subject to changes**

#### Creating constraints

Constraints can link either two rigidbodies together or a single rigidbody to a point in the world.
They can be extremely useful to simulate interesting physics behavior to enrich your game.

Currently to create constrains you can use the following static methods from `Simulation`:
```
CreateConstraint(ConstraintTypes type, RigidbodyComponent rigidBodyA, Matrix frameA, bool useReferenceFrameA);
```
The method above will link rigidBodyA to the world at it's current location.
> Note:
> * In the case of `ConstraintTypes.Point2Point` the frame represents pivot in A, only the translation vector will be considered. `useReferenceFrameA` is ignored.
> * In the case of `ConstraintTypes.Hinge` the frame represents pivot in A and Axis in A. This is because the Hinge allows only a limited angle of rotation between the rigidbody and the world in this case.
> * In the case of `ConstraintTypes.ConeTwist` `useReferenceFrameA` is ignored.
> * `ConstraintTypes.Gear` Always needs 2 rigidbodies to be created and this function will throw an Exception.

`useReferenceFrameA` boolean is used to decide in which coordinate system (either rigidbody A or world) limits are applied.

```
CreateConstraint(ConstraintTypes type, RigidbodyComponent rigidBodyA, RigidbodyComponent rigidBodyB, Matrix frameA, Matrix frameB, bool useReferenceFrameA)
```
The method above will link rigidBodyA with rigidBodyB.
> Note:
> * In the case of `ConstraintTypes.Point2Point` the frame represents pivot in A or B, only the translation vector will be considered. `useReferenceFrameA` is ignored.
> * In the case of `ConstraintTypes.Hinge` the frame represents pivot in A/B and Axis in A/B. This is because the Hinge allows only a limited angle of rotation between the rigidbody and the world in this case.
> * In the case of `ConstraintTypes.ConeTwist` `useReferenceFrameA` is ignored.
> * In the case of `ConstraintTypes.Gear` `useReferenceFrameA` is ignored, also the frame just represents the Axis either in A or B, only the translation vector is used, that's the one that should contain the Axis.

`useReferenceFrameA` boolean is used to decide in which coordinate system (either rigidbody A or B) limits are applied.

#### Adding constraints to the simulation
After a constrain has been created you can simply add it to the simulation from a script by calling:
```
this.GetSimulation().AddConstraint(constraint);
```
or:
```
var disableCollisionsBetweenLinkedBodies = true;
this.GetSimulation().AddConstraint(constraint, disableCollisionsBetweenLinkedBodies);
```
`disableCollisionsBetweenLinkedBodies` is useful when you want to prevent the two linked bodies to collide with eachother.
Similarly removing a constrain from the simulation:
```
this.GetSimulation().RemoveConstraint(constraint);
```




