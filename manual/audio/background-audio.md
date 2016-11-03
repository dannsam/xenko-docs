#Background Audio

Sometimes you need play **Background** (**Ambient**) **Audio** that equally affects the whole **Scene**
and not just [individual Entities](entity-audio.md).
This feature is commonly reserved for _Menu Music_, _Game Music_, and other _Background Sounds_.

> [!Note] Keep in mind, you can also control _Global Sound Settings_ of your game or application, see [Audio page](index.md).

**Background Audio** does not require _Audio Listeners_ or _Emitters_,
as it has the same _Volume_, _Pitch_ (_Frequency_), and other _Sound Parameters_ throughout the **Scene**.
To play **Background Audio** at runtime, you need to instantiate it and adjust its settings entirely in **Visual Studio**.

> [!Note] Make sure you reference _Audio Asset_ in a **Script**
> or mark it as a root Asset in **Asset View**.

##Adjust Settings

Access **Background Audio** with [SoundInstance](xref="SiliconStudio.Xenko.Audio.SoundInstance") class.
It has multiple _Properties_ and _Methods_ that control _Audio Settings_ at runtime:

| Property  | Description |
|-------    |-------|
| [IsLooping](xref="SiliconStudio.Xenko.Audio.SoundInstance.IsLooping") | Gets or sets looping of the audio: sound starts over, when it reaches the end of the track. |
| [Pan](xref="SiliconStudio.Xenko.Audio.SoundInstance.Pan")       | Sets sound balance between left and right speaker. By default, each speaker has 0.5 value. |
| [Pitch](xref="SiliconStudio.Xenko.Audio.SoundInstance.Pitch")     | Gets or sets sound pitch (frequency). |
| [PlayState](xref="SiliconStudio.Xenko.Audio.SoundInstance.PlayState")	| Gets the state of the [SoundInstance](xref="SiliconStudio.Xenko.Audio.SoundInstance"). |
| [Position](xref="SiliconStudio.Xenko.Audio.SoundInstance.Position")	| Gets the currently played point of the audio track. |
| [Volume](xref="SiliconStudio.Xenko.Audio.SoundInstance.Volume")	| Volume settings of the sound. |

For more details, see [Xenko API documentation](xref="SiliconStudio.Xenko.Audio.SoundInstance").

##Stream from Disk
More often than not, you want to stream large audio files from the disk to save memory.
Here's how to handle _Streams_ in Xenko:

**Step 1:** In **Asset View**, click on the desired _Audio Asset_ to select it.

**Step 2:** In **Property Grid**, tick _Stream from Disk_.

![Audio Asset Properties](media/audio-asset-properties-property-grid.png)

**Step 3:** In **Visual Studio**, you can setup track to start playing once the audio engine buffers enough audio samples.
You can do so with the following `Task`:

```cs
SoundInstance music = musicSound.CreateInstance();
await music.ReadyToPlay();
music.Play();
```

> [!Note] If the track is playing, Xenko ignores all additional calls to [SoundInstance.Play](xref="SiliconStudio.Xenko.Audio.SoundInstance.Play").
> Works the same for [SoundInstance.Pause](xref="SiliconStudio.Xenko.Audio.SoundInstance.Pause") and [SoundInstance.Stop](xref="SiliconStudio.Xenko.Audio.SoundInstance.Stop").

You can also **Play Custom Streams** at runtime and set **Custom Loop Points**. For more information, see [Advanced Features](advanced-features.md).

##Code Sample
Here's a code sample that shows how to instantiate _Background Audio_,
play it continuously at runtime, and handle other _Audio Settings_:

```
public override async Task Execute()
{
    // Load music.
    Sound musicSound = Content.Load<Sound>("Sounds/combat_music_xenko");
    
    // Create Sound Instance.
    SoundInstance music = SoundMusic.CreateInstance();

    if (!IsLiveReloading)
    {
      
        // Start playing ambient music.
        music.IsLooping = true;

        // Play the music.
        music.Play();

        // Set music volume.
        music.Volume = 0.25f;
    }
}
```

<div class="doc-relatedtopics">
* [Object-Specific Audio](entity-audio.md)
* [Import and Setup](import-setup.md)
* [Spatialized Audio](spatialized-audio.md)
* [Advanced Features](advanced-features.md)
</div>
