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
Should have explanation about the API somewhere even if very simple. (pause/play/stop/pitch/pan/etc) in proper categories (control playback, etc.)

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

Remarks:
call Play (resp. pause/stop) while it is playing (paused/stopped) as no effect and is ignored.