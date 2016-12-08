# Prefabs
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>
<span class="label label-doc-audience">Designer</span>

**Prefabs** let you create a "master" version of an object and reuse it wherever you need. When you change the prefab, every instance of the prefab changes too.

For example, imagine we make a simple tree object by assembling several entities. The entities contain components such as models, materials, physics colliders, and so on, which in turn reference assets.

Now imagine we want to place several trees around the scene. We could simply duplicate the tree, but if we want to modify it later, we have to edit each one individually. This is time-consuming and leaves room for mistakes.

The better approach is to make the tree a **prefab**. This acts like a master version of the tree. We can place as many trees as we like, and when we modify the prefab, every tree is instantly updated to match. This saves lots of time.

![Creating treess with prefabs](media/use-prefabs-compressed.gif)

The most common use for prefabs is to create a small piece of your scene - like a car, NPC, or item of furniture - and duplicate it as many times as you need. When you need to modify it - for example, if you want to change its model - you can change it in one place and apply the change everywhere at once. Other elements, such as its physics colliders, animation components, aren't affected.

You can make any entity or combinations of a prefab, be it a group of two simple identical trees or a combination of sprites, models, scripts, and other entities and components. You can also override specific prefab properties in each prefab instance.

A prefab can contain any number of entities with any number of components. They can even contain other prefabs (known as **nested prefabs**).

## Nest prefabs

You can add prefabs to other prefabs. These are called **nested prefabs**. 

For example, imagine you have separate prefabs for a table, a chair, and a television. Then you create a prefab of a living room, which in turn contains the table, chair, and television prefabs. You might then create a house prefab, which in turn contains the living room prefab, which in turn contains the table, chair, and television prefabs. There's no limit to how many prefabs you can nest.

If you modify a prefab, all the dependent prefabs inherit the change automatically. For example, if you change a texture on the table prefab, it changes in the living room and house prefabs too.

## See also
1. [Create prefabs](create-prefabs.md)
2. [Manage prefabs](manage-prefabs.md)
3. [Modify prefabs](modify-prefabs.md)
4. [Use prefabs](use-prefabs.md)
5. [Archetypes](archetypes.md)



