# Spatialized audio

**Spatialized audio**, also called **3D audio**, simulates three-dimensional sound. This creates more realistic audio than [non-spatialized audio](non-spatialized-audio.md), especially for sounds simulated above, below, and behind the listener. 

In real life, our experience of sound sound is affected by factors including its volume, the surrounding area (such as a cave or small room), and the position and movement of the sound source. We can usually tell approximately where a sound is coming from and whether it is moving.

For example, the frequency (pitch) of the sound coming from a moving object varies depending on the observer's position (the [Doppler effect](https://en.wikipedia.org/wiki/Doppler_effect)). Sound from an approaching source has a higher frequency than sound from a resceding source:

![Doppler effect](media/audio-index-play-audio-doppler-effect.png)

To simulate realistic 3D audio, Xenko tracks the positions of two entities in the scene:

* **[audio emitters](audio-emitters.md)**, which emit audio
* **[audio listeners](audio-listeners.md)**, which hear the sound emitted by audio emitters

You must have both audio emitters and audio listeners to hear spatialized sound in a scene.

![Spatialized audio](media/audio-index-spatialized-audio.png) 

Spacialized audio is widely used for sound effects in platform, desktop, and VR games. For example, a gun might make a gunshot sound when fired, or a character might make a footstep sound when they take a step.

> [!Note] 
Spatialized audio uses more CPU than non-spatialized audio, as it requires more sound channels.

## Enable spatialized audio
When you [import your audio asset](import-audio.md), select _Spatialized Sound_ as the asset type.

You can also set audio to spatialized in the asset's **Property grid**:

1. In **Asset View**, select _Audio Asset_.

2. In the **Property grid**, select the **Spatialized** checkbox: 

    ![Select spatialized sound](media/audio-asset-properties-property-grid-spatialized-sound.png)

> [!Note] 
Xenko processes spatialized audio as mono (single-channel) audio. The source file is not affected.