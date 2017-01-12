# Particle shapes

Because particles are essentially only points in space, they have no defined shape. Xenko can draw shapes between the points of the kind of specify.

Currently, emitters can only emit one type of shape at a time.

## Billboard

Each particle is expanded to a 1m x 1m camera-facing quad. Xenko scales the billboard to the particle Size value. Billboards support angular rotation only.

## Hexagon

Every particle is expanded to a camera-facing hexagon with 0.5m sides. Xenko scales the hexagon accordingly to the particle Size value. Hexagons support angular rotation only.

## Quad

Every particle is expanded to a 1m x 1m upward-facing quad. Xenko scales the quad to the particle Size value. Quads support 3D orientation and rotation.

This image shows a billboard (left), a quad (center), and a hexagon (right):

![media/particles-reference-shapebuilders-1.png](media/particles-reference-shapebuilders-1.png) 

## Direction-aligned sprite

This sprite is billboard-aligned and stretched in the direction of the particle. You can set an initial direction for the particles with an initializer, or add an updater which writes particle speed as direction.

## Ribbon

Ribbons draw particles together as connected strips which always face the camera.

For more information, see [Ribbons and trails](ribbons-and-trails.md).

## Trail

Trails are identical to ribbons except that they don't always face the camera; they're fixed in 3D space.

For more information, see [Ribbons and trails](ribbons-and-trails.md).

## See also

* [Create particles](create-particles.md)
* [Emitters](emitters.md)
* [Materials](materials.md)
* [Spawners](spawners.md)
* [Initializers](initializers.md)
* [Updaters](updaters.md)