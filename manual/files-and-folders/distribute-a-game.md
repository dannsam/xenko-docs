# Distribute a game

When you're ready to publish your game, create a release build from Visual Studio, then distribute it.

## 1. Create a release build

1. If you've built your game in Release mode before, in your project folder (eg *MyGame/Bin/MyPlatform/Release/*), delete the *Data* folder. This folder might contain unnecessary files, such as old versions of assets, so it's simplest to build it again from scratch.

2. Open your project in Game Studio.

3. In the toolbar, click the drop-down menu and select **Visual Studio**.

    ![Open in VS](media/open-in-visual-studio.png)

    Your project opens in Visual Studio.

4. In the Visual Studio toolbar, from the drop-down menu, select **Release**.

    ![Select release](media/select-release.png)

5. Under **Build**, select **Build solution**.

    ![Build solution](media/build-solution.png)

    Visual Studio creates a release build in your project bin folder (eg *MyGame/Bin/MyPlatform/Release*).

> [!Tip]
> You might want to rename the **Release** folder to something more descriptive (such as the title of your game).

## 2. Delete unnecessary files

After you create a build, you can delete files that are unnecessary to play the game. This makes the game smaller and easier to distribute.

* In the main folder, delete all the files except the *.dll* files and the *.exe* file.

* Delete all the folders except for *x64*, *x86*, and *Data*.

If you have other unnecessary files, such as custom configuration files (ie files not created with Xenko), we recommend you delete these too.

## 3. Distribute your game

After you create a release build, how you distribute it is up to you. 

To run games made with Xenko, users need:

* .NET 4.6.1
* DirectX11 (included with Windows 10 and later)
* Visual C++ 2015 runtimes (x86 and/or x64, depending on what you set in your project properties in Visual Studio)

## See also

* [Version control](version-control.md)
* [Project structure](project-structure.md)