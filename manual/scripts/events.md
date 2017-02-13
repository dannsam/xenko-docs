# Events

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>

**Events** facilitate communication between scripts. They work one-way, broadcast from **broadcasters** to **receivers**.

Imagine your game has a "Game Over" state that occurs when the player dies. To handle this, you can create a "Game Over" event, which is broadcast to all scripts with receivers listening for the event. When the event is broadcast, the receivers run appropriate scripts to handle the Game Over event (eg reset enemies, replace level objects, start a new timer, etc).

>[!Note]
>Events are handled entirely in scripts. You can't configure them in Game Studio.

## Create and broadcast an event

(xref:SiliconStudio.Xenko.Engine.SkyboxComponent)

Broadcasters in the Xenko API are of type [EventKey](xref:SiliconStudio.Xenko.Engine.Events.EventKey). They use the method [Broadcast](xref:SiliconStudio.Xenko.Engine.Events.EventKey#SiliconStudio_Xenko_Engine_Events_EventKey_Broadcast) to broadcast events to receivers.

For example, this code creates a "Game Over" event:

```
public static class GlobalEvents
{
    public static EventKey GameOverEventKey = new EventKey("Global", "Game Over");

    public static void SendGameOverEvent()
    {
        GameOverEventKey.Broadcast();
    }
}
```

Example script:

## Create a receiver

Receivers in the Xenko API are of type [EventReceiver](xref:SiliconStudio.Xenko.Engine.Events.EventReceiver).

To receive the "Game Over" event described above, use:

```
var gameOverListener = new EventReceiver(GlobalEvents.GameOverEventKey);
var gameIsOver = gameOverListener.TryReceive();

//Or in Async
var gameIsOver = await gameOverListener.ReceiveAsync();
```

For example:

<actual script>

## See also

* [Create a script](create-a-script.md)
* [Types of script](types-of-script.md)
* [Public properties and fields](public-properties-and-fields.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Add a script](add-a-script.md)
* [Create a script](create-a-script.md)
* [Debugging](debugging.md)