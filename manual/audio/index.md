# Audio

[Nice small image]

The Xenko engine includes a fully featured audio sub system, that allows to play audio samples from buffers or directly stream compressed streams from disk. It also allows full 3D spatialization of sound and low latency playback.

From the Game Studio it is possible to import any kind of audio file which internally gets compressed with the best current open source technology of [Opus/Celt](https://en.wikipedia.org/wiki/CELT) codec to reduce and compress the data yet preserving high quality.

## Overview - this part is a quick summary of the functionalities but with focus on the two main concepts (audio streaming, spatialization)

### you can control the audio at a global level using audio engine
MasterVolume set the volume
Pause/Resume stop/resume all the audio (can be useful to mute all the audio in a game)

### Import a sound - Explanation about the difference between streamed and not-streamed audio with diagrams


### Play a sound - Explanation about spatialized/not-spatialized sound with diagrams

The most common scenario is to import sounds from the Game Studio and then reference them in Scripts or consume them directly from an `AudioEmitterComponent`, in this case since it's meant to be used for 3D spatialization you also will need a `AudioListenerComponent` (one is included by default when create a new game).

Known issues:
* Currently on iOS only one `AudioListenerComponent` will work. You can still create multiple listeners but only one will be used.

Remarks:
* 3D spatialized sounds will always be converted to Mono (Single channel) sounds.

## Topics:
* [Import Audio files](import.md)
* [Playing sounds from scripts](playing-script.md)
* [Playing 3D spatialized sounds using `AudioEmitterComponent` and scripts](playing-component.md)
* [How to specify the audio device to use](custom-device.md)



