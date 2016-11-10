# Play a range within an audio file
You can have Xenko play only certain portions of an audio file. This means, for example, that you can create several samples from a single sound by specifying different ranges in different [SoundInstance](xref="SiliconStudio.Xenko.Audio.SoundInstance") objects.

![Loop points](media/audio-advanced-features-loop-points.png)

You can use the following properties and methods:

| Method / property | Function |
|---------|-----------|
| [Sound.TotalLength](xref="SiliconStudio.Xenko.Audio.Sound.TotalLength") | The total length of the [sound](xref="SiliconStudio.Xenko.Audio.Sound"). |
| [SoundInstance.SetRange(PlayRange range)](xref="SiliconStudio.Xenko.Audio.SoundInstance.SetRange.SiliconStudio.Xenko.Audio.PlayRange") | Set the time range inside the sound. |
| [PlayRange](xref="SiliconStudio.Xenko.Audio.PlayRange") | Time information, including the range's starting point and length. |
| [SoundInstance.Position](xref="SiliconStudio.Xenko.Audio.SoundInstance.Position") | `TimeSpan` of the range. |

## Example code

```cs
//Assume sample length is 5 seconds.
var length = mySound.TotalLength;
var begin = TimeSpan.FromSeconds(2);
var duration = TimeSpan.FromSeconds(2);
mySoundInstance.SetRange(new PlayRange(begin, duration));
```

## See also
* [Global audio settings](global-audio-settings.md)