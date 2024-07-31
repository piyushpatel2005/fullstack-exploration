# HTML Links

## HTML Links

HTML links are hyperlinks that allow users to navigate between web pages. If we ever had a website and it had only single page it would have been so large and boring. So, we need to create multiple pages and link them together to make it more interesting and easy to navigate.

This where HTML links come in. HTML links are defined with the `<a>` or anchor tag. The link's destination is specified in the `href` attribute.

```html
<a href="url">link text</a>
```

The `href` attribute specifies the URL of the page the link goes to. If the `href` attribute is not present, the `<a>` tag will not be a hyperlink. Let's create a simple two page website and link them together.

### Example

Create two HTML files `index.html` in one of the directory and fill with below content. This webpage is simply a combination of `h1` heading, a paragraph and a link to another page `about.html`.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body>
    <h1>Home Page</h1>
    <p>Welcome to the home page.</p>
    <a href="about.html">About</a>
</body>
</html>
```

Create another HTML file `about.html` in the same directory and fill with below content. This webpage is simply a combination of `h1` heading, a paragraph and a link to another page `index.html`.

```html
<!DOCTYPE html>
<html>
<head>
    <title>About</title>
</head>
<body>
    <h1>About Page</h1>
    <a href="index.html">Home</a>
</body>
</html>
```

Now, open `index.html` in a browser and click on the link `About`. It will take you to the `about.html` page. Similarly, click on the link `Home` in `about.html` page to go back to the `index.html` page.

These is how different web pages are linked together to form a website. The `href` attribute can be used to link to any other web page in the same directory or another directory using relative path or you can also point to an already available website like Google.

### Specifying the URL

In below code, the `href` attribute points to the `about.html` file in the parent directory using `../`.

```html
<a href="../about.html">About</a>
```

In below example, our home page is pointing to `google.com` website.

```html
<a href="https://www.google.com">Google</a>
```

You'll see lot more examples in this tutorial. So, keep reading.