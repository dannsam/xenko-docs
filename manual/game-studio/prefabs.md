# Prefabs
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>
<span class="label label-doc-audience">Designer</span>

Oftentimes, there are objects that you want to re-use multiple times, e.g. props and elements of the scenery.
Certainly, you can copy-and-paste such objects.
Yet, if you need to modify them later on, you will have a hard time editing each duplicate individually.

It's far more convenient to change object's properties once and apply these changes to all its instances.
That's when **Prefabs** come in handy.

Prefab is a hierarchy of entities that you can add to a scene with a single drag and drop action.
**Prefabs** help you easily manage complex **Models**, multiple **Entities** and even entire game levels.

## Scale projects
**Prefabs** allow you to:

* Combine several **Entities** to manage them as a single object.
* Create game levels faster and update them on the fly.

You can combine any **Entities** in a **Prefab**,
be it a group of two simple identical trees or a combination of sprites, models, and other entities.

**Prefabs** allow to scale your project easily and re-use complex identical objects on multiple scenes:

![Creating Army with Prefabs](media/use-prefabs-compressed.gif)

## Manage game levels
You can modify certain _Properties_ of a **Prefab**, and all its identical **Instances** will inherit these changes:

1. Suppose you have a set of trees and want to use it throughout your game.
2. Create a **Prefab** of this set.
3. If in later stages of your project you need to change textures of the trees,
there's no need to change each **Instance** of this **Prefab** individually.
4. Simply modify the **Prefab** and all its identical **Instances** will update accordingly.

## Create nested prefabs
You can use a prefab in other prefabs.
This way you create nested prefabs to build deeper level of composition of your project.
For instance, you can do the following:

1. Create several prefabs of walls using several models, textures, and other assets.
2. Add these `Wall Prefabs` to different prefabs of rooms.
3. Use `Room Prefabs` in different prefabs of houses.
4. Then instantiate `House Prefabs` by dragging them to the scene.

If later on you need to change a layer, update a single prefab and all dependent prefabs will inherit changes automatically.
For example, you can change wall texture in one `Wall Prefab` and it will instantly update all rooms and houses where this texture has been used.
In this example there are three layers of prefabs, but you can create as many levels as your project requires:

```cs
House Prefabs
    Room Prefabs
        Wall Prefabs
            ...
```

## See also
1. [Create prefabs](create-prefabs.md).
2. [Manage prefabs](manage-prefabs.md).
3. [Modify prefabs](modify-prefabs.md).
4. [Use prefabs](use-prefabs.md).
5. [Archetypes](archetypes.md).
