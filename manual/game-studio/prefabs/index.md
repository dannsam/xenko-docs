<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>
<span class="label label-doc-audience">Designer</span>

#Prefabs

Oftentimes, there are game objects that you want to re-use multiple times, e.g. props and scenery.
Certainly, you can copy-and-paste such objects.
Yet, if you need to modify them later on, you will have a hard time editing each duplicate individually.

It's more convenient to change object's properties once and apply these changes to all its instances.
That's when **Prefabs** come in handy.
**Prefabs** help you easily manage complex **Models**, multiple **Entities** and even entire game levels.

## Build Game Levels
**Prefabs** allow you to:

* Combine elements of multi-component **Models** for easy management.
* Combine several **Entities** to manage them as a single object.
* Create game levels faster and update them on the fly.

You can combine any **Entities** in a **Prefab**,
be it a group of two simple identical trees or a combination of sprites, models, and other **Entities**.

**Prefabs** help you easily scale game levels and re-use complex identical objects on multiple game levels.
Watch how **Prefabs** can help you create a whole army of knights:

![Creating Army with Prefabs](media/use-prefabs-compressed.gif)

## Manage Game Levels
You can modify certain _Properties_ of a **Prefab**, and all its identical **Instances** will inherit these changes:

1. Suppose you have a set of trees and want to use it throughout your game.
2. Create a **Prefab** of this set.
3. If in later stages of your project you need to change textures of the trees,
there's no need to change each **Instance** of this **Prefab** individually.
4. Simply modify the **Prefab** and all its **Instances** will update accordingly.

This section explains the following concepts:

1. [Create and Manage Prefabs](create-and-manage-prefabs.md).
2. [Use Prefabs](use-prefabs.md).
