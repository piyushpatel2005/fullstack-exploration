# HTML Meta Tags

Meta tags are used to provide metadata about the HTML document. Metadata will not be displayed on the page, but will be machine parsable. Meta elements are typically used to specify page description, keywords, author of the document, last modified, and other metadata. These are useful information for Search Engines to rank the web page and helps improve your website's SEO.

Metadata is data (information) about data. Meta tags are always added in the `<head>` section of an HTML document.

There is one `meta` tag which can be used multiple times in the `<head>` section of an HTML document. The `meta` tag has two attributes: `name` and `content`. These are like key value pairs used to describe the content of the web page.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Free Web tutorials on HTML, CSS, JavaScript, Bootstrap, jQuery, React, Angular, Vue, etc.">
    <meta name="keywords" content="HTML, CSS, JavaScript, Bootstrap, jQuery, React, Angular, Vue">
    <meta name="author" content="John Doe">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>HTML Meta Tags</h1>
    <p>Meta tags are used to provide metadata about the HTML document.</p>
</body>
</html>
```

This will not display anything new in the webpage but it has relevant information about the document for web crawlers and search engines.

If you look at the above example, the `meta` tag has the following attributes:

- `charset`: This specifies the character encoding for the HTML document. `UTF-8` is the most commonly used character encoding. This is different than other metadata information in that it does not have `name` and `content` attributes.
- `name`: This specifies the name of the metadata. It can be `description`, `keywords`, `author`, `viewport`, etc.
- `content`: This specifies the value of the metadata. It can be any value like text value for respective metadata.

The `viewport` meta tag is used to control the layout on mobile browsers. The `width=device-width` part sets the width of the page to follow the screen-width of the device (which will vary depending on the device). The `initial-scale=1.0` part sets the initial zoom level when the page is first loaded by the browser. You will learn more about this in the Responsive Web Design tutorials.