#Play Audio


## Playing spatialized sounds
**Spatialized Audio** requires at least one _Audio Listener_ and one or multiple _Sound Emitters_.


###Audio Listeners
A listener is any **Entity** in a Scene with an `AudioListenerComponent` component.
Usually, you attach `AudioListener Component` to the user's camera view.
This way the user can receive proper 3D sound from multiple `AudioEmitters` at runtime.

Here's how to create an `AudioListener Component`:

**Step 1:** Select an Entity you want to be an audio receiver.

![Select an Entity](media/audio-add-audiolistener-component-select-entity.png)

**Step 2:** In **Property Grid**, press _Add Component_.

**Step 3:** Select `AudioListener Component`.

![Add AudioListener Component](media/audio-add-audiolistener-component.png)

> [!Warning] On iOS, only one `AudioListenerComponent` will work.
> You can still create multiple listeners but only one will be used.
> This issue will be addressed in future releases.

###Audio Emitters
Spatialized sounds are produced by **Entities** with an `AudioEmitter Component`.
You can assign sound Assets to these _Components_ in Game Studio, and then use **Scripts** to manage Audio at runtime.
`AudioEmitter Component` always emits _Sounds_ from Entity's location.

###Doppler Effect
Doppler effect describes sound waves produced by a mobile sound source.
Sound coming from a moving object has different frequency depending on the observer's position:

* Sound coming from an approaching source has higher frequency.
* Sound of the same source moving away from the observer has lower frequency.

**Spatialized Audio** takes Doppler effect into account for an even more natural audio experience.



**TODO: Pic of game studio Entity with a AudioEmitterComponent and some sounds in it**

To play sounds from an emitter another special type of sound instance is introduced: `AudioEmitterSoundController`.
This is because in the Scene you might have multiple listeners and so to play the sound internally the engine might create multiple `SoundInstance`.


To get the `AudioEmitterSoundController` within a script, you would write something like this:
```
AudioEmitterComponent audioEmitterComponent = Entity.Get<AudioEmitterComponent>();
AudioEmitterSoundController mySound1Controller = audioEmitterComponent["MySound1"];
AudioEmitterSoundController mySound2Controller = audioEmitterComponent["MySound2"];
```

`AudioEmitterSoundController` works similarly to `SoundInstance`, so the sounds above could be used like this:
```
mySound2Controller.IsLooping = true;
mySound2Controller.Pitch = 2.0f;
mySound2Controller.Volume = 0.5f;
mySound2Controller.Play();
```

`AudioEmitterSoundController` introduces also another special way to play sound, Play and forget.
This is very useful in the case of for example, bullets, one hit and forget sounds, etc.
With play and forget you don't have to care about stopping the sound and internally the engine will allocate and clean up resources transparently.
```
mySound2Controller.PlayAndForget();
```
Please note that when using `PlayAndForget` the property `IsLooping` has no effect, those sounds will be always stopped when they end.

##Play Audio from Scripts
