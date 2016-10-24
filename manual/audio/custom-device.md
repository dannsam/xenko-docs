# Use a not default audio device

For example in the case of Oculus rift you want to make sure you use the right audio device.
In that case you would do something like that within your custom Game constructor.

```
namespace OculusRenderer
{
    public class OculusGame : Game, IVrGame
    {
		public OculusGame()
        {
        	var deviceName = new StringBuilder(128);
			OculusOvr.GetAudioDeviceID(deviceName);
			var deviceUuid = new AudioDevice { Name = $"\\\\?\\SWD#MMDEVAPI#{deviceName}#{{e6327cad-dcec-4949-ae8a-991e976a79d2}}" };
			Audio.RequestedAudioDevice = deviceUuid;
        }
    }
}
```
This code will make sure that when the game gets initialized and in turn the audio system, the right requested device will be used.