<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>
<span class="label label-doc-audience">Designer</span>

# Use Prefabs

Once you [Create a Prefab](create-and-manage-prefab.md), you can use and re-use it in your game.
You can instantiate a **Prefab**, then modify its **Instances**, and use scripts to animate these **Instances** at runtime.

## Instantiate a Prefab

To instantiate a **Prefab** drag and drop it from **Asset View** to the **Scene**.
When you instantiate a **Prefab**, you create a **Prefab Instance**.
In the **Scene Editor**, it is displayed as a **Parent Entity** and all **Prefab Elements** as **Children Entities**.

![Prefab Instance in Scene Editor](media/prefabs-in-scene-editor.png)

You can re-arrange **Entities** of the **Prefab Instance** just like you do with all other **Entities**.
Create children and parents, drag **Entities** to and from the **Prefab Instance**.

## Modify Prefab Instances
As with other **Entities**, you can modify **Prefab Instance** as well as its **Children**:

* Use transformation gizmos to _Translate_, _rotate_ and _scale_.
* Change **Materails** and **Textures**.
* **Add Components**, e.g. **Scripts**, **Animations**, etc.
* Drag a **Child** from the **Parent Entity**.

For more information on **Entities** and their components, see [Populate a Scene](get-started/populate-a-scene.md).

If you modify a **Prefab** or its **Instances**, here's how it affects your game project:


|                                            | **You Modify Prefab**                    | **You Modify Prefab Instance** |
|--------------------------------------------|------------------------------------------|--------------------------------|
| Prefab Instance **is identical to** Prefab | Prefab Instance **changes like Prefab**. | Prefab **is unaffected**.      |
| Prefab Instance **has been modified and differs from** Prefab    | Prefab Instance **is unaffected**.       | Prefab **is unaffected**.      |


Sometimes, you instantiate a **Prefab**, modify it, and then want to save and re-use this modified **Prefab Instance**.
In that case, simply create a new **Prefab** from this **Instance**. You can further re-use it like a separate **Prefab**.

## Use Prefabs from Scripts

You can instantiate a **Prefab** from **Code**, too.

Suppose you have a **Prefab** called _'MyBulletPrefab'_.
It is in the root folder of your project, and you want to create an instance of that **Prefab** in your **Scene**.

Use the following code sample:

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


## Modify Prefabs at Runtime
Sometimes you need to change certain properties of a **Prefab** in runtime.
Suppose you have a _ChangeTreeColor_ script.
At certain point in the game, this script changes tree color from green to red in a forest prefab.

These changes won't affect **Existing Instances** of the **Prefab** that were instantiated before the _ChangeTreeColor_ script was introduced.

Yet, all **New Instances** of the forest prefab **will be red**.
