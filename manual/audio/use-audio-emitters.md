#Use Audio Emitters
There are two ways to access [AudioEmitters](xref="SiliconStudio.Xenko.Audio.AudioEmitter") in Xenko.
With both options, you need to add `AudioEmitter` and `Script` _Components_ to a single Entity.
 
Here's how these options differ from one another:

1. In **Game Studio**, attach _Audio Assets_ to the `AudioEmitter` Component.
Back in **Visual Studio**, you can access these _Assets_ in code using their names.
2. In **Visual Studio**, create variables for every _Sound_ you want to use in a _Script_.
Back in **Game Studio**, associate variables with the corresponding _Audio Assets_.

> [!Note] You need at least one ``AudioListenerComponent`` in the Scene,
> otherwise you will not be able to hear the audio from `AudioEmitters` at runtime.

##Option 1: AudioEmitter Component
### 1: Add Audio Emitter Component
Here's how to add `AudioEmitter Component` to an **Entity**:

**Step 1:** In **Scene View**, select an Entity you want to be an _Audio Emitter_.

![Select an Entity](media/audio-add-audiolistener-component-select-entity.png)

**Step 2:** In **Property Grid**, press _Add Component_ and select `AudioEmitter Component`.

![Add AudioEmitter Component](media/audio-add-audioemitter-component-select-entity.png)

**Step 3:** Press _Add New Sound_ and change its name if required.

![Add New Sound Entry](media/audio-play-audioemitter-component-add-new-entry.png)

**Step 4:** Drag and drop **Audio Asset** directly from **Asset View**.

![Drag and Drop Audio Asset](media/audio-play-drag-and-drop-audio-asset.gif)

Alternatively press _Pick an Asset Up_:

![Pick an Asset Up](media/audio-play-audioemitter-component-pick-an-asset.png)

Then choose the required **Audio Asset**.

![Select Audio Asset](media/audio-play-audioemitter-component-add-select-audio-asset.png)

**Step 5:** Repeat **Step 3** and **Step 4** to add as many _Audio Assets_, as you require.

### 2: Create Script
In **Visual Studio**, create a _Script_ and access _Audio Assets_ with the names you used in `AudioEmitter Component`.
For instance, in the example below you have two sounds: _MySound1_ and _MySound2_:

![List of Sounds in AudioEmitter Component](media/audio-emitters-dictionary-of-sounds-audio-emitter-component.png)

Instantiate [AudioEmitterSoundController](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController")
for each sound you want to use in this script.
In the above example you would access sounds as follows:

```
AudioEmitterComponent audioEmitterComponent = Entity.Get<AudioEmitterComponent>();
AudioEmitterSoundController mySound1Controller = audioEmitterComponent["MySound1"];
AudioEmitterSoundController mySound2Controller = audioEmitterComponent["MySound2"];
```

### 3: Setup Audio
As soon as you add the required _Audio Assets_ to `AudioEmitter Component`, you can setup audio in a script.
There are various _Properties_ and _Methods_ that you can use:

| Property/Method  | Description |
|-------    |-------|
| [IsLooping](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.IsLooping") | Gets or sets looping of the audio: when track's end is reaches, audio starts over. |
| [Pitch](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.Pitch")     | Gets or sets sound pitch. Use with caution for spatialized audio. |
| [PlayState](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.PlayState")	| Gets the state of the [SoundInstance](xref="SiliconStudio.Xenko.Audio.SoundInstance"). |
| [Volume](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.Volume")	| Volume settings of the sound. |
| [Pause()](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.Pause")	| Pause Audio. |
| [Play()](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.Play")      | Play audio. |
| [PlayAndForget()](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.PlayAndForget")| Plays audio once, and automatically clears memory when the audio is finished. |
| [Stop()](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.Stop")	| Stop Audio. |

You can adjust sounds from the above example like this:

```
mySound2Controller.IsLooping = true;
mySound2Controller.Pitch = 2.0f;
mySound2Controller.Volume = 0.5f;
mySound2Controller.Play();
```

> [!Note] When you use [AudioEmitterSoundController.PlayAndForget](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.PlayAndForget"),
> [AudioEmitterSoundController.IsLooping](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.IsLooping") has no effect.
> Such sounds will be played only once, without looping effect.

### 4: Add Script Component
Back in **Game Studio**, add `Script Component` to an **Entity**:

**Step 1:** In **Scene View**, select an Entity you want to add a _Script Component_ to.

![Select an Entity](media/audio-add-audiolistener-component-select-entity.png)

**Step 2:** In **Property Grid**, press _Add Component_.

![Press Add Component](media/audio-emitters-add-script-component.png)
 
**Step 3:** Select the _Script_ you want to add, in this example `EmitterScr`:

![Add Script Component to Entity](media/audio-emitters-add-script-component-to-entity.png)

##Option 2: Public Variables in Script
### 1: Create Script and Add Public Variables
In **Visual Studio**:

**Step 1**: Create a Script.

**Step 2**: Instantiate `AudioEmitterComponent`:

```
AudioEmitterComponent audioEmitterComponent = Entity.Get<AudioEmitterComponent>();
```

**Step 3**: Add public variables for each sound you want to use:

```cs
// Music track is loaded from XenkoStudio as public variable.
private AudioEmitterSoundController musicController;
public override void Start()
{
    // Get AudioEmmiterComponent from entity with AudioEmiter Component.
    aemc = Entity.Get<AudioEmitterComponent>();

    // Make sure music tack is looped.
    musicController = aemc.GetSoundController(musicTrack);
    musicController.IsLooping = true;
}
```

### 2: Setup Audio
As soon as you add public variables, you can setup audio in the script.
You can use the _Properties_ and _Methods_ described [above](###3:-setup-audio).

### 3: Add Script Component to Entity
Back in **Game Studio**, add `Script Component` to an **Entity**:

**Step 1:** In **Scene View**, select an Entity you want to add _Script Component_ to.

![Select an Entity](media/audio-add-audiolistener-component-select-entity.png)

**Step 2:** In **Property Grid**, press _Add Component_.
 
![Press Add Component](media/audio-emitters-add-script-component.png)

**Step 3:** Select the _Script_ you want to add, in this example `SoundScript`:

![Add Script Component to Entity](media/audio-emitters-add-script-component-to-entity-2.png)

**Step 4:** 

### 4: Add Audio Emitter Component to Entity

Here's how to add `AudioEmitter Component` to an **Entity**:
**Step 1:** In **Scene View**, select an Entity you want to be an _Audio Emitter_.

![Select an Entity](media/audio-add-audiolistener-component-select-entity.png)

**Step 2:** In **Property Grid**, press _Add Component_.

**Step 3:** Select `AudioEmitter Component`.

![Add AudioEmitter Component](media/audio-add-audioemitter-component-select-entity.png)

> [!Note] In this case You've already added you sounds as public variables in the _Script_.
> Therefore, you don't need to attach _Sound Assets_ to this `Audio Emitter Component`.
 




access Audio files with the names you used in `AudioEmitter Component`.
For instance, in the example below you have two sounds: _MySound1_ and _MySound2_:


##Code Samples
```cs
public override void Update()
{
    if (Input.IsKeyPressed(Keys.F1))
    {
        // Play sound each time user presses F1 key.
        aemc.GetSoundController(aemc.Sounds["MySound1"]).Play();
    }

    if (Input.IsMouseButtonPressed(MouseButton.Left))
    {
        // Play sound effect each time user presses mouse button.
        // Sound effects may overlay and will be cleared from memory once finished.
        aemc.GetSoundController(aemc.Sounds["MySound2"]).PlayAndForget();
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
```


###This is because in the Scene you might have multiple
###listeners and so to play the sound internally the engine might create multiple `SoundInstance`.


##Code Samples
##Access Spatialized Audio from Code




Here' a code snippet that plays Audio by instantiating
[AudioEmitterSoundController](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController"):

```

AudioEmitterSoundController mySound1Controller = audioEmitterComponent["MySound1"];
AudioEmitterSoundController mySound2Controller = audioEmitterComponent["MySound2"];
```

Here's a snippet that shows how you can setup such audio:

```cs
public override void Start()
   {
    AudioEmitter ae = new AudioEmitter();
    AudioEmitterComponent aemc = Entity.Get<AudioEmitterComponent>();
    aemc.GetSoundController(aemc.Sounds["Audio"]).PlayAndForget();
    aemc.GetSoundController(sound).PlayAndForget();
    aemc.Sounds[""].CreateInstance().Apply3D(ae);
   }
```




public class EmitterScr : SyncScript
{
        
    // Music track is loaded from XenkoStudio as public variable.
    // Sounds are loaded into AudioEmmiter Component and given proper names.
    public Sound musicTrack;

    private AudioEmitterSoundController musicController;
    private AudioEmitterComponent aemc;
    public bool isMusicOn;

    public override void Start()
    {
        // Get AudioEmmiterComponent from entity with AudioEmiter Component.
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




With [AudioEmitterSoundController](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController") you can use _Play and Forget_ functionality:

###This is very useful in the case of for example, bullets, one hit and forget sounds, etc.
###With play and forget you don't have to care about stopping the sound
###and internally the engine will allocate and clean up resources transparently.

```
mySound2Controller.PlayAndForget();
```



<div class="doc-relatedtopics">
* [Play Background Audio](play-background-audio.md)
* [Import and Setup Audio](import-setup.md)
* [Advanced Features](virtual-buttons.md)
</div>
