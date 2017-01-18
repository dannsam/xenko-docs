# Scripts in Xenko

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

A script is a unit of code that lets you to add behaviors to entities. 

In this page, you'll learn what a script is, the different types of scripts in Xenko, 
and how to make certain properties of your script appear in the Game Studio so that artists can configure script parameters.

## Scripting and C&#35;

In Xenko, all scripting is done in **C#**, an advanced and efficient programming language. Scripts are edited and debugged in **Visual Studio**.

> [!NOTE]
> These pages don't teach you C#. Good luck!

However, not all the C# code in your game are scripts.

A script is a C# class that inherits from the [ScriptComponent](xref:SiliconStudio.Xenko.Engine.ScriptComponent) class. You can attach scripts to entities. They have access to the [ScriptContext](xref:SiliconStudio.Xenko.Engine.IScriptContext). The script context gives access to the main modules of the Xenko engine:

* **Audio**: Gives access to the audio system.
* **Content**: Lets you load and save content from assets.
* **EffectSystem**: Lets you load and compile effects and shaders.
* **Entity**: The entity the script is attached to.
* **Game**: Gives access to all information related to your game.
* **GraphicsDevice**: Gives advanced access to low-level graphics device to create GPU resources.
* **Input**: Gives access to keyboard, mouse and joypad states and events.
* **Services**: A registry of services that you can use to register your own services.
* **SceneSystem**: Gives access to the currently displayed scene, where you can manage entities.
* **Script**: Gives access to the script manager to schedule or wait for the termination of scripts.
* **Log**: Gives you access to the logging system to log messages and errors from scripts.

These objects are described in more detail in the Xenko API reference.

Of course, you can still use standard C# classes in Xenko, but these aren't called scripts and you can't attach them to entities in Game Studio.

## Script types

There are three main types of script in Xenko, each with a precise function: **startup scripts**, **synchronous scripts**, and **asynchronous scripts**. 

When you write your script, inherit from the script type that provides the proper behavior.

### Startup scripts

Startup scripts are called at load time and unload time (ie when the attached entity is loaded and unloaded). They're mostly used to initialize game elements and destroy them when the scene is unloaded. 

They have a [Start](xref:SiliconStudio.Xenko.Engine.StartupScript.Start) method for initialization and a [Cancel](xref:SiliconStudio.Xenko.Engine.ScriptComponent.Cancel) method for cancellation that should be overridden.

```
public class StartUpScriptExample : StartupScript
{
	public override void Start()
	{
		// Do some stuff during initialization
	}
}
```

### Synchronous scripts

Synchronous scripts are initialized, then updated every frame, and finally canceled.

The initialization code, if any, goes in the [Start](xref:SiliconStudio.Xenko.Engine.StartupScript.Start) method.

The code performing the update goes in the [Update](xref:SiliconStudio.Xenko.Engine.SyncScript.Update) method.

The code performing the cancellation goes in the [Cancel](xref:SiliconStudio.Xenko.Engine.ScriptComponent.Cancel) method.

The following script performs updates every frame, no matter what:

```
public class SampleSyncScript : SyncScript
{        
	public override void Update()
	{
		// Performs the update on the entity - this code is executed every frame
	}
}
```

## Asynchronous scripts

Asynchronous scripts are executed only once, then canceled when removed from the scene. 

The asynchronous code goes in the [Execute](xref:SiliconStudio.Xenko.Engine.AsyncScript.Execute) function.

The code performing the cancellation goes in the [Cancel](xref:SiliconStudio.Xenko.Engine.ScriptComponent.Cancel) method.

The following script performs actions that depend on events and triggers:

```
public class SampleAsyncScript : AsyncScript
{        
	public override async Task Execute() 
	{
		// The initialization code should come here, if necessary
		
		while (Game.IsRunning) // loop until the game ends (optional depending on the script)
		{
			await MyEvent;

			// Do some stuff
			
			await Script.NextFrame(); // wait for the next frame (optional depending on the script)
		}
	}
}
```

## Using public properties and fields

You can set public properties and fields from the script component properties in Game Studio. This means people on your team can configure each instance of a script attached to entities differently.

> [!Note] 
> Public properties or fields must be serializable to be used in Game Studio. 

The following script is an example of a script with a public property (`DelayTimeOut`):

```cs
public class SampleSyncScript : StartupScript
{
	// This public member will appear in Game Studio
	public float DelayTimeOut { get; set; }
}
```

Game Studio shows the field in the script component properties like this:

![Public property appears in the Property grid](media/scripts-in-xenko-change-value-public-property.png)

If you don't want Game Studio to show the field, you can: 

* declare your member internal or private, or 
* use the [DataMemberIgnore](xref:SiliconStudio.Core.DataMemberIgnoreAttribute) attribute like this:

```cs

	// This public property won't be available in Game Studio
	[DataMemberIgnore]
	public float DelayTimeOut { get; set; }
	
```

![Public property has been hidden with ```[DataMemberIgnore]```](media/scripts-in-xenko-public-property-with-datamemberignore.png)

## What's next? 

* [Create a script](create-a-script.md)