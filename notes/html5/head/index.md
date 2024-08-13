# HTML Head Element

The `<head>` element contains information for crawlers. These are not displayed on the web page. The `<head>` element is used to define the title of the document, links to stylesheets, scripts, and other meta-information about the web page.

You've already seen few tags that can be used in the `head` section of the HTML document such as `title`, `meta` and `style`. There are few more tags which can be used in the head of the webpage. Below are the list of elements that can be used inside the `<head>` element:

- `<title>`: The title of the document.
- `<base>`: The base URL for all relative URLs in the document.
- `<link>`: Links to external resources like stylesheets.
- `<style>`: CSS styles for the document.
- `<meta>`: Meta-information about the document.
- `<script>`: JavaScript code or links to external scripts.
- `<noscript>`: Content to display if JavaScript is disabled in the browser.
- `<template>`: Defines a template for HTML content.

## `<title>` Element

The `<title>` element is used to define the title of the document. The title is displayed in the browser's title bar or tab. It is also used by search engines to display the title of the page in search results.

```html
<head>
    <title>Document Title</title>
</head>
```

## `<meta>` Element

The `<meta>` element is used to provide meta-information about the document.

```html
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Relevant description for the webpage">
    <meta name="keywords" content="keyword1, keyword2, keyword3">
    <meta name="author" content="Author Name">
</head>
```

## `<link>` Element

The `<link>` element is used to link external resources like stylesheets to the document.

```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

## `<script>` Element

The `<script>` element is used to include JavaScript code in the document. You can use this tag in the `head` or `body` of the HTML document. You will learn about this tag in the upcoming tutorials.

```html
<head>
    <script src="script.js"></script>
</head>
```

## `<style>` Element

The `<style>` element is used to define CSS styles for the document. You can define styles for the entire document or specific elements.

```html
<head>
    <style>
        body {
            background-color: lightblue;
        }
        h1 {
            color: blue;
        }
    </style>
</head>
```

## `<base>` Element

The `<base>` element is used to specify the base URL for all relative URLs in the document.

```html
<head>
    <base href="https://www.example.com/">
</head>
```

## `<noscript>` Element

The `<noscript>` element is used to provide content that will be displayed if JavaScript is disabled in the browser.

```html
<head>
    <noscript>
        <p>JavaScript is disabled in your browser.</p>
    </noscript>
</head>
```

## `<template>` Element

The `<template>` element is used to define a template for HTML content that can be cloned and inserted into the document using JavaScript.

```html
<head>
    <template id="template">
        <p>This is a template.</p>
    </template>
</head>
```

## Example

Below example shows the usage of some of the tags inside the `head` element. It will not be displayed on the web page, but it provides an example of how to use the `head` element.

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Head Element</title>
    <base href="https://www.example.com/">
    <meta charset="UTF-8">
    <meta name="description" content="HTML Head Element">
    <meta name="keywords" content="HTML, Head, Element">
    <meta name="author" content="Your Name">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
</head>
<body>
    <h1>HTML Head Element</h1>
    <p>This is the content of the web page.</p>
</body>
</html>
```