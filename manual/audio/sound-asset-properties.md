# Sound asset properties
After you select a sound asset in the **Asset view**, you can configure its properties in the **Property grid**.

![Sound asset properties](media/audio-asset-properties.png)

* **Source**: Change the source audio file.
* **Sample rate**: Choose the rate at which Xenko [resamples](https://en.wikipedia.org/wiki/Sampling_(signal_processing)#Sampling_rate) the source file. The higher the sample rate, the higher-quality the audio. Typical sample rates are 44.1 kHz (44,100 Hz), 48 kHz, 88.2 kHz, and 96 kHz. Note that Xenko doesn't alter source files; a high sampling rate won't improve the quality of a low-quality audio file.
* **Compression ratio**: Xenko compresses audio files with the open-source [Opus/Celt](https://en.wikipedia.org/wiki/CELT) codec. 1 is no compression; 40 is maximum compression. Greater compression optimizes memory use, but decreases audio quality.
* **Stream from disk**: Streaming from disk is useful for larger audio files, as it saves memory.
* **Spatialized**: Specify that this audio file is [spatialized audio](spatialized-audio.md).

## See also
* [Import audio as a sound asset](import-audio-as-a-sound-asset.md)
* [Global audio settings](global-audio-settings.md)