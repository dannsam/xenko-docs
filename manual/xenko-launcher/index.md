# Xenko Launcher

<span class="label label-doc-level">Beginner</span>

With the **Xenko launcher**, you can install, manage and run different versions of Xenko.

![Xenko launcher](media/xenko-launcher-interface.png)

## Install the latest Xenko version

If you don't have Xenko installed, the Xenko Launcher prompts you to install the latest version.

![No version installed](../get-started/media/xenko-launcher-install-last-version.png)

You can install other versions of Xenko in the **Switch/update version** section (**B**). To do this, click the **install** icon next to the version in the list.

## Install the Xenko Visual Studio extension

If you choose to install the latest version of Xenko, the Xenko Launcher asks if you want to install the Visual Studio extension.

![Install Visual Studio integration](../get-started/media/install-VS-plug-in-prompt.png)

The Visual Studio extension lets you edit shaders directly from Visual Studio, and provides syntax highlighting, live code analysis with validation, error-checking, and navigation (jump to definition). Installing the extension isn't mandatory, but we recommend it.

To install or reinstall the Visual Studio extension at any time, click the **Reinstall** button in the Xenko Launcher.

![Visual Studio extension](media/xenko-launcher-visual-studio-plugin.png)

## Switch the Xenko version

To choose which version of Xenko runs, select it in the list under **Switch/update version**. 

## Manage different versions of Xenko

You can install and uninstall multiple versions of Xenko from the **Switch/update version** section.

![Manage versions of Xenko](../get-started/media/xenko-launcher-various-versions.png)

You might need to use an older version of Xenko to work with old projects. Newer versions of Xenko might contain changes that require old projects to be upgraded.

The version number consists of two numbers. The first number refers to the major version. The second number refers to the minor version.

 * **Major**: This update to the software adds significant changes to the program. In a Major version, the first digit of the version is changed; for example, 1.x.x is changed to 2.x.x.

 * **Minor**: This update to the software adds minor changes to the program. In a Minor version, the second digit of the version is changed; for example, 1.1.x is changed to 1.2.x.

For minor versions, only the last number of the version number changes (1.9.0, 1.9.1, 1.9.2, etc). Minor versions don't contain breaking changes, so they're safe to install and use with your existing projects.

>[!Note]
>You can't revert to earlier minor versions. For example, you can install both Xenko 1.9 and 1.8 side by side, but you can't revert from Xenko 1.9.2 to Xenko 1.9.1.

* To see the release notes for a particular version, click the **note icon** next to the version name (**A**).

* To install a particular version, click the **Download and install** icon next to the 
version name (**D**).

## Start Game Studio

Now you've installed Xenko, it's time to start Game Studio and build a project.

1. Under **Switch/update version**, select the version of Xenko you want to use. 

   The version number is updated on the **Start** button.

   ![Start button](media/xenko-launcher-start-button.png)

2. Click **Start** to launch Game Studio.

## Recent projects

![Projects section](media/xenko-launcher-projects-section.png)

The Xenko Launcher displays your recent projects. To open a project, click on it.

### Open a project with a newer version of Xenko

The Projects section shows the Xenko version each project was made with in the top-right of each project button (**B**).

To open a project with a more recent version, click the upgrade icon in the bottom right (**D**), then select the Xenko version you want to open it with. Game Studio prompts you to upgrade the project when it opens.

>[!Note] After you update a project to use a newer version of Xenko, you might need to make manual changes to get it to work. **Make sure you back up the project up and all its related files before you upgrade it.**