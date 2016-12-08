# Modify prefabs
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>
<span class="label label-doc-audience">Designer</span>

## Modify prefabs in editor

When you modify a certain _Property_ of a **Prefab**, here's how it affects the same _Property_ of a **Prefab Instance**:

1. _Property_ in Prefab and Prefab Instance **are identical**: **Prefab Instance** changes exactly like **Prefab**.
2. _Property_ in Prefab and Prefab Instance **are different**: changes in **Prefab** do not affect **Prefab Instance**.

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

## Modify prefabs at runtime
Sometimes you need to change certain _Properties_ of a **Prefab** at runtime.

Suppose you have a _ChangeTreeColor_ script.
At certain point in the game, this script changes tree color from green to red in a _Forest Prefab_.

These changes won't affect **Instances** of the **Prefab** that were spawned before the _ChangeTreeColor_ script was introduced.
Yet, all **New Instances** of the forest prefab **will be red**.

## See also
1. [Prefabs](prefabs.md)
2. [Create prefabs](create-prefabs.md)
3. [Manage prefabs](manage-prefabs.md)
4. [Use prefabs](use-prefabs.md)