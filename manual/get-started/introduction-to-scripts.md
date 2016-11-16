# Introduction to scripts

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

Scripting is another fundamental part of game creation. 

Scripting allows you to handle game events, respond to user inputs and control the movement and the behavior of your entities.
In short, it is what makes your static game interactive by adding a **gameplay** to it.

Below is an example of script in Xenko.

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

_Sample script_

## Overview

All the **scripting in Xenko** is done in **C#**.

There are two main types of script in Xenko: **Asynchronous** and **Synchronous** Scripts.

The **public fields** of your scripts are displayed and can be setup from the Game Studio **property grid**.

A script can be created both from Visual Studio and the Game Studio.

You can **use a script** by instantiating and **attaching it to an entity** of your scene.
This can be done either from the scene editor or from the code.

To debug a script use Visual Studio and simply put a break point in the desired code section.

## The basics

This section will explain the following subjects:

* [Scripting in Xenko](scripts-in-xenko.md) - Basic concepts about scripting in Xenko.
* [Create a script](create-a-script.md) - How to create a script in both Visual Studio and Game Studio
* [Use a script](use-a-script.md) - How to attach and test scripts

<!--
For more advanced topics, please refer to [Scripting](/manual/game-studio/scripting.md) in the Game Studio documentation
-->

Let's continue to learn more about basic scripting concepts, see [Scripting in Xenko](scripts-in-xenko.md).
