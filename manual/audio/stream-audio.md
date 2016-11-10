# Stream audio
By default, Xenko plays audio directly from memory. This is useful for short sound effects, such as gunshots or footsteps.

![Non-streamed audio](media/audio-index-non-streamed-audio.png)

Alternatively, Xenko can buffer audio and stream it in sequences. As soon as the first sequence is buffered, Xenko plays it while buffering the following sequences in parallel. This saves memory when used for larger audio files such as background music and character dialogue.

![Streamed audio](media/audio-index-streamed-audio.png)

To enable streaming for a sound asset:

1. In the **Asset view**, select the sound asset.

2. In the **Property grid**, select **Stream From Disk**:

    ![Sound asset properties](media/audio-asset-properties-property-grid.png)

In the script for the asset, you can configure an audio file to play once the audio engine buffers enough audio samples.

To do this, use this task:

```cs
SoundInstance music = musicSound.CreateInstance();
await music.ReadyToPlay();
music.Play();
```

## See also
* [Global audio settings](global-audio-settings.md)