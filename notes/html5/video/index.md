# HTML Video Element

The `<video>` element is used to embed video content in an HTML document. This embeds a video player in an HTML document which supports video playback option in the browser. The `<video>` element contains one or more `<source>` elements with different video sources. The browser will choose the first source it supports.

## HTML Video Example

Below is an example of how to embed a video in an HTML document. In this case, I have included those video files in the same directory as the HTML file with name `clip.mp4`.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Video Tag Example</title>
</head>
<body>
    <h1>Video Tag Example</h1>
    <video width="620" height="480" controls>
        <source src="clip.webm" type="video/webm">
        <source src="clip.mp4" type="video/mp4">
        <source src="clip.ogg" type="video/ogg">
    </video>
</body>
</html>
```

The `controls` attribute in the `<video>` element adds video controls like play, pause, and volume. You can also modify the playback speed and download the video from the embedded player. Try removing the `controls` attribute and see the difference.

You can also use `width` and `height` attributes specify the width and height of the video player. The `<source>` element contains the video source URL and the type of video file. Historically, some browsers had limited supported for few video formats, so it was common to provide multiple video sources in different formats. But now, most browsers support the MP4 format, so you can provide only MP4 video source.

You could also autoplay the vide by adding `autoplay` attribute in the `<video>` element. Some applications use this feature to play videos automatically with muted sound using `muted` attribute. 

```html
<!DOCTYPE html>
<html>
<head>
    <title>Video Tag Example</title>
</head>
<body>
<h1>Video Tag Example</h1>
<video width="620" height="480" controls muted autoplay>
    <source src="clip.webm" type="video/webm">
    <source src="clip.mp4" type="video/mp4">
    <source src="clip.ogg" type="video/ogg">
</video>
</body>
</html>
```

Autoplaying videos use bandwidth and may be annoying to some users, so use it wisely.

The `loop` attribute can be used to loop the video playback. The video will start playing again from the beginning when it reaches the end. This can be useful if you want to play the same video over and over again. May be it's your favorite song and you want to listen to it all day long.

You could also use `controlslist` attribute to specify the controls that should not be available in the video player. The possible values are `nodownload`, `nofullscreen`, and `noremoteplayback`.

```html
 <video controls src="clip.mp4" autoplay loop muted controlslist="nodownload"></video>
```

For example, above code will not show the download option in the video player.