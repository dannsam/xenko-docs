<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>
<span class="label label-doc-audience">Designer</span>

# Use Prefabs

Once you [Create a Prefab](create-and-manage-prefabs.md), you can use it in your game:

1. Instantiate **Prefab**.
2. Modify **Instances** of this **Prefab**.
3. Use **Scripts** to animate these **Instances** at runtime.

## Create Prefab Instances

To instantiate a **Prefab**, drag and drop it from **Asset View** to the **Scene**.
When you instantiate a Prefab, you create a **Prefab Instance**.

In the **Scene Editor**, Prefab Instance is displayed as **Parent Entity** and all **Prefab Elements** are its **Children**.

![Prefab Instance in Scene Editor](media/prefabs-in-scene-editor.png)

You can re-arrange **Entities** of the **Prefab Instance** just like you do with other **Entities**:

* Create **Child** and **Parent** **Enitites**.
* Drag **Entities** to add them to the **Prefab Instance**.
* Drag **Entities** away from the **Prefab Instance** to make them independent **Entities**.

Sometimes, you instantiate a Prefab, modify it, and then want to save and re-use this modified **Prefab**.
In that case, simply create a new **Prefab** from the **Prefab Instance**. You can further re-use it like a separate Prefab.

## Modify Prefab Instances
When you create **Prefab Instance**, customize it like any other **Entity**:

* Use transformation gizmos to _Translate_, _Rotate_ and _Scale_.
* Change **Materials** and **Textures**.
* **Add Components**, e.g. **Scripts**, **Animations**, etc.

You can customize **Prefab Instance** as a single unit, or any of its **Child Entities** independently.
For more information on **Entities** and their components, see [Populate a Scene](../get-started/populate-a-scene.md).

> [!Note] When you modify **Prefab Instances**, the **Prefab** itself **is unaffected**.

## Modify Prefabs at Runtime
Sometimes you need to change certain properties of a **Prefab** at runtime.

Suppose you have a _ChangeTreeColor_ script.
At certain point in the game, this script changes tree color from green to red in a _Forest Prefab_.

These changes won't affect **Existing Instances** of the **Prefab** that were spawned before the _ChangeTreeColor_ script was introduced.
Yet, all **New Instances** of the forest prefab **will be red**.

## Modify Prefab

When you modify a **Prefab**, you affect only identical **Properties** of **Prefab** and **Prefab Instance**.
This way you can re-use the same **Prefab** throughout the game, but customize each **Prefab Instance** individually.

Let's see how it works on an example:

**1)** Create a **Prefab** of three yellow spheres.

**2)** Create two **Instances** of this **Prefab** in the **Scene**.

![Create Two Prefab Instances](media/use-prefabs-prefab-example-1.png)

**3)** Select one **Prefab Instance** and choose a different **Material Asset** for one of its spheres.

![Change Material of Prefab Instance](media/use-prefabs-prefab-example-2.png)

**4)** In **Asset View**, select a **Prefab** and change **Material Asset** of the same sphere.

> [!Note] This action affects only **Prefab Instance** where **Material Asset** hasn't been previously changed.

![Change Material of Prefab](media/use-prefabs-prefab-example-3.png)

**5)** Change **Material Color** for all other spheres of the **Prefab**.

> [!Note] This action affects all **Prefab Instances**,
> as **Prefab** and all its **Instances** use the same **Material Asset** for the remaining two spheres.

![Change Material of Prefab](media/use-prefabs-prefab-example-4.png)

## Use Prefabs from Scripts

You can instantiate a **Prefab** from **Code**.

> [!Note] Keep in mind you can only instantiate separate **Entities** of the **Prefab**.

In order to instantiate the whole **Prefab**, proceed as follows:

**1)** In **Prefab Editor**, create an empty **Entity**, drag it to the top of the Entity list and **Rename** it.

![Create Parent Entity in Prefab](media/use-prefabs-create-prefab-parent-entity.png)

**2)** Select all other **Entities** and drag them to this newly created **Entity**.

![Drag Entities to Parent Entity](media/use-prefabs-drag-entities-to-parent-entity.png)

**3)** Now there is single Parent **Entitiy** on the top level of your hierarchy, and all other **Prefab Elements** are its children.

![Instantiate Single Parent Entity](media/use-prefabs-instantiate-single-parent-entity.png)

**4)** Back in Visual Studio, instantiate the whole **Prefab** with:

``var bullet = myBulletPrefab.Instantiate().First();``.

## Code Samples
Suppose you have a **Prefab** called _'MyBulletPrefab'_.
It is in the root folder of your project, and you want to create an instance of that **Prefab** in your **Scene**.

Use the following code samples:

```cs
private void InstantiateBulletPrefab()
{
    // Note that "MyBulletPrefab" refers to the name and location of your prefab Asset.
    var myBulletPrefab = Asset.Load<Prefab>("MyBulletPrefab");
    
    // Assume there is only one top-level entity (could be multiple).
    var bullet = myBulletPrefab.Instantiate().First();

    // Change the X coordinate.
    bullet.Transform.Position.X = 20.0f;
    
    // Add the bullet to the scene.
    SceneSystem.SceneInstance.Scene.Entities.Add(bullet);
}
```
