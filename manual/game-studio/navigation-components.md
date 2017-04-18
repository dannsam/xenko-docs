# Navigation components

**Navigation components** allow entities to use [navigation meshes](navigation-mesh.md) to find paths through your scene.

# Add a navigation component

1. Select an entity you want to use navigation.

2. In the **property grid**, click **Add component** and select **Navigation**.

    ![Add navigation component](media/add-navigation-component.png)

    Game Studio adds a navigation component to the entity.

3. Under the **Navigation** component properties, next to **Navigation mesh**, click the **hand icon** to open the **asset picker**.

    ![Open asset picker](media/open-asset-picker.png)

4. In the asset picker, select the [navigation mesh](navigation-mesh.md) you want the entity to use and click **OK**.

    ![Choose navigation mesh](media/choose-navigation-mesh.png)

    Alternatively, if you want this entity to navigate dynamically by generating its own navigation mesh, leave the **Navigation mesh** field empty. For more information, see [Dynamic navigation](dynamic-navigation.md).

5. Under **Group**, select the navigation group the entity should belong to. The entity uses the navigation properties you set in this group.

    ![Choose navigation group](media/choose-navigation-group.png)

# Use navigation components in scripts

Use the navigation components in your scripts. For example:

```cs
void Move(Vector3 from, Vector3 to)
{
	var navigationComponent = Entity.Get<NavigationComponent>();
	List<Vector3> path = new List<Vector3>();
	if(navigationComponent.TryFindPath(from, to, path))
	{
		// Follow the points in path
	}
	else
	{
		// A path couldn't be found using this navigation mesh
	}
}
```

For more information, see the [NavigationComponent API documentation](xref:SiliconStudio.Xenko.Navigation.NavigationComponent).

## See also

* [Navigation groups](navigation-groups.md)
* [Navigation meshes](navigation-meshes.md)
* [Navigation bounding boxes](navigation-bounding-boxes.md)
* [Dynamic navigation](dynamic-navigation.md)