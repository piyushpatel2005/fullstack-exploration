# HTML Audio Element

The `<audio>` element is used to embed sound content in an HTML or XHTML document. The `<audio>` element contains `src` attribute which specifies the URL of the audio file. The audio file can be in any format like MP3, OGG, WAV, etc.

## HTML Audio Example

Below is an example of how to embed an audio file in an HTML document. In this case, I have included an audio file in the same directory as the HTML file with name `audio.mp3`.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Audio Example</title>
</head>
<body>
    <h1>Audio Element Example</h1>
    <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
</body>
</html>
```

Again, just like `<video>` element, the `controls` attribute in the `<audio>` element adds audio controls like play, pause, and volume. You can also modify the playback speed and download the audio from the embedded player. 

You can also use `autoplay` to automatically play audio on page load. Some applications use this feature to play background music automatically. 

```html
<!DOCTYPE html>
<html>
<head>
    <title>Audio Example</title>
</head>
<body>
    <h1>Audio Element Example</h1>
    <audio controls autoplay>
        <source src="audio.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
</body>
</html>
```

The `loop` attribute can be used to loop the audio playback. The audio will start playing again from the beginning when it reaches the end.

You could also use `controlslist` attribute to specify the controls that should not be available in the audio player. The possible values are `nodownload`, `nofullscreen`, and `noremoteplayback`. 

```html
 <audio controls src="audio.mp3" autoplay loop muted controlslist="nodownload"></audio>
```

For example, above code will not show the download option in the audio player.
