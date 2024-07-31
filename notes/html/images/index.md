# HTML Images

The web would be very boring without cool images and videos. In this tutorial, we will learn how to add images to our HTML pages.

## `<img>` Tag

The `<img>` tag is used to embed images in an HTML page. It is an empty tag or self-closing tag, which means it does not have a closing tag. It is used to display an image on a web page. Let's look at syntax.

```html
<img src="image.jpg" alt="Image Description" width="200" height="200">
```

In this case, `src` attribute is used to specify the path to the image file. Again, just like anchor tag, you can specify relative path of the image or you can specify url of the image from the web. 

The `img` element can have following attributes.

- `src` - Specifies the path to the image file.
- `alt` - Specifies an alternate text for the image. This is used for search engine visibility and accessibility. This can also be used to display a text when the image is not loaded.
- `width` - Specifies the width of the image.
- `height` - Specifies the height of the image.
- `title` - Specifies the title of the image.

> **Note:** Even though you can specify `width` and `height` attributes, it is recommended to use CSS to specify the size of the image. It's not a good practice to use `width` and `height` attributes to resize the image.

## Example

Let's see an example of how to add an image to an HTML page.

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Images</title>
</head>
<body>
    <h1>HTML Images</h1>
    <img src="image.jpg" alt="Image Description" width="200" height="200">
</body>
</html>
```

The image file can be JPEG, GIF, PNG, or any other image format. Now, try renaming `src` attribute to a name `not-found-image.jpg` and see what happens. The `alt` attribute will be displayed in place of the image.