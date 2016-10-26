# Use a not default audio device

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