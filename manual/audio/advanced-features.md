

## Set special loop points
Sounds in Xenko can be played in different ranges, you could even load a single `Sound` and play different parts of it in multiple `SoundInstance` objects.

To achive this you need different information from different places.
For example you might need the total length of the `Sound` and that is achived by reading the `Sound.TotalLength` property.

To set the actual range that is done by `SoundInstance.SetRange(PlayRange range)`.
The `PlayRange` structure holds the timing information you want to achive, specifically the starting point and the length of the sub-sample you want to play from the `Sound`.

[Should have a schema explaining how to make nice looping effects]
|---beginning-play-once -------|loop-point-start-------------looping-part----------------loop-point-end|---------------------|end-of-track.

For example:
```cs
var length = mySound.TotalLength; //assume the sound is 5 seconds or so.
var begin = TimeSpan.FromSeconds(2);
var duration = TimeSpan.FromSeconds(2);
mySoundInstance.SetRange(new PlayRange(begin, duration));
```

If the `SoundInstance.IsLooping` property is true this range becomes effectively loop points.

Also if you ever need to know the position in time of a playing sound you could use the `SoundInstance.Position` property which returns a `TimeSpan` with the actual position.


## Playing custom audio data:
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

## Use a not default audio device

For example in the case of Oculus rift you want to make sure you use the right audio device.
In that case you would do something like that within your custom Game constructor.

```cs
namespace OculusRenderer
{
    public class OculusGame : Game
    {
		public OculusGame()
        {
        	var deviceName = OculusOvr.GetAudioDeviceFullName();
			var deviceUuid = new AudioDevice { Name = deviceName };
			Audio.RequestedAudioDevice = deviceUuid;
        }
    }
}
```
This code will make sure that when the game gets initialized and in turn the audio system, the right requested device will be used.