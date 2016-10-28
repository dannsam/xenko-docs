

## Set special loop points
In Xenko you can play the whole audio file, or only its certain fragments.
This way, you can access a single `Sound` file in multiple `SoundInstance` objects and simply play different ranges of this audio.
It works much the same way as accessing individual Sprites of a **Sprite Sheet**.

You setup **Loop Points** inside the audio file and play the required ranges at runtime.
Use the following methods to achieve this objective:

`Sound.TotalLength`: total length of the `Sound` and that is achieved by reading the `Sound.TotalLength` property.
`SoundInstance.SetRange(PlayRange range)`: set the actual range inside the audio file.
`PlayRange`: timing information of the range, including starting point and the length of the range.
`SoundInstance.Position` returns a `TimeSpan` with the actual time position of the range.
`SoundInstance.IsLooping` make this range an actual loop point.

[Should have a schema explaining how to make nice looping effects]
|---beginning-play-once -------|loop-point-start-------------looping-part----------------loop-point-end|---------------------|end-of-track.

Sample Code:

```cs
var length = mySound.TotalLength;
//assume the sound is 5 seconds.
var begin = TimeSpan.FromSeconds(2);
var duration = TimeSpan.FromSeconds(2);
mySoundInstance.SetRange(new PlayRange(begin, duration));
```




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