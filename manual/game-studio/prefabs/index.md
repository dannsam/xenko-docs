<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>
<span class="label label-doc-audience">Designer</span>

#Prefabs

**Prefabs** help you easily manage complex **Models**, multiple **Entities** and even entire game levels.
**Prefabs** allow you to:

* Combine separate elements of a complex **Model** for easy management.
* Combine several **Entities** to manage them as a single object and re-use when needed.
* Create game levels faster and update them on the fly.

With **Prefabs**, you can re-use the same objects on multiple levels of your game and easily update them if required:

1. Suppose you created a **Model** and used it throughout the game.
2. In later stages of your project, you realize you need to change textures of a certain model.
3. There is no need to go through the whole game again and change each **Entity** of this **Model** individually.
4. Simply modify the **Prefab** and all its **Instances** will update accordingly.

## What Is a Prefab?
**Prefab** is essentially a special **Model** that acts as a container of **Entities**.
You can add, manage and delete **Prefab Components** without compromising **Entities** you used to create this **Prefab**.

**Prefabs** help you easily scale game levels and re-use complex identical objects in different game levels.
For instance, here's how **Prefabs** help create a whole army of knights:

![Use prefabs](media/use-prefabs-compressed.gif)

You can combine any **Entities** in a **Prefab**.
Be it a group of two simple identical trees or a complex combination of sprites, models, cameras and any other **Entities**.

This section explains the following concepts:

1. [Create and Manage Prefabs](create-and-manage-prefabs.md).
2. [Use Prefabs](use-prefabs.md).
