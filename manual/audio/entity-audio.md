#Object-Specific Audio
Unlike [Background Audio](background-audio.md) that affects the whole Scene,
**Object-Specific Audio** is attached to a particular **Entity**.
You can add _Audio Components_ to any Entity, including cameras, 3D models, sprites, and more.

> [!Note] Keep in mind, you can also control _Global Sound Settings_ of your game or application, see [Audio page](index.md).

**Object-specific Audio** does not have identical _Volume_ and _Pitch_ (_Frequency_) throughout the **Scene**.
These parameters vary as you move closer and further from the `Audio Emitter`. 
To hear _Object-Specific Audio_ at runtime, you need two elements:

1. `Audio Listener` that is able to hear **Audio**, if it's close enough to the `Emitter`.
2. `Audio Emitter` that plays the sounds.

##Audio Listeners
A _Listener_ is an **Entity** with an `AudioListener Component`.
Usually, you attach `AudioListener Component` to the user's camera view, but can use it with any other Entity, too.
There can be multiple `AudioListeners` in a **Scene**, particularly in multi-player games.

Here's how to add an `AudioListener Component` to an **Entity**:

**Step 1:** In **Scene View**, select an Entity you want to be an _Audio Listener_.

![Select an Entity](media/audio-add-audiolistener-component-select-entity.png)

**Step 2:** In **Property Grid**, press _Add Component_ and select `AudioListener Component`.

![Add AudioListener Component](media/audio-add-audiolistener-component.png)

You don't need to setup `AudioListeners` as they only receive the audio.
All sound settings, including _Volume_ and _Pitch_ (_Frequency_) and handled entirely via `AudioEmitters`.

> [!Warning] On iOS, you can create multiple objects with `AudioListener Component` in a Scene.
> Yet, only one will be used at runtime.
> This issue will be addressed in the future releases.

##Audio Emitters
An _Emitter_ is an **Entity** with an `AudioEmitter Component`.
There are two ways to access [AudioEmitters](xref="SiliconStudio.Xenko.Audio.AudioEmitter") in Xenko.
With both options, you need to add `AudioEmitter` and `Script` _Components_ to the same Entity.
 
> [!Note] You need at least one [AudioListenerComponent](xref="SiliconStudio.Xenko.Audio.AudioListener") in the Scene,
> otherwise you will not be able to hear the audio from [AudioEmitters](xref="SiliconStudio.Xenko.Audio.AudioEmitter") at runtime.

###Option I: AudioEmitter Component
####1: Add AudioEmitter Component
Here's how to add `AudioEmitter Component` to an **Entity**:

**Step 1:** In **Scene View**, select an Entity you want to be an _AudioEmitter_.

![Select an Entity](media/audio-add-audiolistener-component-select-entity.png)

**Step 2:** In **Property Grid**, press _Add Component_ and select `AudioEmitter Component`.

![Add AudioEmitter Component](media/audio-add-audioemitter-component-select-entity.png)

**Step 3:** Press _Add New Sound_ and change its name if required.

![Add New Sound Entry](media/audio-play-audioemitter-component-add-new-entry.png)

**Step 4:** Drag and drop **Audio Asset** directly from **Asset View**.

![Drag and Drop Audio Asset](media/audio-play-drag-and-drop-audio-asset.gif)

Alternatively press _Pick an Asset Up_:

![Pick an Asset Up](media/audio-play-audioemitter-component-pick-an-asset.png)

Then choose the required _Audio Asset_.

![Select Audio Asset](media/audio-play-audioemitter-component-add-select-audio-asset.png)

**Step 5:** Repeat **Step 3** and **Step 4** to add as many _Audio Assets_, as you require.

####2: Create Script
In **Visual Studio**, create a _Script_ and access _Audio Assets_ with the names you used in `AudioEmitter Component`.
For instance, in the example below you have two sounds (_MySound1_ and _MySound2_):

![List of Sounds in AudioEmitter Component](media/audio-emitters-dictionary-of-sounds-audio-emitter-component.png)

So now you need to instantiate [AudioEmitterSoundController](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController")
for each sound you want to use in this script.
In the above example you would access sounds as follows:

```cs
AudioEmitterComponent audioEmitterComponent = Entity.Get<AudioEmitterComponent>();
AudioEmitterSoundController mySound1Controller = audioEmitterComponent["MySound1"];
AudioEmitterSoundController mySound2Controller = audioEmitterComponent["MySound2"];
```

####3: Setup Audio
As soon as you add the required _Audio Assets_ to `AudioEmitter Component`, you can setup audio in a _Script_.
There are various _Properties_ and _Methods_ of [AudioEmitterSoundController](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController")
that you can use:

| Property/Method  | Description |
|-------    |-------|
| [IsLooping](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.IsLooping") | Gets or sets looping of the audio: when the system reached the end of the track, audio starts over. |
| [Pitch](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.Pitch")     | Gets or sets sound pitch (frequency). Use with caution for spatialized audio. |
| [PlayState](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.PlayState")	| Gets the current state of the [SoundInstance](xref="SiliconStudio.Xenko.Audio.SoundInstance"). |
| [Volume](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.Volume")	| Volume of the audio. |
| [Pause()](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.Pause")	| Pauses audio. |
| [Play()](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.Play")      | Plays audio. |
| [PlayAndForget()](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.PlayAndForget")| Plays audio once, and automatically clears memory when the audio is finished. |
| [Stop()](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.Stop")	| Stops audio. |

For more details, see [Xenko API documentation](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController").

You can adjust sounds from the above example like this:

```
mySound2Controller.IsLooping = true;
mySound2Controller.Pitch = 2.0f;
mySound2Controller.Volume = 0.5f;
mySound2Controller.Play();
```

> [!Note] When you use [PlayAndForget](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.PlayAndForget"),
> [IsLooping](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.IsLooping") has no effect.
> Such sounds will be played only once, without looping effect.

####4: Add Script Component
Back in **Game Studio**, add `Script Component` to an **Entity**:

**Step 1:** In **Scene View**, select an Entity you want to add a _Script Component_ to.

![Select an Entity](media/audio-add-audiolistener-component-select-entity.png)

**Step 2:** In **Property Grid**, press _Add Component_.

![Press Add Component](media/audio-emitters-add-script-component.png)
 
**Step 3:** Select the _Script_ you want to add. For instance, an `EmitterScr` script:

![Add Script Component to Entity](media/audio-emitters-add-script-component-to-entity.png)

###Option II: Public Variables
####1: Add Public Variables

**Step 1**: Create a Script in **Visual Studio**.

**Step 2**: Instantiate [AudioEmitterSoundController](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController"):

```cs
AudioEmitterComponent audioEmitterComponent = Entity.Get<AudioEmitterComponent>();
```

**Step 3**: Add **Public Variables** for each sound you want to use, for instance:

```cs
private AudioEmitterSoundController musicController;
public override void Start()
{
    // Get AudioEmmiterComponent from entity with AudioEmiter Component.
    aemc = Entity.Get<AudioEmitterComponent>();

    // Make sure music tack is looping.
    musicController = aemc.GetSoundController(musicTrack);
    musicController.IsLooping = true;
}
```

####2: Setup Audio
As soon as you add **Public Variables**, you can setup audio with the
_Properties_ and _Methods_ described in [Option I: AudioEmitter Component](#3-setup-audio).

####3: Add Script Component
Back in **Game Studio**, add `Script Component` to an **Entity**:

**Step 1:** In **Scene View**, select an Entity you want to add _Script Component_ to.

![Select an Entity](media/audio-add-audiolistener-component-select-entity.png)

**Step 2:** In **Property Grid**, press _Add Component_.
 
![Press Add Component](media/audio-emitters-add-script-component.png)

**Step 3:** Select the _Script_ you want to add, for instance `SoundScript`:

![Add Script Component to Entity](media/audio-emitters-add-script-component-to-entity-2.png)

**Step 4:** The `Script Component` lists all **Public Variables** you used in the _Script_.
Tie these variables to the required _Audio Assets_:
drag and drop **Audio Asset** directly from **Asset View**.

![Drag and Drop Audio Asset](media/entity-audio-drag-and-drop-audio-asset-to-script-component.gif)

Alternatively press _Pick an Asset Up_:

![Pick an Asset Up](media/audio-play-script-component-pick-an-asset.png)

Then choose the required _Audio Asset_.

![Select Audio Asset](media/audio-play-audioemitter-component-add-select-audio-asset.png)

**Step 5:** Repeat **Step 3** and **Step 4** to tie _Audio Asset_ to every **Public Variable** you used in the _Script_.

####4: Add AudioEmitter Component

Here's how to add `AudioEmitter Component` to an **Entity**:

**Step 1:** In **Scene View**, select an Entity you want to be an _Audio Emitter_.

![Select an Entity](media/audio-add-audiolistener-component-select-entity.png)

**Step 2:** In **Property Grid**, press _Add Component_ and select `AudioEmitter Component`.

![Add AudioEmitter Component](media/audio-add-audioemitter-component-select-entity.png)

> [!Note] You've already added _Sounds_ as **Public Variables** in the _Script_.
> Therefore, you don't need to attach _Audio Assets_ to this `Audio Emitter Component`.

##Code Samples
The following code sample shows how to use both **Options** when handling _Audio_ at runtime:

```cs
public class EmitterScr : SyncScript
{
        
    // Music track is loaded from XenkoStudio as a public variable.
    // Sounds are loaded into AudioEmmiter Component and given proper names.
    public Sound musicTrack;

    private AudioEmitterSoundController musicController;
    private AudioEmitterComponent aemc;
    public bool isMusicOn;

    public override void Start()
    {
        // Get AudioEmmiterComponent from an entity with AudioEmiter Component.
        aemc = Entity.Get<AudioEmitterComponent>();

        // Make sure music tack is looped.
        musicController = aemc.GetSoundController(musicTrack);
        musicController.IsLooping = true;
    }

    public override void Update()
    {
        if (Input.IsKeyPressed(Keys.F1))
        {
            // Play sound each time user presses F1 key.
            aemc.GetSoundController(aemc.Sounds["HelpPopup"]).Play();
        }

        if (Input.IsMouseButtonPressed(MouseButton.Left))
        {
            // Play sound effect each time user presses mouse button.
            // Sound effects may overlay and will be cleared from memory once finished.
            aemc.GetSoundController(aemc.Sounds["SwordSwing"]).PlayAndForget();
        }

        // If music is not played, but should be played, start the music.
        if (isMusicOn & musicController.PlayState != SoundPlayState.Playing)
        {
            musicController.Play();
        }

        // If music should not be played, stop the music.
        else if (!isMusicOn)
        {
            musicController.Stop();
        }
    }
}
```

<div class="doc-relatedtopics">
* [Spatialized Audio](spatialized-audio.md)
* [Background Audio](background-audio.md)
* [Import and Setup](import-setup.md)
* [Advanced Features](advanced-features.md)
</div>
