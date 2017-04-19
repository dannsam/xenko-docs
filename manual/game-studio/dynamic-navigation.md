# Dynamic navigation

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Level designer</span>
<span class="label label-doc-audience">Programmer</span>

If you enable **dynamic navigation**, entities with navigation components don't need a [navigation mesh](navigation-meshes.md) asset. Instead, the entities generate navigation meshes dynamically.

> [!Note]
> Make sure that the scenes you want the entities to navigate dynamically have [navigation bounding boxes](navigation-bounding-boxes.md).

## Enable dynamic navigation

You can enable and disable dynamic navigation in the global [game settings](game-settings.md) asset.

1. On the entities you want to navigate dynamically, under the navigation component properties, next to **Navigation mesh**, make sure no navigation mesh is selected.

    ![No navigation mesh selected](media/no-navigation-mesh-selected.png)

    For more information about the navigation component, see [Navigation components](navigation-components.md).

2. In the **solution explorer** (the bottom-left pane by default), select the **Assets folder**.

    ![Select Assets folder asset](media/select-asset-folder.png)

3. In the **asset view** (the bottom pane by default), select the **Game Settings** asset.

    ![Select Game Settings asset](media/select-game-settings-asset.png)

4. In the **property grid** (the right-hand pane by default), expand **Navigation Settings**.

   ![Game settings](media/navigation-settings.png)

5. Select the **Enable dynamic navigation** checkbox.

    ![Enable dynamic navigation checkbox](media/enable-dynamic-navigation.png)

## Enable and disable dynamic navigation from a script

You can enable and disable dynamic navigation from scripts. As part of this process, the script should also clear the navigation mesh from the navigation component.

## See also

* [Navigation groups](navigation-groups.md)
* [Navigation meshes](navigation-meshes.md)
* [Navigation bounding boxes](navigation-bounding-boxes.md)
* [Navigation components](navigation-components.md)