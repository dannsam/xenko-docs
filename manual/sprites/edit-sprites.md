# Edit sprites

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>

After you [import a sprite sheet](import-sprite-sheets.md), you can use the dedicated **Sprite Editor** to select sprites within the sprite sheet.

You can also edit sprite properties in the **property grid** like any other asset.

## Open the Sprite Editor

To open the Sprite Editor, in the **asset view**, double-click the sprite sheet asset. 

The sprite sheet opens in the Sprite Editor.

![Sprite Editor](media/sprite-editor.png)

### Set sprite sheet type

You can set whether the sprite sheet contains gameplay sprites (**Sprite2D**) or UI sprites (**UI**). This has no effect on how the sprite is rendered at runtime, but lets you set slightly different properties, described under **Sprite properties** below. You can change the sprite sheet type any time.

![Choose Sprite 2D or UI](media/sprite2D-UI.png)

### Add a sprite

1. Click the **Add empty sprite** button.

    ![Add sprite](media/add-sprite-button.png)

    Game Studio adds a empty sprite to the list.

2. In the **property grid** on the right, in the **Source** field, specify the sprite sheet that contains the sprite. 

>[!Tip]
>If you want to create a new sprite from the same sprite sheet as other sprites in the list, it's often faster to duplicate an existing sprite. To duplicate a sprite, select it and click **Duplicate selected sprites** or press **Ctrl + D**.
>
>![Duplicate selected sprites](media/duplicate-selected-sprites.png)

### Sprite list

The Sprite Editor lists the sprites in your project on the left. Each sprite has an index number; the first has the index *[0]*, second has index *[1]*, and so on. You can use these indexes in your scripts (see [Use sprites](use-sprites.md)).

![Sprite list](media/sprite-list.png)

To change the order (and index number) of sprites, use the ![Move selected sprite up/down](media/move-sprite-up-and-down.png) (**Move selected sprite up/down**) buttons. For example, if you move *[1] Sprite* down, it becomes *[2] Sprite*.

To rename a sprite in the list, double-click it and type a new name.

### Set the texture region

You create sprites by defining rectangular **texture regions** in the sprite sheet.

![Select a sprite region](media/select-sprite.png)

There are three ways to do this: by using the Magic Wand tool, by setting the borders manually, or by specifying the pixel coordinates in the sprite properties.

#### Use the Magic Wand

The **Magic Wand** selects the texture region around a sprite automatically. This is usually the fastest way to select sprites.

To select or deselect the Magic Wand, click the icon in the Sprite Editor toolbar, or press the **M** key.

![Select Magic Wand](media/select-magic-wand.png)

To choose how the Magic Wand identifies texture regions, use the **drop-down list** in the toolbar.

![Select transparency or color key](media/magic-wand-select-transparency-or-color-key.png)

* **Transparency**: The Magic Wand treats the edges of the non-transparent regions as the edges of the texture region. For example, if the sprite is surrounded by transparent space, it sets the texture region at the edge of the transparent space.

* **Color key**: The Magic Wand identifies texture regions using the color set under **Color key** in the Sprite Editor. For example, if the sprite is surrounded by absolute black (#FF000000), and you set absolute black as the color key, the Magic Wand sets the texture region at the edge of the absolute black space.

#### Set texture region manually

You can drag the edges of the texture region and reposition the region manually.

<p>
    <video autoplay loop class="responsive-video" poster="media\select-sprite-borders.jpg">
       <source src="media\select-sprite-borders.mp4" type="video/mp4">
    </video>
</p>

#### Set the texture region in the property grid

You can define the pixel coordinates of the texture region in **property grid** under **Texture Region**. X is the left border, Y is the top, Z is the right, and W is the bottom.

![Set texture region in property grid](media/set-texture-region-in-property-grid.png)

#### Use entire sprite sheet for the sprite

If you want to use the entire sprite sheet image for the sprite, you can do this quickly by clicking **Use whole image for this sprite** in the toolbar. This is useful when you have only one sprite in a sprite sheet.

![Use entire sprite sheet](media/use-entire-sprite-sheet.png)

### Set transparency

By default, Xenko treats transparent areas of the sprite sheet as transparent at runtime. Alternatively, you can set a key color as transparent. To do this, select **Use color key** and define a color. For example, if you set absolute black (#FF000000), areas of absolute black are transparent at runtime.

![Select color key](media/color-key.png)

You can also use the **color picker** tool to select a color from the sprite sheet.

![Color picker](media/color-picker.png)

## Sprite properties

You can set the properties of individual sprites in the **property grid**.

![Adjust frame properties](media/adjust-frame-properties.png)

| Property | Description |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Source | The path to the sprite sheet. |
| Name | The name of this sprite. You can also edit this by double-clicking a sprite in the sprite list in the Sprite Editor. |
| Texture region | The region of the sprite sheet used for this sprite. |
| Pixels per unit | The number of pixels representing a unit in the scene. The higher this number, the smaller the sprite is rendered in the scene. |
| Center | The position of the center of the sprite, in pixels. By default, the center is **0, 0**. Note: This property is only available if the sprite sheet type is set to **Sprite2D** in the Sprite Editor. |
| Center from middle | If selected, the value in the Center property represents the offset of the sprite center from the middle of the sprite. Note: This property is only available if the sprite sheet type is set to **Sprite2D** in the Sprite Editor. |
| Borders |  The size in pixels of the sprite borders (areas that don't deform when stretched). X is the left border, Y is the top, Z is the right, and W is the bottom. For more information, see [Set sprite borders](set-sprite-borders.md). Note: This property is only available if the sprite sheet is set to **UI** on the left. |

## See also

* [Import sprite sheets](import-sprite-sheets.md)
* [Set sprite borders](set-sprite-borders.md)
* [Use sprites](use-sprites.md)