# Archetypes

Sometimes you require similar **Assets** that slightly differ from one another.
Suppose, you create a simple sports simulator. Players wear nearly identical t-shirts that differ only in color.

You can create one t-shirt **Material**, copy it several times, and then customize each material separately.
If you decide to change some _Property_ of these materials later on, you would have to change each **Material** individually.

That's when **Archetypes** come in handy.
An **Archetype** is essentially a **Master Asset** that controls **Core Properties** of the **Derived Assets**.
Here's how you can use **Archetypes**:

1. Create a **Master Asset** to adjust **Core Properties** of the **Derived Asset**.
2. Create **Derived Assets** that inherit _Core Properties_ from the **Master Asset**.
3. Adjust _Minor Properties_ of each **Derived Asset**.

## Create Archetypes

1. In **Asset View**, right-click the Asset you want to be a **Master Asset**.
2. Click _Create Derived Asset_.

![Create Derived Asset](media/archetypes-create-derived-asset.png)

In **Asset View**, select the **Derived Asset**.
Now, go to **Property Grid** to see that this **Asset** has an **Archetype**.
You can click on its image to locate **Archetype Asset** in **Asset View**.

## Manage Archetypes
You can change any property of the **Derived Asset**. If later on you change the same property of an **Archetype**, it won't affect the **Derived Asset**.

Any changes you make to an **Archetype** affect only properties of the **Derived Asset** that are identical to an **Archetype**.
Suppose, you do the following actions:

1. Derive a **Material Asset** from an **Archetype**.
2. Change only the **Color** of the **Derived Material Asset**.
3. Later modify an **Archetype**: change its color and **Transparency** settings in **Misc**.
4. **Transparency** of the **Derived Material Asset** will change exactly as in the **Archetype**.
5. **Color** of the **Derived Asset** will not be affected, as you've already customized this property.


## Use Archetypes

You can create a whole hierarchy of **Archetypes** and **Derived** assets.

You can derive an **Asset** from **Archetype**, and then derive another **Asset** from that **Derived Asset**.
This way you can create different layers of **Material Properties** and keep your game consistent with minimum effort.