
# Create a trail
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Designer</span>
<span class="label label-doc-audience">Programmer</span>

This tutorial demonstrates how to use particles to create a trail effect for a sword swing.

<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-9.mp4">
   <source src="media/sword-slash-9.mp4" type="video/mp4">
</video>
</p>

## 1. Create a project

1. In the Xenko Launcher, click **Start** and select **New Game**. 
2. In the **Create a new game** dialog, under Asset Packs, select **Animated Models**. The Animated Models pack contains assets we'll be using in this example. (Note that we'll be making all our particles from scratch, though.)
3. Give the project a name (eg *MyTrailEffect*) and click **OK**. Game Studio loads a simple scene with a few entities.
4. We don't need the **Sphere** entity for this tutorial, so go ahead and delete it.

## 2. Set up the models and animation

1. In the **Asset view**, open the **Models** folder and drag and drop the **mannequinModel** into the scene. The mannequinModel contains a skeleton asset that we'll use for our sword slash animation soon.
2. Let's give the mannequin a weapon. Drag and drop the **SwordModel** from the **Asset view** to the mannequinModel in the entity tree (on the left). This makes the SwordModel a child entity of the **mannequinModel**.
3. In the **entity tree**, expand **mannequinModel** to see its child entities, and select SwordModel. 
4. On the right, in the **Property grid**, click **Add component** and select **Model Node Link**. We can use this to link the SwordModel to a point in the mannequinModel skeleton. There's no need to specify a target, as the entity uses its parent entity, mannequinModel, by default.
5. Under **Model Node Link**, in the **Node Name** field, select **weapon_bone_R**. This attaches the model to the point in the skeleton that uses a weapon in the right hand.
6. Now we need to choose an animation. Select the **mannequinModel** entity, and in the **Property grid**, select **Add component > Animations**. This adds an Animation component to the model.
7. Under the **Animations** component, next to **Playing Animations**, click the **plus icon** (**Add a new item to the list**). 
8. Next to **Clip**, click the hand icon **(Pick an asset up)** to open the Asset Picker. 
9. Browse to the **Animations** folder and select the **Sword_R animation**. This is our right-to-left slash animation.
10. Let's see how it looks so far. Click **Play** to run the game and check it out. Remember you can use the mouse and WASD keys to move the camera and see the animation from different perspectives.

<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-1.mp4">
   <source src="media/sword-slash-1.mp4" type="video/mp4">
</video>
</p>

We have a slash animation. Next, let's add a trail effect.

## 3. Create a basic trail
First we'll build a basic trail, just to see how it looks.

1. In Game Studio, select the **SwordModel**. In the **Property grid**, click **Add component** and select **Particle System**.
2. Click **Source** to expand its properties. 
3. Next to **Emitters**, click the **green plus icon**. This adds a new particle emitter.
4. Under **Emitters**, set the **Shape** to **Trail**. This makes the emitter a trail.
5. Unfortunately, we need to make a brief detour due to a bug in Xenko. Expand **Shape** and set the **Axis** to **Center**. (The shape should really be set to Edge, but the Edge and Center settings are reversed in the UI. This will be fixed in Xenko 1.9.3.)
6. Under **Emitters**, next to **Spawners**, click the **green plus icon** and select **Per frame**. This adds a per-frame spawner to the emitter, so Xenko spawns X number of particles per frame (as opposed to, say, per second).
7. Next to **Initializers**, click the green plus icon and select **Velocity**. This adds a velocity initializer to the emitter. That gets the trail moving! Now we see a very basic particle effect in the scene, which looks like a cloud of blocky smoke. You can grab the mannequin and move it around the scene to see how the particles behave.
8. Under the velocity initializer, set both the **Velocity min** and **Velocity max** values to **0, 5, 0**. This restricts the particles to the Y axis, like an infinitely thin sheet of paper.
9. Next to **Initializers**, click the **green plus icon** and select **Direction**. This adds a direction initializer to the emitter.
10. Expand the direction initializer to view the properties. Set both the **Direction min** and **Direction max** to **0, 0, -1**. This aligns the trail with the direction of the swing animation.
11. Run the game to see how the particles look with the sword-swinging animation.

<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-2.mp4">
   <source src="media/sword-slash-2.mp4" type="video/mp4">
</video>
</p>

We have a trail, but it doesn't look too good yet. It's too long, it's a single block of color, its particles interconnect strangely, and it never disappears.

## 4. Sort the particles
Because the particles are rendered as billboards, the segments of the trail interconnect strangely. To create a proper trail effect, we need to sort the particles into an order by adding a **spawn order initializer**.

1. In Game Studio, select the **SwordModel**.
2. In the **Property grid**, under **Particle System > Source > Emitters**, next to **Initializers**, click the **green plus icon** and select **Spawn Order** (not Spawn Order (Parent)). This adds a spawn order initializer to the emitter. It doesn't have any properties, but it gives the particles a SpawnID we can sort them by.
3. Under **Emitters**, under **Sorting**, choose **ByOrder**.
4. Under **Initalizers**, under the **Velocity** initializer, change both the **Velocity min** and **Velocity max** values to **0,0.5,0**.
5. Run the game.

<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-3.mp4">
   <source src="media/sword-slash-3.mp4" type="video/mp4">
</video>
</p>

## 5. Change the length

Back in Game Studio, under the **Emitters** properties, change the **Lifespan** to **0.2, 0.2**. Move the SwordModel around the scene and notice how the trails extinguish more quickly.

## 6. Add a texture
To fix the color, we'll give the particles a "swoosh" texture:

![Swoosh.png texture](media/swoosh.png)

1. Save the texture image above to disk. 
2. Import it to the project. To do this, in the **Asset view**, in the **Textures** folder, click **Add asset > Textures > Texture** and select **swoosh.png**.
3. In the **SwordModel** properties, expand **Emitters > Material**. Click the hand icon (**Pick an asset up**) to open the Asset Picker, and select swoosh.png.
4. Set the **Alpha-Add** bar to **1**, so it's 100% emissive.
5. Under the **Particle emitter** properties, expand **Shape** and set **UV Coords** to **Stretched** and **UV Factor** to **1**.
6. Expand **UV Rotate**. Under **Clockwise**, select 90 degrees. This rotates the texture 90 degrees clockwise, so the "swoosh" lines point in the right direction.
7. Run the game.

<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-4.mp4">
   <source src="media/sword-slash-4.mp4" type="video/mp4">
</video>
</p>

We're getting closer. But the trail doesn't disappear, so it looks like it's attached to the sword. We need to make the effect appear when the mannequin swings, then disappear at the end of the swing.

## 7. Make the particle effect a prefab
So far, we've created a particle effect by attaching it as a component to the sword. Now we're going to separate the effect from the sword and make it an independent entity we can turn on and off when we like. To do this, we'll create a prefab. For more information about prefabs, see the [prefab documentation](../../game-studio/prefabs.md).

1. In Game Studio, right-click the **SwordModel** and select **Create prefab from selection**. Game Studio creates a prefab from the SwordModel and adds it to the Asset view. By creating a prefab from the selection, we can quickly copy over the options we've set up so far.
2. We don't want the SwordModel itself to be a prefab — we just used it as a template to create the prefab from. It should be separate from our new particle effect prefab, so right-click it and select **Break link to prefab**.
3. Because naming things properly makes everything easier, rename the prefab *SwordTrail*. To do this, in the asset view, right-click the **SwordModel** prefab, select **Rename**, and type *SwordTrail*.
4. Double-click the **SwordTrail** prefab to open it in the prefab editor. This is where we'll customize the prefab.
5. The prefab contains just one entity - the SwordModel. It's not going to be a model for much longer, so let's rename this entity *SwordTrail* (the same as the prefab it belongs to).
6. Remove the **Model** and the **Model Node Link** components from the **SwordTrail** entity. We don't need them any more — this prefab will just be a particle effect.
7. Likewise, under **Particle System > Source > Emitters > Initializers**, delete the **Velocity** initializer. For now, we want the prefab effect to be static.
8. In the **SwordTrail** properties, under **Particle System > Source > Emitters > Spawners**, set **Loop** to **One shot** and change **Duration** to **0.2, 0.2**.
9. Now we've created a separate prefab for the particle effect, we don't need to keep a particle effect on the sword model. In the main scene, select **SwordModel** and delete the **Particle System** component.

## 8. Control the effect prefab with a script
We've created a sword trail effect prefab. Next we'll use a script to spawn the effect every time the mannequin swings and delete the effect a few frames later.

1. Open the project in Visual Studio. To do this, in Game Studio, click the Visual Studio icon (**Open in IDE**).
2. In Visual Studio, right-click the game project and select **Add > New item**. In the **Name** field, give your script the name *SpawnTrail*, and click **Add**.
3. Replace the script content with the code in this script: [SpawnTrail.cs](media/SpawnTrail.cs)

    This is a modified version of the Prefab Instance script included in Xenko. Instead of listening to events or key presses, it listens to animation changes - such as our sword swing animation.

4. In the script, make sure the ``namespace`` is correct. This usually matches your Xenko project name (eg *MyTrailEffect*).
5. Save the script and the Visual Studio project (**Ctrl + Shift + S**).
6. Back in Game Studio, reload the assemblies (the flashing icon in the top menu).
7. In the main scene, select the **SwordModel**.
8. In the SwordModel properties, click **Add component** and select the **SpawnTrail** script. This adds the script as a component.
9. Under the **SpawnTrail** component properties, next to **Source**, click the hand icon (**Pick an asset up**) to open the **Entity Picker**. Select the **SwordTrail** prefab.
10. In the **Animation** field, click the hand icon (**Pick an asset up**) to open the **Entity Picker**. In the left pane, select mannequinModel and click OK.
11. Run the game.

<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-5.mp4">
   <source src="media/sword-slash-5.mp4" type="video/mp4">
</video>
</p>

Thanks to our script, the particle effect appears at the start of the sword swing animation and disappears at the end.

## 9. Adjust the trail start time
With the **Sword_R** animation asset selected, check the swing animation in the asset preview (**View > Asset** preview). The asset preview shows the animation length in seconds. If you look closely, you can see the mannequin doesn't begin to swing the sword down until about 0.1 seconds into the animation. Let's set the trail effect to spawn just when the mannequin swings.

1. Select the **SwordModel**.
2. In the **SpawnTrail** properties, set the Start Time to 0.06. This means the trail effect won't spawn until 0.06 seconds into the swing animation, which looks a little more natural. Feel free to tweak this to your liking.

<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-6.mp4">
   <source src="media/sword-slash-6.mp4" type="video/mp4">
</video>
</p>

## 10. Curve the trail
You might notice our trail effect looks a little jagged, creating a "spiderweb" effect. Let's smooth it out.

1. On the **SwordTrail** prefab, under **Particle System > Source > Emitters > Shape**, set **Smoothing** to **Best**.
2. Set **Segments** to **5**. This adds three vertices between the particles of our trail, which should be enough to create a noticeably smoother effect.
3. Run the game.

<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-7.mp4">
   <source src="media/sword-slash-7.mp4" type="video/mp4">
</video>
</p>

The inner curve, at the sword hilt, is smoother. But the curve at the sword's edge is still jagged.

![Smoothed and unsmoothed areas](media/smoothing.png)

We want to smooth the effect at the sword's edge, where it's more noticeable. To do that, we'll flip the particle direction.

4. Still in the **SwordTrail** prefab, under **Transform**, change the **Position** to **0, 0, -1**. This moves the starting point of the particle effect to the tip of the sword.
5. Run the game.

<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-8.mp4">
   <source src="media/sword-slash-8.mp4" type="video/mp4">
</video>
</p>

Now we have a new problem. Because we moved the particle effect to the tip of the sword, the particles are flying from the tip. We need to reverse their direction, so they move down along the sword blade to the hilt.

6. Under **Particle System > Source > Emitters > Initializers**, under the **Direction** initializer, change both the **Direction min** and **Direction max** to **0, 0, 1**. This inverts the trail direction.
7. Run the game.

<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-9.mp4">
   <source src="media/sword-slash-9.mp4" type="video/mp4">
</video>
</p>

Congratulations! You created a sword swing trail from scratch. How you tweak it now is up to you. Feel free to continue to refine it.

Here's a more elaborate trail that combines multiple particle effects:

<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-10.mp4">
   <source src="media/sword-slash-10.mp4" type="video/mp4">
</video>
</p>

If you'd like to see how it works, [download the project file](media/ParticlesSpotlight1.7z) and take a look.

## See also
* [Particles](index.md)
* [Tutorial: lasers](lasers.md)
* [Tutorials: ribbons](ribbons.md)
* [Prefabs](../../game-studio/prefabs.md).