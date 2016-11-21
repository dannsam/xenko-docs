# Collider shapes

<div class="doc-incomplete"/>

This section will briefly discuss the different available physics collider shapes. Note that all physics colliders have the properties 'Local offset' and 'Local rotation'. Local offset determines how much, and in which direction the physics model will be offsetted from the Entity it will be a part of. Local rotation determines how the physics object is oriented from it Entity.

## Box

Properties: size, rotation

The box's orientation and size can be controlled with the rotation and size properties.

## Capsule

The capsule collider has 3 properties: Length, Radius, and Orientation. The Orientation property determines along which axis the capsule is stretched, the radius and length properties determine how big the capsule is in the 2 different dimensions.

## Convex hull

The convex hull collider shape, is generated from a model. The generated physics shape will follow the model's outline, to creating a bounding physics model, to create realistic physics interaction with other objects.

## Cylinder

The cylinder collider has the same 3 properties as the capsule, and can be used in the same way.

## Infinite plane

The plane collider has 2 properties: a normal, and offset. The normal determines the vector which is perpendicular to the plane, and the offset determines how much in the direction of this vector, the plane is offset from the Entity it is part of.

## Sphere

A spherical collider. The size can be adjusted by the radius property.

## Cone

Similar to a Cylinder but tipped... like a cone.