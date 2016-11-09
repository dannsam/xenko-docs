# Custom audio 



You can play custom audio using your own sound generation mechanism.

To do this, create a subclass of `DynamicSoundSource`. For an example of how to implement this, see the `CompressedSoundSource` source code.

## Example code

To play a custom `DynamicSoundSource` at runtime, use:

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