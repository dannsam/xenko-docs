# Particle Spawners

![media/particles-reference-spawners-0.png](media/particles-reference-spawners-0.png) 

Particle spawners control when, how many and at what rate new particles will be emitted in the emitter.

An emitter needs at least one spawner to have any particles at all, but it can also contain more than one spawners with different settings and timings.

## Spawn per second

This spawner emits a fixed number of particles per second while it's active. It balances and interpolates them and it's stable even if the framerate changes or drops. For example at a rate of 20 particles per second the spawner will spawn one particle every three frames for games that run at 60 fps, and two particles for three frames (skipping every third frame) for games that run at 30 fps.

![media/particles-reference-spawners-1.png](media/particles-reference-spawners-1.png) 

| Property                | Description                                                                                            |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Loop                    | If the spawner should loop when it reaches the end of its duration. By default all spawners loop indefinitely, but can be set to only fire particles once and then stop.   |
| Delay                   | The amount of time (minimum and maximum) the spawner has to delay when the particle system starts before it starts spawning particles.                                                                   |
| Duration                | The duration for which this spawner is actively spawning particles. After this duration it deactivates if the Loop setting is set to One-shot. It enters the Delay phase if the Loop is set to Looping, or it stays active indefinitely if the Loop is set to Looping, no delay.       |
| Particles               | The amount of particles this spawner will try to spawn in the emitter per second. The value can also be a floating value, like 36.875.                       |

## Spawn per frame

This spawner emits a fixed number of particles every frame regardless of the actual framerate. This feature can be useful if you require fixed number of particles, for example exactly one every frame, which is good for trails and ribbons.

![media/particles-reference-spawners-2.png](media/particles-reference-spawners-2.png) 

| Property                | Description                                                                                            |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Loop                    | If the spawner should loop when it reaches the end of its duration. By default all spawners loop indefinitely, but can be set to only fire particles once and then stop.   |
| Delay                   | The amount of time (minimum and maximum) the spawner has to delay when the particle system starts before it starts spawning particles.                                                                   |
| Duration                | The duration for which this spawner is actively spawning particles. After this duration it deactivates if the Loop setting is set to One-shot. It enters the Delay phase if the Loop is set to Looping, or it stays active indefinitely if the Loop is set to Looping, no delay.                                                                      |
| Particles               | The amount of particles this spawner will try to spawn in the emitter every frame. The value can also be a floating value, including less than 1, in which case a new particle will be spawned every few frames.                                                                              |
| Framerate               | This is purely for estimation purposes only when the engine calculates the maximum number of particles.|

## Burst spawner

This spanwer emits all its particles at one burst, waiting for certain amount of time equal to its duration, then it bursts again.

![media/particles-reference-spawners-2.png](media/particles-reference-spawners-3.png) 

| Property                | Description                                                                                            |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Loop                    | If the spawner should loop when it reaches the end of its duration. By default all spawners loop indefinitely, but can be set to only fire particles once and then stop.   |
| Delay                   | The amount of time (minimum and maximum) the spawner has to delay when the particle system starts before it starts spawning particles.                                                                   |
| Duration                | The duration for which this spawner is actively spawning particles. After this duration it deactivates if the Loop setting is set to One-shot. It enters the Delay phase if the Loop is set to Looping, or it stays active indefinitely if the Loop is set to Looping, no delay.                                                                      |
| Particles/burst         | The amount of particles this spawner will try to spawn at once when it starts and every time it loops (if looping) |

## Distance spawner

This spawner emits particles based on the distance traveled by the emitter. If the emitter does not move no particles are spawned.

![media/particles-reference-spawners-2.png](media/particles-reference-spawners-4.png) 

| Property                | Description                                                                                            |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Loop                    | If the spawner should loop when it reaches the end of its duration. By default all spawners loop indefinitely, but can be set to only fire particles once and then stop.   |
| Delay                   | The amount of time (minimum and maximum) the spawner has to delay when the particle system starts before it starts spawning particles.                                                                   |
| Duration                | The duration for which this spawner is actively spawning particles. After this duration it deactivates if the Loop setting is set to One-shot. It enters the Delay phase if the Loop is set to Looping, or it stays active indefinitely if the Loop is set to Looping, no delay.                                                                      |
| Particles/unit          | The amount of particles this spawner will try to spawn for every distance unit it moves. You can use fractions if you need less than 1 particle per distance unit. Also, the rate adjusts with scaling.            |


## Spawn from parent

This spawner emits particles based on other particles (parents). When certain conditions in a parent particle are met, children particles are spawned.

![media/particles-reference-spawners-2.png](media/particles-reference-spawners-5.png) 

| Property                | Description                                                                                            |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Loop                    | If the spawner should loop when it reaches the end of its duration. By default all spawners loop indefinitely, but can be set to only fire particles once and then stop.   |
| Delay                   | The amount of time (minimum and maximum) the spawner has to delay when the particle system starts before it starts spawning particles.                                                                   |
| Duration                | The duration for which this spawner is actively spawning particles. After this duration it deactivates if the Loop setting is set to One-shot. It enters the Delay phase if the Loop is set to Looping, or it stays active indefinitely if the Loop is set to Looping, no delay.                                                                      |
| Parent emitter          | The name of the parent emitter, which should match the emitter's name (set on that emitter). |
| Spawn Control Group     | This field will be added to the parent particles for more precise control over which parent particle spawns how many children. There are 4 groups you can choose from and they should match the initializers' groups, if initializers require control. |
| Particles/trigger       | How many particles (min and max) are spawned from a parent each time the triggering condition is met. |
| Particle Spawn Trigger  | What condition triggers child particles spawning (detailed below) |

### Particle Spawn Trigger
 - On Birth - Child particles will be spawned once when a parent particle is born (once per parent)
 - On Death - Child particles will be spawned once when a parent particle dies (once per parent)
 - Distance - Child particles will be spawned per distance traveled as the parent particle moves
 - On Hit - Parent particles need to implement *Collision Updater*. Child particles will be spawned when a parent particle hits the surface.
 - Lifetime - Child particles will be spawned when the parent particle's lifetime is between two limits, A and B, expressed as normalized values (0 to 1) over the particle's lifetime. If A < B, the period is 0..(A..B)..1, if B > A the period is reversed to (0..B)..(A..1). This method is less precise than the On Birth/On Death conditions.
 
