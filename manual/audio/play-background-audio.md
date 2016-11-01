#Play Background Audio

If you don't need to attach **Audio** to a particular **Entity**,
you can have sounds that affect the whole **Scene** (**Background Audio**).
This is useful for _Menu Music_, _Game Music_, and other _Background Sounds_.

**Background Audio** does not require Audio _Listeners_ or _Emitters_ .
It has the same _Volume_, _Pitch_, and other _Sound Parameters_ throughout the **Scene**.
You just need to instantiate background _Audio_ and adjust its settings in **Visual Studio**.

> [!Note] Make sure you reference _Audio Asset_ in a **Script**
> or mark it as a root Asset in **Asset View**.

[SoundInstance](xref="SiliconStudio.Xenko.Audio.SoundInstance") has multiple properties and methods that control **Audio** at runtime.

| Property  | Description |
|-------    |-------|
| [IsLooping](xref="SiliconStudio.Xenko.Audio.SoundInstance.IsLooping") | Gets or sets looping of the audio: sound starts over, when it reaches the end of the track. |
| [Pan](xref="SiliconStudio.Xenko.Audio.SoundInstance.Pan")       | Sets sound balance between left and right speaker. By default, each speaker has 0.5 value. |
| [Pitch](xref="SiliconStudio.Xenko.Audio.SoundInstance.Pitch")     | Gets or sets sound pitch. |
| [PlayState](xref="SiliconStudio.Xenko.Audio.SoundInstance.PlayState")	| Gets the state of the [SoundInstance](xref="SiliconStudio.Xenko.Audio.SoundInstance"). |
| [Position](xref="SiliconStudio.Xenko.Audio.SoundInstance.Position")	| Gets the point in time of this playing instance. |
| [Volume](xref="SiliconStudio.Xenko.Audio.SoundInstance.Volume")	| Volume settings of the sound. |

##Code Samples
Here's a snippet that shows how to instantiate _Background Audio_, play it continuously at runtime, and adjust some other settings:

```
public override async Task Execute()
{
    // Load music.
    Sound musicSound = Content.Load<Sound>("Sounds/combat_music_xenko");
    
    Create Sound Instance.
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

## Play Streams at Runtime
Sometimes when playing sounds from the disk you might want to actually know
when the internal audio engine has buffered enough audio samples to start playing.
To do that you can use a `Task`:

```
SoundInstance music = musicSound.CreateInstance();
await music.ReadyToPlay();
music.Play();
```

Remarks:
call Play (resp. pause/stop) while it is playing (paused/stopped) as no effect and is ignored.
