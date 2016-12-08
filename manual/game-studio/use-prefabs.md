# Use prefabs
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>
<span class="label label-doc-audience">Designer</span>

After you [create a prefab](create-and-manage-prefabs.md), you can use it in the scene:

1. Instantiate.
2. Modify these **Instances**.
3. Reset properties to original values.
4. Break link to prefab.
5. Use **Scripts** to animate **Prefab Instances** at runtime.

## Create a prefab instance
To instantiate a prefab, drag and drop it from the **Asset View** to the **Scene**.
> To create a **Nested Prefab**, you can also drag and drop it from **Asset View** to **Prefab Editor**.

![Prefab instance in entity tree](media/prefabs-in-scene-editor.png)

You can re-arrange entities the instance just like you do with other entities:

* create child and parent entities
* drag **Entities** to add them to the **Prefab Instance**.
* Drag entities from the prefab instance to make them independent entities.

Sometimes, you instantiate a Prefab, modify it, and then want to re-use this modified **Prefab**.

In that case, simply create a new **Prefab** from the **Prefab Instance**. You can further re-use it like a separate Prefab.

## Modify prefab instances

### Adjust in scene editor

After you create a prefab instance, you can use it like any other entity:

* Use transformation gizmos to _Translate_, _Rotate_ and _Scale_.
* Change **Materials** and **Textures**.
* **Add Components**, e.g. **Scripts**, **Animations**, etc.

You can use a prefab instance as a single entity, or edit any of its child entities independently.

For more information about entities and their components, see [Populate a Scene](../get-started/populate-a-scene.md).

> [!Note] 
> When you modify a prefab instances, the prefab itself is unaffected.

### Access a prefab from an instance

In **Scene Editor**, right-click any child of a **Prefab Instance** and select _Open Prefab in Editor_.

![Open Prefab in Editor](media/use-prefabs-prefab-open-prefab-from-prefab-instance.png)

### Reset properties to base values

In **Property Grid**, you can see which properties of the **Prefab instance** differ from the **Prefab**: 

* **Overridden** and **unique** properties appear **white**.

    ![Overriden properties appear white](media/use-prefabs-overriden-properties-appear-white.png) 

* **Identical** properties appear **gray**.

    ![Identical properties appear gray](media/use-prefabs-identical-properties-appear-gray.png)

In **Property Grid**, you can also press **Display only overriden properties** to display only properties that differ from the **Prefab**:

![Display only overridden properties](media/use-prefabs-display-only-overriden-properties.png) 

You can reset overridden properties of the **Prefab Instance** to base values of the parent **Prefab**.

To do so, right-click the property and click _Peset to base value_.

![Peset to base value](media/use-prefabs-reset-property-to-base-value.png)

### Break link to prefab

You can break the link between a the prefab and its child entities.

In the **Scene Editor** entity tree, right-click a child entity of the prefab instance and select **Break link to prefab**. You can select multiple children and break link to all of them at once.
2. Select _Break Link to Prefab_.

![Break Link to Prefab](media/use-prefabs-break-link-to-prefab.gif)

After you break link, the selected **Entities** of the **Prefab Instance** are no longer affected by the changes you make to the **Prefab**.

## Example code

Imagine you have the prefab _'MyBulletPrefab'_ in the root folder of your project, and you want to instantiate that it in your scene.

Use the following code samples:

```cs
private void InstantiateBulletPrefab()
{
    // Note that "MyBulletPrefab" refers to the name and location of your prefab Asset.
    var myBulletPrefab = Asset.Load<Prefab>("MyBulletPrefab");
    
    //Instantiate a Prefab.
    var bullet = myBulletPrefab.Instantiate();

    // Add the bullet to the scene.
    SceneSystem.SceneInstance.Scene.Entities.AddRange(bullet); 

    // Change the X coordinate.
    bullet.Transform.Position.X = 20.0f;
    
    // Add the bullet to the scene.
    SceneSystem.SceneInstance.Scene.Entities.Add(bullet);
}
```

## See also
1. [Prefabs](prefabs.md)
2. [Create prefabs](create-prefabs.md)
3. [Manage prefabs](manage-prefabs.md)
4. [Modify prefabs](modify-prefabs.md)