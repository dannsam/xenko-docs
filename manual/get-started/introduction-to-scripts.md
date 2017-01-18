# Introduction to scripts

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

Scripts handle game events, respond to user inputs and control the behavior of your entities. In short, scripts make games interactive by adding gameplay.


```cs
public class BasicAsyncScript : AsyncScript
{         
	public override async Task Execute() 
	{
		while(Game.IsRunning)
		{
			// Do some stuff every frame
			
			await Script.NextFrame();
		}
	}
 }
```

All the scripting in Xenko is done in **C#**.

There are two main types of script in Xenko: **asynchronous** and **synchronous** scripts.

The **public fields** of your scripts are displayed and can be set up from the Game Studio **property grid**.

You can create scripts in Visual Studio or Game Studio.

You can **use a script** by instantiating and **attaching it to an entity** of your scene.
This can be done either from the scene editor or from the code.

To debug a script use Visual Studio and simply put a break point in the desired code section.

## The basics

* [Scripting in Xenko](scripts-in-xenko.md) - Basic concepts about scripting in Xenko.
* [Create a script](create-a-script.md) - How to create a script in both Visual Studio and Game Studio
* [Use a script](use-scripts.md) - How to attach and test scripts

<!--
For more advanced topics, please refer to [Scripting](/manual/game-studio/scripting.md) in the Game Studio documentation
-->

## What's next?

* [Scripts in Xenko](scripts-in-xenko.md)