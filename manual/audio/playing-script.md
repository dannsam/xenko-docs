# Playing sounds from scripts

First of all the Sound must be referenced in a Script or marked as root asset.

For example if you marked your music Sound asset as root, you could load it at run time like this:
```
Sound musicSound = Content.Load<Sound>("Sounds/combat_music_xenko");
SoundInstance music = musicSound.CreateInstance();
music.IsLooping = true;
music.Volume = 0.25f;
music.Play();
```

`Sound` are to be consumed in a `SoundInstance`, `SoundInstance` has many properties and methods to allow you to make your sound behave in many ways.
In the example above we wanted just to play continously a background music.

In a script you can declare a public Sound field variable, this will be detected by the Game Studio and you will be able to drag or anyway assign a Sound asset to the Script.

```
namespace MyNameSpace
{
    public class MyScript : AsyncScript
    {
        // Declared public member fields and properties will show in the game studio
        public Sound MySound; //this will be populated accordingly to what you do in the Game Studio

        public override async Task Execute()
        {
        	SoundInstance mySoundInstance = MySound.CreateInstance();
            mySoundInstance.Play();

            while(Game.IsRunning)
            {
                // Do stuff every new frame
                await Script.NextFrame();
            }
        }
    }
}
```

### Playing streams at the right time:
Sometimes when playing sounds from the disk you might want to actually know when the internal audio engine has buffered enough audio samples to start playing.
To do that you can use a `Task`.
```
SoundInstance music = musicSound.CreateInstance();
await music.ReadyToPlay();
music.Play();
```

### Playing custom audio data:
The Xenko audio layer allows you to play your own custom audio streams. The streaming mechanism is completely up to you.
All you have to do is creating a sub class of `DynamicSoundSource` , you could look at `CompressedSoundSource` source code to understand how to implement that.
To consume a custom `DynamicSoundSource` at run time you would want to do something like this:
```
int sampleRate = 48000;
bool mono = false;
bool spatialized = false;
DynamicSoundSource myCustomSource = new MyCustomSource(...);
AudioListener listener = Audio.AudioEngine.DefaultListener;
AudioEngine audioEngine = Audio.AudioEngine;
SoundInstance myCustomInstance = new SoundInstance(audioEngine, listener, myCustomSource, sampleRate, mono, spatialized);
await myCustomInstance.ReadyToPlay();
myCustomInstance.Play();
```
