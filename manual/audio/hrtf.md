# Head-related transfer function (HRTF) audio

**Head-related transfer function (HRTF)** is an advanced way of rendering audio so that sounds appear to come from a specific point in 3D space, synthesizing binaural audio. Whereas standard [spatialized audio](spatialized-audio.md) only simulates sound coming from the left-right and front-back positions, HRTF also simulates vertical sound. For example, with HRTF, the player can hear whether a character is above or below them. This is particularly useful for [VR applications](../virtual-reality/index.md), as it increases immersion.

Players don't need special hardware to use HRTF. However, the effect works much better with headphones than speakers.

## Enable HRTF

1. Select the entity with the audio emitter that contains the sound you want to enable for HRTF.

2. In the **property grid** (on the right by default), under **Audio emitter**, select **Use HRTF**.

    ![Audio emitter properties](media/audio-emitter-properties.png)

    Sounds emitted from this entity will use HRTF.

    >[!Note]
    >The HRTF option applies to every sound emitted from the entity.
    
For more information about audio emitters, including the properties you can change, see [Audio emitters](audio-emitters.md).

## See also

* [Head-related transfer function (Wikipedia)](https://en.wikipedia.org/wiki/Head-related_transfer_function)
* [Spatialized audio](spatialized-audio.md)
* [Audio emitters](audio-emitters.md)
* [Audio listeners](audio-listeners.md)