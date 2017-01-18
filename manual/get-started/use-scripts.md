# Use a script

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

In this page, you’ll learn how to attach a script to an entity, how to test a script, and how to debug a script.

## Attach a script

To **add behaviors** to your **entities**, you should **attach a script** to them.

In Xenko, a single script can be attached to one or more entities. 
Reciprocally, multiple scripts can also be attached to a single entity. 
If you attach a script to multiple entities, multiple **instances** of that script are created. 
This allows for the same script to have different values for its public properties. 

You can **attach a script** to your entity either from the **Game Studio** or through **code**.

### Attach a script from the Game Studio

1. **Open your scene** in the scene editor
2. **Select the assembly** in which your script is contained in the solution explorer.
   Your script appears in the asset view.
3. **Select the entity** to which you want to attach a script.
4. **Drag-and-drop** your script from the **Asset view** into the **Property grid** of the selected entity.
   The script is attached to the entity.
  
> [!TIP]
> It is also possible to attach a script to a new entity or an entity of the entity hierarchy by drag-and-dropping
> the script directly inside the main view of the scene editor or in the entity hierarchy view.
   
> [!TIP] 
> If you don't like drag-and-drop, alternatively it is also possible to attach a script by using 
> the **Add component** button in the *Property grid*.

### Attach a script from code

You can also use code to instantiate and attach a script to an entity.

1. In Visual studio, create a script called **BasicAsyncScript** and save it.

2. In order to attach the **BasicAsyncScript** script to an entity called **myEntity**, 
   you can use the following code snippet from any other executed script.

```Code: 
// myEntity being an existing entity in the scene
myEntity.Add(new BasicAsyncScript());
```

## Test a script

You can test your script by **running the game**. 
Your script gets **executed automatically** when the entity to which you attached your script is **loaded in the active scene**.

**To test a script:**

1. **Click** ![](media/use-a-script-play-icon.png)to run your game.

If your code is working correctly, you'll see it's output in the running game. 
 something is not working correctly, you need to **debug your script**.

## Debug a script

You need to debug your script if the script is **not running** properly or you are getting **unexpected results**.

**To debug a script:**

1. Open Visual Studio

2. Open your script

3. Press **F9** to add a break point at the required place(s).

4. In Visual Studio, press **F5** or click the **Start** button to run the game in debug mode.

   Your game starts in a new window. In Visual Studio, on the script page, the first break-point highlights and stops the execution.
   
5. **Verify** the state of your variables

6. Press **F10** (step over) if you want to execute the code line-by-line or press **F5** to continue code execution.

> [!TIP]
> If Visual Studio never stops to your break point check that your script has properly been attached 
> to an entity of the active scene.

## What's next?

* [Launch your game](launch-a-game.md)