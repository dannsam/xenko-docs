# Change the graphics platform

<span class="label label-doc-level">Beginner</span>

You can select which graphics platform your game uses, and add overrides for different platforms (eg Windows, Android, etc).

> [!Note]
> Make sure you have the latest drivers for the graphics platforms you want to use.

1. In the **asset view**, select the **GameSettings** asset.

    ![Game settings asset](media/games-settings-asset.png)

2. In the property grid, under **Rendering Settings > Preferred Graphics Platform**, select the graphics platform you want to use.

    ![Select graphics platform](media/change-graphics-platform.png)

    If you select **Default**, Xenko uses the graphics platform appropriate for your platform (eg Windows, Android) when you build.

| Platform      | Default graphics platform |
|---------------|---------------------------|
| Windows, UWP  | Direct3D11                |
| Linux, Mac OS | OpenGL                    |
| Other         | OpenGL ES                 |

## Override the graphics platform

You can override the graphics platform Xenko uses for specific platforms. For example, you can have Linux use Vulkan while other platforms use the default.

1. With the **GameSettings** asset selected, in the property grid, under **Overrides**, click the **green plus icon**.

    ![Select graphics platform](media/add-override.png)

    Game Studio adds an override.

2. In the new override, next to **Platforms**, select the platforms you want this override to apply to.

    ![Select graphics platform override](media/select-override-platform.png)

3. In the **Configuration** drop-down menu, select **Rendering Settings**.

    ![Select graphics platform override](media/select-override-configuration.png)

4. Under **Rendering Settings**, in the **Default Graphics Platform** drop-down menu, select the graphics platform you want to use.

    ![Select graphics platform override](media/select-override-graphics-platform.png)

Xenko overrides the graphics platform for the platforms you selected.

## Check which graphics platform your project uses

Add a break point to your game code (such as in a script) and check the value of the [GraphicsDevice.Platform](xref:SiliconStudio.Xenko.Graphics.GraphicsDevice.Platform) variable.

For example, this project is using Vulkan:

![Select graphics platform](media/check-platform-at-runtime.png)