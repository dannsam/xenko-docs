# Audio
Xenko's fully integrated audio system supports many advanced features,
e.g. 3D spatialized audio, streaming and low latency playback.
You can import any sound files and use them in your games and applications.

![Audio in Xenko](media/audio-index-intro-picture.png)

## Overview
You can control **Global Audio Settings** by accessing _Properties_
of [AudioEngine](xref="SiliconStudio.Xenko.Audio.AudioEngine") class:

| Property | Functionality |
|--- | --- |
| [MasterVolume](xref="SiliconStudio.Xenko.Audio.AudioEngine.MasterVolume") | Set global volume settings of your game or application. |
| [PauseAudio](xref="SiliconStudio.Xenko.Audio.AudioEngine.PauseAudio") | Pause game audio, when you need to mute all sounds. |
| [ResumeAudio](xref="SiliconStudio.Xenko.Audio.AudioEngine.ResumeAudio") | Resume all audio, when you need to enable sounds again. |

Apart from the global audio settings, you can always manage individual sounds in the **Scene**.

### Background and Object-Specific Audio
**1)** Sometimes, _Audio_ is not attached to a particular object, but affects the whole **Scene**.
The examples are:

* Menu sounds and music.
* Soundtracks.
* Pop-up warnings, etc.

[SoundInstance](xref="SiliconStudio.Xenko.Audio.SoundInstance") helps you adjust background _Audio_.
For more information, see [Background Audio](background-audio.md).

**2)** Usually, _Audio_ is attached to a particular object in a **Scene**.
In that case, you need to add `Audio Emitters` and `Audio Listeners` to the **Scene** to be able to hear the _Audio_ at runtime.

[AudioEmitterSoundController](xref="SiliconStudio.Xenko.Audio.AudioEmitterSoundController") helps you adjust object-specific _Audio_.
For more information, see [Object-Specific Audio](entity-audio.md).

### Streamed and non-Streamed Audio
Xenko allows you to stay flexible when managing sounds.
Either buffer entire audio files, or stream compressed audio from the disk at runtime.
The choice usually depends on the size of the audio file.
More often than not, you want to stream bigger samples and play smaller files directly from the memory:

**1) Non-Streamed Audio**: Xenko plays audio directly from the memory. This option is useful for smaller sound files.
For instance, when you need to play a special sound effect, e.g. explosion or shooting sound.

![Non-Streamed Audio](media/audio-index-non-streamed-audio.png)

**2) Streamed Audio** is designed for larger audio files, like soundtracks, dialogs, etc.
Rather than playing the whole file directly from the memory, Xenko buffers and plays it in sequences.
As soon as the first sequence is buffered, Game Engine plays it while buffering the following sequences in parallel.

![Streamed Audio](media/audio-index-streamed-audio.png)

For more information, see [Background Audio](background-audio.md).

### Spatialized and non-Spatialized Audio
In Xenko, you can play **Spatialized** and **non-Spatialized** sounds.
Here's how these two sound types differ from one another:

**1) Non-Spatialized Audio** (**Stereo Audio**) simulates sounds on both side of the listener.
Yet, stereo sounds move along a single axis (most often, _Ox axis_).
This feature greatly limits accuracy of the audio, especially for sounds simulated _Above_, _Below_, and _Behind_ the user.

![Non-Spatialized Audio](media/audio-index-non-spatialized-audio.png)

**2) Spatialized Audio** (**3D Audio**) uses more complex algorithms than stereo audio.
This technology simulates sound sources that are located in a _3-dimensional Space_ around the listener.
It creates a very natural listening experience, especially for sounds simulated _Above_, _Below_, and _Behind_ the user.
_Spatialized Audio_ gives an impression the sound is coming from real-life objects,
while in fact it may be coming from just two stationary speakers.

![Spatialized Audio](media/audio-index-spatialized-audio.png)

For more information, see [Spatialized Audio](spatialized-audio.md).

## Topics Covered
* [Import and Setup](import-setup.md): How to import and setup audio files.
* [Background Audio](background-audio.md): How to set and adjust background audio, including streamed audio.
* [Object-Specific Audio](entity-audio.md): How to setup and adjust object-specific audio.
* [Spatialized Audio](spatialized-audio.md): Spatialized Audio and its application in Xenko.
* [Advanced Features](advanced-features.md): How to set loop points, stream custom audio, and use custom audio devices.
