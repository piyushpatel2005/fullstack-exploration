# HTML Iframes

In this tutorial, you will learn about HTML iframes. An iframe is used to display a web page within a web page. It is like a window that displays another web page within the current web page.

An iframe is defined with the `<iframe>` tag. The `src` attribute specifies the URL of the page to embed in the iframe. This can be useful if you want to embed another document into current document. Every `<iframe>` in a page requires additional resources to be downloaded and rendered. This can slow down the page load time. So, it's recommended to use iframes only when necessary. These are normally used to embed Google Maps or YouTube videos.

The syntax for the iframe tag is:

```html
<iframe src="URL"></iframe>
```

You can also specify the width and height of the iframe using the `width` and `height` attributes. The default width and height of an iframe is 300px and 150px respectively.

```html
<iframe src="URL" width="600" height="400"></iframe>
```

You can also use the `name` attribute to give the iframe a name. This is useful if you want to link to the iframe from another element.

```html
<iframe src="URL" name="iframe_name"></iframe>
```

## Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Iframe</title>
</head>
<body>

<h1>HTML Iframe</h1>
<p>This webpage explains how to create your own Google.</p>
<h2>Google</h2>
<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5771.21375835663!2d-79.63594232356932!3d43.67714515088148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b394ac02dd491%3A0xb41d5de9c4030ec5!2sToronto%20Pearson%20International%20Airport!5e0!3m2!1sen!2sca!4v1723531806655!5m2!1sen!2sca"
        width="600" height="450">
</iframe>

</body>
</html>
```
