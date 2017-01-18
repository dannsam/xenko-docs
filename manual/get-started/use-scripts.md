# Use a script

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

This page explains how to attach a script to an entity, how to test a script, and how to debug a script.

## Attach a script

To add behaviors to entities, attach a script to them.

In Xenko, you can attach a single script as many entities as you need.

You can also attach multiple scripts to single entities. In this case, Game Studio creates multiple **instances** of the script. This means the same script can have different values in its public properties. 

You can attach a script to entities in Game Studio or in code.

### Attach a script from Game Studio

There are two ways to attach scripts in Game Studio: by dragging and dropping the script from the asset view to the entity properties, or by adding a script component to the entity.

#### Drag and drop

1. **Open the scene** in the scene editor.
2. In the **solution explorer**, select the assembly which contains your script.
   Your script appears in the asset view.
3. Select the entity you want to attach the script to.
4. Drag and drop the script from the **asset view** to the **property grid**.
   
   Game Studio attaches the script to the entity.

#### Add a script component

> [!TIP]
> You can also attach scripts to new entity or an entity of the entity hierarchy by drag-and-dropping
> the script directly inside the main view of the scene editor or in the entity hierarchy view.

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

1. **Click** ![](media/use-a-script-play-icon.png) to run your game.

If your code is working correctly, you'll see its output in the running game. 

## Debug a script

If your script isn't running correctly, you need to debug it.

1. Open the script in Visual Studio.

2. Press **F9** to add a break point at the required place(s).

4. In Visual Studio, press **F5** or click **Start** to run the game in debug mode.

   Your game starts in a new window. In Visual Studio, on the script page, the first break point highlights and stops the execution.
   
5. Verify the state of your variables.

6. Press **F10** (step over) if you want to execute the code line by line, or press **F5** to continue code execution.

> [!Note]
> If Visual Studio doesn't stop at the break point, make sure you attached the script to an entity in the active scene.

## What's next?

* [Launch your game](launch-a-game.md)