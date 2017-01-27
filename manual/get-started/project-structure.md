# Project structure

Xenko saves your projects as [Visual Studio solution files](https://msdn.microsoft.com/en-us/library/bb165951.aspx?f=255&MSPPError=-2147217396). You can open the projects with Xenko Game Studio or Visual Studio.

Xenko projects use many kinds of file, including source code, images, models, sounds, and others. The files fall into one of two categories:

*	**Source code** (files used by programmers)

*	**Asset** (.xk*) (files used by non-programmers, eg designers and artists)

**Assets** are the content of your game. They're usually created from files created with other software, such as image files (.jpg, .png etc), 3D models (.fbx etc), sounds (.mp3, .wav etc), and so on. For example, texture assets use image files, and audio assets use audio files. Files used by assets are called **resource files**.

>[!NOTE]
>For more information about assets, see [Assets](assets.md).

## Packages

Xenko organizes the project into **packages**, .xkpkg files contained in dedicated folders. A project can contain one package or several. You can share packages between projects.

Packages have the following directory structure:

![Package folder structure](media/folder-structure.png)

* **Assets** contains the asset files which represent elements in your game.

* **Bin** contains the compiled binaries and data. Xenko creates the folder when you build the project, with a subdirectory for each platform.

* **MyPackage.Game** contains your source code.

*	**MyPackage.Platform** contains additional code for the platforms your project supports. Game Studio creates folders for each platform (eg *MyPackage.Windows*, *MyPackage.Linux*, etc). These folders are usually small, and only contain the entry point of the program.

* **obj** contains cached files. Game Studio creates this folder when you build your project. To force a complete asset and code rebuild, delete this folder and build the project again.

* **Resources** is a suggested location for files such as images and audio files used by your assets.

## Organize your files

Whether you're working alone or in a team, we recommend you use a version control system such as Git, SVN, or Perforce Helix to save a history of changes to your project.

>[!NOTE]
>We don't recommend you add the **Bin** or **obj** folders to version control. They take up lots of space and almost any change on your project will need to rebuild them.

>[!NOTE]
>Visual Studio puts additional **.obj** folders inside each code folder. We don't recommend you add these to version control.

How you organize your project is up to you, your teammates, and your version control system. However, there are a few things to bear in mind.

![File type workflow](media/file-type-workflow.png)

### Resource files

Resource files are files imported into Xenko and used by assets. They include image files (eg .png, .jpg), audio files (eg .mp3, .wav), and models (eg .max). We recommend you save these files in the Resources folder in your project folder.

We don't recommend you save resource files in the Asset folder. You might be used to organizing files this way if you use Unity, as Unity requires resource files and asset files to be in the same folder. Xenko doesn't require this, and doing so has some downsides. For example, imagine an artist has edited 10GB of textures and committed them to source control. At the same time, a designer needs to edit an asset quickly. To do this, the designer gets the latest version of the asset from source control. However, because the assets and resource files are in the same folder, the designer is forced to get the 10gb of files at the same time, which slows things down. If the files are in a separate folder, however, there's no problem; the designer only gets the folder they need.

### Content creation files

Content creation files are created with external content creation tools, such as .psd files (Photoshop) or .max files (3D Studio Max).

We don't recommend you save content creation files in your project folder. This is because the files are often large and aren't used in the project. Instead, we recommend you save the files in a different version control repository - or, if your version control system supports partial checkouts (such as SVN or Perforce), a different root folder. This means team members only get the files they need.

### Suggested directory structure

Following these suggestions about resource files and content creation files, an example folder structure might look like this:

```
- MyGame
    - Assets
        - texture.ktex
    - Bin
    - MyPackage.Game
    - MyGame.Platform
    - obj
    - Resources
        - texture.png
- ContentCreationFiles
    - texture.psd
  ```

## Example

Imagine a team with two programmers, two 2D artists, and two 3D artists. The programmers check out the project folder (containing code, assets, and resources). The 2D artists check out the game project and an additional, separate folder containing .psd files. The 3D artists check out the game project and an additional, separate folder containing .fbx (Maya) files.

Now imagine one of the 2D artists changes several .psd files and commits 2GB of changes to version control. Because only the 2D artists have the folder checked out, only the other 2D artist gets this change. The others don't need it.