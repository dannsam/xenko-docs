# Use a script

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

This page explains how to attach a script to an entity, how to test a script, and how to debug a script.

## Attach a script

To add behaviors to entities, attach a script to them. You can do this in Game Studio or in code.

You can attach a single script as many entities as you need. You can also attach multiple scripts to single entities. In this case, Game Studio creates multiple **instances** of the script. This means the same script can have different values in its public properties.

### Attach a script from Game Studio

There are two ways to attach scripts in Game Studio: by dragging the script from the asset view to the entity properties, or by adding a script component to the entity. They both have the same result.

#### Drag and drop

1. **Open the scene** in the scene editor.

2. In the **solution explorer**, select the assembly which contains your script. Game Studio shows your script in the **asset view**.

3. Select the entity you want to attach the script to.

4. Drag the script from the **asset view** to the **property grid**.
   
   Game Studio attaches the script to the entity.

#### Add a script component

1. Select the entity you want to add the script to.

2. In the **property grid**, click **Add component** and select the script you want to attach.

    Game Studio attaches the script to the entity.

### Attach a script from code

You can use code to instantiate and attach a script to an entity.

1. In Visual studio, create a script and save it.

2. In another executed script, use the following code, where *myAsyncScript* is the script name and *myEntity* is the entity you want to attach it to:

    ```Code: 
    // myEntity being an existing entity in the scene
    myEntity.Add(new myAsyncScript());
    ```

## Test a script

To test your script, run the game. Xenko executes scripts when the entity they are attached to is loaded in the scene.

1. In the Game Studio toolbar, click ![Play icon](media/use-a-script-play-icon.png) to run your game.

    ![Game Studio play button](media/game-studio-toolbar-build-button.png)

    If your code works correctly, you'll see its output in the running game. 

## Debug a script

If your script isn't running correctly, you need to debug it.

1. Open the script in Visual Studio.

2. Press **F9** to add a break point at the required place(s).

4. In Visual Studio, press **F5** or click **Start** in the toolbar to run the game in debug mode.

   ![Visual Studio Start button](media/visual-studio-start-button.png)

   The game starts in a new window. In Visual Studio, on the script page, the first break point highlights and stops the execution.
   
5. Verify the state of your variables.

6. Press **F10** (step over) if you want to execute the code line by line, or press **F5** to continue code execution.

> [!Note]
> If Visual Studio doesn't stop at the break point, make sure you attached the script to an entity in the active scene.

## What's next?

* [Launch your game](launch-a-game.md)