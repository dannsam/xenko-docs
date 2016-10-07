<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Designer</span>

# Create & Manage Prefabs

With **Prefabs**, you can re-use objects on multiple game levels and easily update them if required:

1. Suppose you created a set of trees and want to use it throughout the game.
2. You created a **Prefab** of this set.
3. In later stages of your project you need to change textures of the trees.
4. You don't have to change each **Instance** of this **Prefab** individually.
5. Simply modify the **Prefab** and all its **Instances** will update accordingly.

**Prefab** is essentially a special **Model** that acts as a container of **Entities**.
You can add, manage and delete **Prefab Elements** without compromising **Entities** you used to create this **Prefab**.

You can combine any **Entities** in a **Prefab**,
be it a group of two simple identical trees or a complex combination of sprites, models, cameras and any other **Entities**.

Every **Prefab** is essentially a special **Model Asset**. 
So just like other **Models**, you can instantiate a **Prefab** by dragging and dropping it from the **Asset View** to the **Scene**.
For more information, see [Use Prefabs](use-prefabs.md).

## Create Prefabs

### Option 1: Create Prefab from Asset View

In **Asset View**, create an **Empty Prefab** with **Add Asset** button:

![Create New Prefab](media/create-new-prefab.png)

### Option 2: Create Prefab from Scene Editor

**1)** In **Scene Editor**, select a group of **Entities**.

**2)** Right-click on the selection and press **Create Prefab from Selection**:

![Create Prefab from Selection](media/create-prefab-from-selection.png)

## Manage Prefabs
Open **Prefab Editor** with either options:

**1)** In **Asset View**, right-click of the **Prefab** and press _Edit Asset_:

![Edit Prefab](media/edit-prefab-with-edit-asset-button.png)

**2)** In **Asset View**, Double-click on the **Prefab** to open it in the **Editor**.

![Open Prefab Editor](media/open-prefab-editor.gif)

**Prefab Editor** is very similar to **Scene Editor**.
It allows you to:

* Use transformation gizmos to _Translate_, _Rotate_ and _Scale_ **Entities**.
For more information on using gizmos, see [Arrange Entities](../get-started/arrange-entities.md).
* Add/delete **Entities** to/from **Prefab**.
* Edit **Entities**, as well as their **Assets**.
* Create **Parent-Child** relations between **Entities** of the **Prefab**.
* Add and modify various components of these **Entities**: scripts, materials, models, animations, etc.

For more information on managing **Entities**, see [Populate a Scene](../get-started/populate-a-scene.md).

## Reset the Value

## Create Prefab from a Prefab

Now you know how to create and manage **Prefabs**.
Proceed to the next chapter to learn how to [Use Prefabs](use-prefabs.md) in your games.
