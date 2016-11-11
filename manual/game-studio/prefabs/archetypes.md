# Archetypes

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Designer</span>

Sometimes you require a set of **Assets** that have identical _Properties_.
Suppose, you create a simple sports simulator where players wear nearly identical t-shirts that differ only in color.

You can create one t-shirt **Material**, copy it several times, and then customize each **Material** separately.
If later on you decide to change some specific _Property_ of these materials (e.g. change transparency settings),
you would have to go through each **Material**.

That's when **Archetypes** come in handy.
An **Archetype** is essentially a **Master Asset** that controls **Core Properties** of the **Derived Assets**.

> [!Note] You can create **Archetypes** of any assets, e.g. audio, models, materials, etc.

Here's how you can use **Archetypes**:

1. Create an **Archetype** and set its _Core Properties_.
2. Create **Derived Assets** that inherit _Core Properties_ from this **Archetype**.
3. Adjust _Core Properties_ in **Archetype**, if needed.
4. Customize _Minor Properties_ of each **Derived Asset** individually.

## Create Archetypes

**1)** In **Asset View**, right-click the Asset you want to be an **Archetype**.

**2)** Click _Create Derived Asset_:

![Create Derived Asset](media/archetypes-create-derived-asset.png)

**3)** In **Asset View**, select the **Derived Asset**.

**4)** Go to **Property Grid** to see that this **Asset** has an **Archetype**.

![Derived Asset in Property Grid](media/archetypes-archetype-in-property-grid.png)

**5)** You can click on **Archetype** image to locate **Archetype Asset** in **Asset View**.

## Manage Archetypes
Suppose, you change some _Property_ of the **Derived Asset**.
If later on you change the _Same Property_ of an **Archetype**, it won't affect the **Derived Asset**.

> [!Note] Any changes you make to an **Archetype** affect only properties of the **Derived Assets**
> that are identical to that **Archetype**.

Suppose, you do the following actions:

1. Derive a **Material Asset** from an **Archetype**.
2. Change the **Color** of the **Derived Material Asset**.
3. Later, you modify an **Archetype**: change its color and **Transparency** settings in **Misc**.
4. **Transparency** of the **Derived Material Asset** will change exactly as in **Archetype**.
5. **Color** of the **Derived Asset** will not be affected, as you've already customized this property.

### Reset to Base Values
In **Property Grid**, you can see which properties of the **Derived Asset** differ from the **Archetype**: 

* **Overridden** and **unique** properties appear **white**.

    ![Overriden properties appear white](media/archetypes-overriden-properties-appear-white.png) 

* **Identical** properties appear **gray**.

    ![Identical properties appear gray](media/archetypes-identical-properties-appear-gray.png) 

In **Property Grid**, you can also press **Display only overriden properties** to see only the properties that differ from the **Archetype**:

![Display only overriden properties](media/archetypes-display-only-overriden-properties.png) 

You can always reset overridden or unique properties of the **Derived Asset** to the base value of the parent **Archetype**.

To do so, right-click the property and click _Peset to base value_.

![Peset to base value](media/archetypes-reset-property-to-base-value.png)

### Clear Archetype
You can always break link between the Derived Asset and the Archetype:

1. In **Asset View**, select the Derived asset.
2. Right-click on it and click _Clear archetype_.

![Clear Archetype](media/archetypes-clear-archetypes.png)

## Use Archetypes

You can create a whole hierarchy of **Archetypes** and **Derived** assets.
You can derive an **Asset** from an **Archetype**, and then derive another **Asset** from that **Derived Asset**.
This way you can create different layers of _Asset Properties_ to keep your game project consistent and well-structured:

```cs
Archetype
    Derived Asset
        Derived Asset
```

