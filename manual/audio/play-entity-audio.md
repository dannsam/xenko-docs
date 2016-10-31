#Play Object-Specific Audio
Unlike [Background Audio](play-background-audio.md) that affects equally the whole Scene,
**Object-Specific Audio** depends on an **Entity**.
The parameters of such Audio (e.g. volume, pitch, etc.) change 
For this, you need two components:

1. `Audio Emitter` that will play the sounds
2. `Audio Receiver` that will be able to hear **Audio** at runtime.



##Audio Emitters
You can attach [AudioEmitter](xref="SiliconStudio.Xenko.Audio.AudioEmitter") _Component_ to any Entity.

> [!Note] You need at least one ``AudioListenerComponent`` in the Scene,
> otherwise sound from `AudioEmitters` will not be played.

Here's how to create an `AudioEmitter Component`:

**Step 1:** In **Scene View**, select an Entity you want to be an _Audio Emitter_.

![Select an Entity](media/audio-add-audiolistener-component-select-entity.png)

**Step 2:** In **Property Grid**, press _Add Component_.

**Step 3:** Select `AudioEmitter Component`.

![Add AudioEmitter Component](media/audio-add-audioemitter-component-select-entity.png)

**Step 4:** Press _Add New Sound_ and change its name if required.

![Add New Sound Entry](media/audio-play-audioemitter-component-add-new-entry.png)

**Step 5:** Drag and drop **Audio Asset** directly from **Asset View**.

![Drag and Drop Audio Asset](media/audio-play-drag-and-drop-audio-asset.gif)

Alternatively press _Pick an Asset Up_:

![Pick an Asset Up](media/audio-play-audioemitter-component-pick-an-asset.png)

Then choose the required **Audio Asset**.

![Select Audio Asset](media/audio-play-audioemitter-component-add-select-audio-asset.png)

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

##Audio Listeners
A listener is any **Entity** in a Scene with an `AudioListener` component.
Usually, you attach `AudioListener Component` to the user's camera view, but can use it with any other Entity.
You can have multiple `AudioListeners` in a **Scene**.

Here's how to create an `AudioListener Component`:

**Step 1:**  In **Scene View**, select an Entity you want to be an _Audio Listener_.

![Select an Entity](media/audio-add-audiolistener-component-select-entity.png)

**Step 2:** In **Property Grid**, press _Add Component_.

**Step 3:** Select `AudioListener Component`.

![Add AudioListener Component](media/audio-add-audiolistener-component.png)

> [!Warning] On iOS, only one `AudioListenerComponent` will work.
> You can still create multiple listeners but only one will be used.
> This issue will be addressed in future releases.

##Spatialized Audio
Spatialized sounds are produced by **Entities** with an `AudioEmitter Component`.
You can assign sound Assets to these _Components_, and then use **Scripts** to manage Audio at runtime.
You can have as many `AudioEmitters` in the **Scene**, as you need.

**Spatialized Audio** takes into account listener's position.
Emitter of the Spatialized Audio reads receiver's position, and than accurately simulates sounds around that position.
Therefore, **Spatialized Audio** requires at least one _Audio Listener_ and one _Sound Emitter_ in the **Scene**.

![Spatialized Audio](media/audio-index-spatialized-audio.png)

###Doppler Effect
_Doppler Effect_ describes sound waves produced by a mobile sound source.
Sound coming from a moving object has different frequency depending on the observer's position:

* Sound from _Approaching_ source has higher frequency.
* Sound from _Recending_ source has lower frequency.

![Doppler Effect](media/audio-index-play-audio-doppler-effect.png)

**Spatialized Audio** takes _Doppler Effect_ into account to create a even more natural listener's experience.

**TODO: Pic of game studio Entity with a AudioEmitterComponent and some sounds in it**


###This is because in the Scene you might have multiple
###listeners and so to play the sound internally the engine might create multiple `SoundInstance`.


##Code Samples
##Access Spatialized Audio from Code
Here' a code snippet that plays Audio by instantiating
[AudioEmitterSoundController](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController"):

```
AudioEmitterComponent audioEmitterComponent = Entity.Get<AudioEmitterComponent>();
AudioEmitterSoundController mySound1Controller = audioEmitterComponent["MySound1"];
AudioEmitterSoundController mySound2Controller = audioEmitterComponent["MySound2"];
```

[AudioEmitterSoundController](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController") 
works similarly to [SoundInstance](xref="SiliconStudio.Xenko.Audio.SoundInstance").
You can access sounds from the above example like this:

```
mySound2Controller.IsLooping = true;
mySound2Controller.Pitch = 2.0f;
mySound2Controller.Volume = 0.5f;
mySound2Controller.Play();
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

        // Make sure musicT tack is looped.
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
> [!Note] When you use [AudioEmitterSoundController.PlayAndForget](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.PlayAndForget"),
> [AudioEmitterSoundController.IsLooping](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController.IsLooping") has no effect.
> Such sounds will be played only once, without looping effect.


<div class="doc-relatedtopics">
* [Play Background Audio](play-background-audio.md)
* [Import and Setup Audio](import-setup.md)
* [Advanced Features](virtual-buttons.md)
</div>
