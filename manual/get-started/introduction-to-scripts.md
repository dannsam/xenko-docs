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

## In this section

* [Scripts in Xenko](scripts-in-xenko.md) - Basic concepts about scripting in Xenko
* [Create a script](create-a-script.md) - How to create a script in both Visual Studio and Game Studio
* [Use a script](use-scripts.md) - How to attach and test scripts

## What's next?

* [Scripts in Xenko](scripts-in-xenko.md)