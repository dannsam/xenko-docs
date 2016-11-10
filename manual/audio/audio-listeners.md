# Audio listeners
An **audio listener** is an entity that listens for audio emitted by audio emitters. They are used in conjuction with audio emitters for spatialized audio.

> [!Note] 
If there's no audio listener in the scene, you won't hear audio from audio emitters.

There can be multiple audio listeners in a scene. This is common, for example, in multiplayer games, where each player camera is an audio listener.

You don't need to configure audio listeners. All settings for sound effects, including _Volume_ and _Pitch_ (_Frequency_), are configured on the audio emitter.

## Add an audio listener component to an entity

To create an audio listener, attach an **audio listener component** to an entity. You can attach this component to any entity, but it usually attached to the user camera.

1. In **Scene view**, select the entity you want to be an audio listener:

    ![Select an entity](media/audio-add-audiolistener-component-select-entity.png)

2. In the **Property grid**, click _Add Component_ and select `AudioListener Component`:

    ![Add AudioListener Component](media/audio-add-audiolistener-component.png)

    The entity is now an audio listener.

> [!Warning] 
On iOS, you can create multiple objects with `AudioListener Component` in a scene, but only one is used at runtime. This will be fixed in a future release.

## See also
* [Spatialized audio](spatialized-audio.md)
* [Audio emitters](audio-emitters.md)
* [Global audio settings](global-audio-settings.md)