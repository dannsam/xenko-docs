# Constraints

<div class="doc-incomplete"/>

<span class="label label-doc-level">Advanced</span>
<span class="label label-doc-audience">Programmer</span>

**Constraints** limit the freedom rigid bodies have to move. For example, a realistic knee joint should have only one degree of freedom (move along one axis), and not be able to bend forwards.

Constraints can either link two rigid bodies together, or link a single rigid body to a point in the world. They allow for interaction and dependency among rigid bodies. 

There are six types of constraint:

* Hinge
* Gear
* Slider
* Cone twist and turn
* Point to point (fixed distance between two colliders)
* Six degrees of freedom

For a demonstration of the different constraints, load the **PhysicsSample** sample project.

## Create a constraint

> [!Note]
> Currently, you can only use constraints from scripts. A constraint editor will be added to Game Studio in a future release.

To create a constraint, use the following [Simulation](xref:SiliconStudio.Xenko.Physics.Simulation) static methods:

```cs
CreateConstraint(ConstraintTypes type, RigidbodyComponent rigidBodyA, Matrix frameA, bool useReferenceFrameA);
```

This links `rigidBodyA` to the world at its current location. The boolean `useReferenceFrameA` decides which coordinate system (either `rigidbody A` or the world) the limit is applied to.

> [!Note]
> * In the case of `ConstraintTypes.Point2Point`, the frame represents a pivot in A. Only the translation vector is considered. `useReferenceFrameA` is ignored.
> * In the case of `ConstraintTypes.Hinge`, the frame represents pivot in A and Axis in A. This is because the hinge allows only a limited angle of rotation between the rigid body and the world in this case.
> * In the case of `ConstraintTypes.ConeTwist`, `useReferenceFrameA` is ignored.
> * `ConstraintTypes.Gear` needs two rigid bodies to be created. This function will throw an exception.

```cs
CreateConstraint(ConstraintTypes type, RigidbodyComponent rigidBodyA, RigidbodyComponent rigidBodyB, Matrix frameA, Matrix frameB, bool useReferenceFrameA)
```

This method links ``rigidBodyA`` to ``rigidBodyB``.

> Note:
> * In the case of `ConstraintTypes.Point2Point`, the frame represents a pivot in A or B. Only the translation vector is considered. `useReferenceFrameA` is ignored.
> * In the case of `ConstraintTypes.Hinge` the frame represents pivot in A/B and Axis in A/B. This is because the hinge allows only a limited angle of rotation between the rigid body and the world in this case.
> * In the case of `ConstraintTypes.ConeTwist`, `useReferenceFrameA` is ignored.
> * In the case of `ConstraintTypes.Gear`, `useReferenceFrameA` is ignored. The frame just represents the Axis either in A or B; only the translation vector (which should contain the axis) is used.

The boolean `useReferenceFrameA` determines which coordinate system (`rigidbody A` or `B`) the limits are applied to.



[useReferenceFrameA](CreateConstraint\(ConstraintTypes, RigidbodyComponent, Matrix, Boolean\))

## Add constraints to the simulation

After you create a constraint, add it to the simulation from a script by calling:

```cs
this.GetSimulation().AddConstraint(constraint);
```
or:
```cs
var disableCollisionsBetweenLinkedBodies = true;
this.GetSimulation().AddConstraint(constraint, disableCollisionsBetweenLinkedBodies);
```

[disableCollisionsBetweenLinkedBodies](xref:SiliconStudio.Xenko.Physics.Simulation.AddConstraint\(Constraint, Boolean\))

The parameter `disableCollisionsBetweenLinkedBodies` prevents linked bodies from colliding with each other.
Similarly, removing a constrain from the simulation:

```cs
this.GetSimulation().RemoveConstraint(constraint);
```