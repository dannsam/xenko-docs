# Import and Setup Audio

You can import audio file of any format.
Game Engine will automatically compress Audio with a top-tier open source [Opus/Celt](https://en.wikipedia.org/wiki/CELT) codec.
This technology greatly reduces CPU and GPU usage without compromising sound quality.

This is how you can import audio files in Game Studio:

**Step 1:** In **Asset View**, press ![Add Asset button](media/index-audio-add-new-asset-button.png).

**Step 2:** Press ![Import Directly from File](media/index-audio-import-audio-directly-from-file.png).

**Step 3:** Show root path to you Audio file.

**Step 4:** Select a desired file and press _Open_. Alternatively, drag and drop file directly to **Asset View**.

**Step 5:** Choose Asset type:

* _Sound Effect_: choose for smaller files that you want to play directly from memory.
* _Spatialized Sound_: choose for smaller spatialized sounds that you want to play directly from memory.
* _Music_: choose for larger files that you want to stream from disk to save memory.

![Choose Asset type](media/import-audio-choose-asset-type.png)

As soon as you import audio file, go to **Asset View** and click on a newly created **Audio Asset**.
Then, go to **Property Grid** to adjust Audio settings.

##Setup Audio Properties
In **Property Grid** you can setup the following _Properties_:

* **Source**: here you can change a source file of your audio.
* **Sample rate**: choose how many samples per second a file should have. Typical sample rates are 44.1 kHz (44,100 Hz), 48 kHz, 88.2 kHz, and 96 kHz.
* **Compression ratio**: bigger compression ratio optimizes memory usage, but decreases audio quality. The scale is from 1 to 40
(**1**: no compression, **40**: heavy compression.)
* **Stream from disk**: tick if you want the audio to be streamed from disk.
* **Spatialized**: tick if the audio file is a spatialized sound. For more information on **Spatialization**, see [Audio page](index.md).

> [Note!] Xenko always converts 3D spatialized sounds to Mono (Single channel) sounds.

##Test Audio at Runtime
To test in-game audio, simply build your game project and start the game from Game Studio (**F5**).


```cs
public override async Task Execute()
   {
    music = SoundMusic.CreateInstance();
    effect = SoundEffect.CreateInstance();
    if (!IsLiveReloading)
       {
        // start ambient music
        music.IsLooped = true;
        music.Play();

        fontColor = Color.Transparent;
        originalPositionX = RightWave.Transform.Position.X;
       }
```

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

**TODO: Straight forward, need to provide screenshots of the Game Studio, 
- Import workflow (quick)
- settings of the files from the property grid + preview to listen to result
- show how to setup asset to be consume audio files both by being referenced in 
	- a Script or 
	- used in a `AudioEmitterComponent`**

The most common scenario is to import sounds from the Game Studio and then reference them in Scripts or consume them directly
from an `AudioEmitterComponent`,
in this case since it's meant to be used for 3D spatialization you also will need a `AudioListenerComponent`
(one is included by default when create a new game).

> [!Warning] On iOS, only one `AudioListenerComponent` will work.
> You can still create multiple listeners but only one will be used.
> This issue will be addressed in future releases.
