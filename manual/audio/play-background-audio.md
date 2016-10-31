#Play Background Audio

If you don't need to attach **Audio** to a particular **Entity**,
you can have sounds that affect the whole **Scene** (**Background Audio**).
This is useful for _Menu Music_, _Game Music_, and other _Background Audio_.

To have _Background Audio_, instantiate _Music_ or _Sound Effect_, and then adjust its settings in **Visual Studio**.
Here's a snippet that shows how you can instantiate _Background Audio_:

```cs
music = SoundMusic.CreateInstance();
effect = SoundEffect.CreateInstance();
if (!IsLiveReloading)
```

To access a **Sound** from code, make sure you reference it in a **Script** or mark it as a root Asset in **Asset View**.
Here's a snippet that shows how to instantiate **Background Audio** and play it continuously at runtime:

```
Sound musicSound = Content.Load<Sound>("Sounds/combat_music_xenko");
SoundInstance music = musicSound.CreateInstance();
music.IsLooping = true;
music.Volume = 0.25f;
music.Play();
```

	- a Script or 
	- used in a `AudioEmitterComponent`**

###Should have explanation about the API somewhere even if very simple.
###(pause/play/stop/pitch/pan/etc) in proper categories (control playback, etc.) 

[SoundInstance](xref="SiliconStudio.Xenko.Audio.SoundInstance") has multiple properties and methods that control **Audio** at runtime.


In a script you can declare a public Sound field variable,
this will be detected by the Game Studio and you will be able to drag or anyway assign a Sound asset to the Script.

```
public override async Task Execute()
{
    music = SoundMusic.CreateInstance();
    effect = SoundEffect.CreateInstance();

    if (!IsLiveReloading)
    {
        // Start playing ambient music.
        music.IsLooping = true;
        music.Play();

        // Set volume and pitch for effect.
        effect.Volume = 0.5f;
        effect.Pitch = 1f;
    }

    while (Game.IsRunning)
    {
        // On each click and touch on the screen.
        if (Input.PointerEvents.Any(item => item.State == PointerState.Down))
        {
            // play sound effect.
            effect.Stop();
            effect.Play();
        }

        // Wait for next frame.
        await Script.NextFrame();
    }
}
```



## Play Streams at Runtime
Sometimes when playing sounds from the disk you might want to actually know
when the internal audio engine has buffered enough audio samples to start playing.
To do that you can use a `Task`.
```
SoundInstance music = musicSound.CreateInstance();
await music.ReadyToPlay();
music.Play();
```

Remarks:
call Play (resp. pause/stop) while it is playing (paused/stopped) as no effect and is ignored.
