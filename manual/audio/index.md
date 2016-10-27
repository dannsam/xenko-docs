# Audio

[Nice small image]

Xenko's fully integrated audio system supports 3D spatialized audio and low latency playback.
You can import any sound files and use them efficiently in you games and applications.

**Game Engine** also allows you to stay flexible when managing sounds at runtime.
You can choose to buffer entire audio files or stream compressed audio from disk at runtime.
The choice usually depends on the file size of the audio.
More often than not, you want to stream bigger samples and buffer smaller sound and music files.

## Overview (focus on the two main concepts (audio streaming, spatialization)
You can control global sound settings of your _Game_ or _Application_
by accessing _Properties_ of [AudioEngine](xref="SiliconStudio.Xenko.Audio.AudioEngine") class:

* [MasterVolume](xref="SiliconStudio.Xenko.Audio.AudioEngine.MasterVolume"): set the global volume settings of your game or application.
* [PauseAudio](xref="SiliconStudio.Xenko.Audio.AudioEngine.PauseAudio"): pause all audio, when you need to mute all game sounds.
* [ResumeAudio](xref="SiliconStudio.Xenko.Audio.AudioEngine.ResumeAudio"): resume all audio, when you need to enable game sounds again.

Apart from the global audio settings, you can always manage individual sound objects in the **Scene**.
For instance, you can choose to stream large audio files at runtime to optimize memory usage.

### Streamed and non-Streamed Audio
At runtime, Xenko offers two options when playing the audio.
You can choose to stream sounds or play without streaming:

1. **Non-Streamed Audio**: Xenko plays audio directly from memory. This option is useful for smaller sound files.
For instance, when you need to play some effect, e.g. explosion or reload weapon sound.
2. **Streamed Audio** is designed to handle larger audio files, like soundtracks, dialogs, etc.
Rather than playing the whole file directly from memory, Xenko buffers and plays it in sequences from the disk.
As soon as the first sequence is buffered, Game Engine plays it and buffers next sequences in parallel.

See these diagrams to understand the difference between these options:



### Spatialization
In Xenko, you can use **Spatialized** and **non-Spatialized** sounds.
Here's how these two sound types differ from one another:

[Explanation about the difference between streamed and not-streamed audio with diagrams]

**Non-Spatialized Audio** (**Stereo Audio**) simulates sounds that come from different directions.
Yet, stereo sounds usually move along a single axis (most often, _Ox axis_).
This feature greatly limits accuracy of the audio, especially for sounds that are simulated above, below, and behind the user.

**Spatialized Audio** (**3D Audio**) simulates sound sources that are located in a 3-dimensional space around the listener.
It creates a very natural experience, especially for sounds that are simulated above, below, and behind the user.
This gives an impression the audio is coming from real-life objects, while in fact it may be coming from just two stationary speakers.

This technology is a perfect fit for VR applications, but is also widely used in conventional platform and desktop games.

**Spatialized Audio** is considered to be closer to the real-life than **Non-Spatialized**.
At the same time, **3D Audio** uses more CPU, as the system has to process more sound channels.
Take that into account when creating your applications in Xenko.

> [Note!] Xenko always converts 3D spatialized sounds to Mono (Single channel) sounds.

## Topics Covered:
* [Import Audio](import.md)
* [Playing sounds from scripts](playing-script.md)
* [Playing 3D spatialized sounds using `AudioEmitterComponent` and scripts](playing-component.md)
* [How to specify the audio device to use](custom-device.md)

