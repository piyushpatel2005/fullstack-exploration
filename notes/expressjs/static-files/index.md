# Serving Static Files with Express.js

So far, I have shown you how to create a simple web server to serve JSON or text data. However, what if you want to serve a PDF file, an image or a CSS file? These are called static files as they don't change dynamically. This tutorial will show you how to serve static files using Express.js.

## `sendFile()` Method

Express.js provides a method called `sendFile()` to serve static files. This method takes the path of the file to be served as an argument. Here is an example of how to serve an image file.

```js
const express = require('express');

const app = express();

app.get('/profile', (req, res) => {
  res.sendFile(__dirname + '/profile.png');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

In this case, I have a file called `profile.png` in the same directory as the script. Express provides a global variable `__dirname` that contains the directory name of the current module. So, `__dirname + '/profile.png'` will give the full path to the image file. Now, when you visit `http://localhost:3000/profile`, the image will be served. Also notice that the `sendFile()` method sets the `Content-Type` header based on the file extension. So, in this case, it will set the `Content-Type` header to `image/png`.

### Serving Files from a Different Directory

If your image was located in another directory called `public`, you can use the following code to serve the image.

```js
app.get('/profile', (req, res) => {
  res.sendFile(__dirname + '/public/profile.png');
});
```

The better approach would be to use the `path` module to join the directory and file name. This way regardless of the operating system, the path will be constructed correctly. That is if you're using Windows, the path will be constructed using backslashes and if you're using Unix, the path will be constructed using forward slashes.

```js
const path = require('path');
//  ... ...

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.png'));
});
```

Notice that you don't need to specify the file separator as `path.join()` will take care of that for you.

## Using `express.static()` Middleware

If you want to serve several different static files, having to write the code using `sendFile()` for each file can be cumbersome. Express.js provides a built-in middleware called `express.static()` to serve static files. This middleware takes the root directory from which to serve the static files as an argument. 

```js
const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

In this code, I have asked Express to serve all files inside the `public` directory to serve as static files. If I have a file located at `/public/images/profile.png`, I can access it using `http://localhost:3000/images/profile.png`. Again, `express.static()` middleware will automatically set the `Content-Type` header based on the file extension.

Similarly, if you had an HTML file located at `/public/index.html`, you can access it using `http://localhost:3000/index.html` or simply `http://localhost:3000/` because browsers by default serve `index.html` file if present at that path.

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Awesome Website</title>
</head>
<body>
    <h1>Welcome to my Awesome Website</h1>
    <img src="images/profile.png">
    <p>Developer with Javascript wizardry.</p>
</body>
</html>
```

This file is using our static image file `profile.png` located in the `images` directory. You could also serve CSS files or Javascript files like this.

One improvement you could make is to use the `path` module to join directory you want to mount. This will help if you're starting your server from a different directory because the path you specified will be relative to the directory where you started the server.

```js
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
```

### Mounting the Path

If you want to serve the static files from a different path, you can specify the path as the first argument to the `express.static()` middleware.

```js
app.use('/static', express.static(path.join(__dirname, 'public')));
```

This way your static files will be served from `http://localhost:3000/static/images/profile.png`. This also means your HTML file will be accessible from `http://localhost:3000/static/index.html`.
