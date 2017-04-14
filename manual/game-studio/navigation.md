# Navigation

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Level designer</span>
<span class="label label-doc-audience">Programmer</span>

You can use the **navigation** system to control how characters and other objects navigate scenes. The navigation system uses several elements that work together:

* navigation groups
* navigation meshes
* navigation bounding boxes
* navigation components

## 1. Create a navigation group

**Navigation groups** define different navigation properties for the entities you add to them. 

You should create different navigation groups for different kinds of entities that require navigation. For example, if your game features vehicles controlled by scripts, you might create different navigation groups for different sizes of vehicle, each with different rules: a car group, a bus group, a motorcycle group, etc.

1. In the **solution explorer** (the bottom-left pane by default), select the **Assets folder**.

    ![Select Assets folder asset](media/select-asset-folder.png)

2. In the **asset view** (the bottom pane by default), select the **GameSettings** asset.

    ![Select Game Settings asset](media/select-game-settings-asset.png)

3. In the **property grid** (the right-hand pane by default), expand **Navigation Settings**.

   ![Game settings](media/navigation-settings.png)

4. Next to **Groups**, click the green plus icon.

    Game Studio adds a new item to the list of navigation groups.

    ![Navigation group properites](media/navigation-group-properties.png)

5. Set the properties for the navigation group. Entities you add to this group will follow the rules you set here.

### Navigation group properties

| Property             | Description
|----------------------|------------
| Item                 | The name of the group
| Height               | The height of the entities in this group. Entities can't enter areas with ceilings lower than this value.
| Maximum climb height | The maximum height that entities in this group can climb. In most cases, this should be approximately the same value as the **step height** property in the physics component of the entities in this group, if they have one.
| Maximum slope        | The maximum incline (in degrees) that entities in this group can climb. Entities can't go up or down slopes higher than this value. In most cases, this should be approximately the same value as the **max slope** property in the physics component of the entities in this group, if they have one.
| Radius               | The size of the entities in this group

As a general rule, you should match the properties for each group to the physics components of the entities in the group, if they have one.

For example, if you're creating a navigation group for a soldier entity, and the soldier entity also has a physics 

## 2. Add a navigation mesh

The **navigation mesh** is the area in the scene that entities can navigate.

1. In the **asset view** (bottom by default), click **Add asset > Navigation > Navigation mesh**.

    ![Select Game Settings asset](media/add-navigation-mesh.png)

    Game Studio adds a navigation mesh asset to your project.

    ![Navigation mesh asset](media/navigation-mesh-in-asset-view.png)

2. With the navigation mesh selected in the **asset view**, in the **property grid**, set the **scene** the navigation mesh applies to.

    ![Set navigation mesh properties](media/navigation-mesh-properties.png)

    For more information about scenes, see [Scenes](scenes.md).

## 3. Add a navigation bounding box

The **navigation bounding box** defines the area the navigation mesh covers. You can use it to create smaller navigation areas in your scene, rather than having the mesh cover the entire scene.

1. In the scene, select the entity you want to contain the bounding box, or create a new entity.

2. With the entity selected, in the **property grid**, click **Add component** and select **Navigation bounding box**. 

    ![Add navigation bounding box](media/add-navigation-bounding-box.png)

    Game Studio adds a navigation bounding box to the entity.

3. Under the **Navigation bounding box** component properties, set the size of the bounding box using the XYZ values.

    ![Navigation bounding box properties](media/navigation-bounding-box-properties.png)

4. Use the entity's transform component to position the bounding box where you need it in your scene.

## 4. Add a navigation component

**Navigation components** allow entities to use the navigation mesh to find paths through your scenes.

1. Select an entity you want to use navigation, such as a non-player character.

2. In the **property grid**, click **Add component** and select **Navigation**.

    ![Add navigation component](media/add-navigation-component.png)

    Game Studio adds a navigation component to the entity.

3. Under the **Navigation** component properties, next to **Navigation mesh**, select the navigation mesh you want this entity to use.

    ![Choose navigation mesh](media/choose-navigation-mesh.png)

4. Under **Group**, select the navigation group the entity should belong to. The entity will follow the navigation rules you set in this group.

## 5. Use navigation in a script



## Sample project

For an example of how to implement navigation, see the **top-down RPG** sample project included with Xenko.