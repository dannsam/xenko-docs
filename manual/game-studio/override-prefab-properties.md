# Override prefab properties
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>
<span class="label label-doc-audience">Designer</span>

When you change a property in an instance created from a prefab, the prefab itself isn't affected - only that instance. This is called an **override**. 

* If the property in the prefab and the prefab instance is **identical**, the instance inherits changes from the prefab for that property.

* If the property in the prefab and the prefab instance is **different**, the instance doesn't inherit changes from the prefab for that property.

![How prefabs work](media/create-manage-prefabs-how-prefabs-work.png)

In the following video, the **Lamp** prefab contains several box entities that belong to the **Boxes** parent. When we delete the boxes from the instance, only that instance is affected. The prefab (shown on the right) is unchanged.

If we add another box to the Boxes parent in the prefab, it doesn't appear in the overridden instance. That's because we deleted the Boxes parent from that instance.

<p>
<video autoplay loop class="responsive-video" poster="media/delete-boxes-from-prefab-instance.jpg">
   <source src="media/delete-boxes-from-prefab-instance.mp4" type="video/mp4">
</video>
</p>

## View overridden properties

In the **Property grid**, you can see which properties of the prefab instance differ from the base values in the prefab.

* **Overridden** and **unique** properties are **white**:

    ![Overriden properties are white](media/use-prefabs-overriden-properties-appear-white.png) 

* **Identical** properties are **gray**:

    ![Identical properties are gray](media/use-prefabs-identical-properties-appear-gray.png)

### Display only overriden properties

To display only overridden properties, in the **Property grid**, next to the **Search** field, click ![Display only overridden properties icon](media/display-only-overriden-properties-icon.png) (**Display only overriden properties**):

![Display only overridden properties](media/use-prefabs-display-only-overriden-properties.png)

### Reset a property to the prefab value

To reset an overridden property to the value in the parent prefab, right-click the property and click **Reset to base value**.

![Reset to base value](media/use-prefabs-reset-property-to-base-value.png)

## Example

In this example, we have a prefab of a futuristic lamppost.

![Lamppost](media/lamppost.png)

The lamppost prefab is composed of three entities: a column, a pillar, and a spot light. These are listed in the entity tree in the Prefab Editor.

![Add entities](media/lamppost2.png)

Let's add five instances of the lamppost prefab to our scene.

![Five lampposts](media/lamppost3.png)

Now let's modify one of the instances. In the Scene Editor, we select one **spot light** entity and, in the spot light component properties, change its color to red. The Properties Grid displays the modified **Color** property in **bold**. This means it's overriding the prefab property.

![Overridden property](media/lamppost5.png)

We can see this in the scene view.

![Pink spotlight](media/lamppost4.png)

Now let's see what happens when we go back to the Prefab Editor and change the color of the spot light in the prefab to green.

![Changed colors](media/lamppost7.png)

Four of the lampposts now have a green light. The fifth is still red, as overridden properties don't change when you modify the prefab.

## See also

* [Prefab index](prefabs.md)
* [Create prefabs](create-prefabs.md)
* [Use prefabs](use-prefabs.md)
* [Edit prefabs](edit-prefabs.md)
* [Nested prefabs](nested-prefabs.md)