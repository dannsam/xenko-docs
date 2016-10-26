# Setting Sound samples range
Sounds in Xenko can be played in different ranges, you could even load a single `Sound` and play different parts of it in multiple `SoundInstance` objects.

To achive this you need different information from different places.
For example you might need the total length of the `Sound` and that is achived by reading the `Sound.TotalLength` property.

To set the actual range that is done by `SoundInstance.SetRange(PlayRange range)`.
The `PlayRange` structure holds the timing information you want to achive, specifically the starting point and the length of the sub-sample you want to play from the `Sound`.

For example:
```cs
var length = mySound.TotalLength; //assume the sound is 5 seconds or so.
var begin = TimeSpan.FromSeconds(2);
var duration = TimeSpan.FromSeconds(2);
mySoundInstance.SetRange(new PlayRange(begin, duration));
```

If the `SoundInstance.IsLooping` property is true this range becomes effectively loop points.

Also if you ever need to know the position in time of a playing sound you could use the `SoundInstance.Position` property which returns a `TimeSpan` with the actual position.