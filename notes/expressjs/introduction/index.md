# Introduction to Express.js

Express.js is a web application framework for Node.js runtime. It is designed for building web applications and APIs very easily with Node. Let's first look at how you would build web applications in pure Node.js without any web frameworks and then see the difference when you use Express.js.

## Node.js Web Server

In Node.js, you can create a web server using the `http` module. Here is an example of a simple web server in Node.js:

```javascript
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

This code is releatively simple. It uses `http` module and imports it in the first line. Next, it creates a server using `createServer` function which takes a callback function as an argument. This callback function is called every time a request is made to the server. It takes two arguments, `req` and `res` which are request and response objects respectively. In the callback function, we set the response headers using `res.writeHead` function and write the response body using `res.end` function. Finally, we start the server using `server.listen` function by providing the port, hostname and the callback which simply logs where the server is running in the console.

Once, the server has started, you can browse to `http://localhost:3000` and you will see `Hello World` in the browser. As you can see, I've embedded HTML response in the `res.end` function. If you want to write more complicated response with more HTML elements, it would get very complicated. Below is an example of little more HTML. It's not very readable and maintainable. You would have to make several calls to `res.write()` method to write complete HTML response like below.

```javascript
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>My Favorite Website</h1>');
    res.write('<p>Welcome to the most popular Node website</p>');
    res.write('<h2>Check out My Todo List</h2>');
    res.write('<ul>');
    res.write('<li>Item 1</li>');
    res.write('<li>Item 2</li>');
    res.write('<li>Item 3</li>');
    res.write('</ul>');
    res.end();
});
```

If you want to write more complicated web applications, you would also have to handle routing, request parsing, response rendering, etc. This can get very complicated very quickly. This is where web frameworks help you. They abstract away lots of complexities in building web applications and provide very easy interface to build your application logic.

## Express.js Web Server

Now, let's see how you can build the same web server using Express.js. Below is the code to create the same web server using Express.js. This code itself will not work because it needs express.js installed in your project. I will go over those details in the next tutorial. This is here just for illustration.

```javascript
const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.listen(3000, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

Although, this code looks similar to the previous one, it is much more readable and maintainable. First you import `express` module and create an instance of `express` and store it in `app` variable. Next, you define a route using `app.get` method. As the method name suggests, this handles `GET` requests to the `/` route. It takes two arguments, first is the route path and second is a callback function which takes `req` and `res` objects. In the callback function, you simply send the response using `res.send` method. Finally, you start the server using `app.listen` method. Notice, that you didn't have to set headers or didn't have to set the response status code. Express.js does all that for you. If you need to do those things explicitly, you still have the freedom to do that.

