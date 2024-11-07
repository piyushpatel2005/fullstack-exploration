# Express Simple Server

In Express.js, you can create a simple server fairly easily by using the `express` module. Here is an example of a simple server that listens on port 3000 and responds with "Hello, World!" when a request is made to the root path.

```javascript
const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.listen(3000, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

This is very trivial example, but it can help us understand some concepts. In Express, you can define different endpoints using their respective methods like `app.get` or `app.post` for POST requests. These methods have two parameters. First the path they handle and next part is the handler function which can be anonymous function like above. These route handler function takes two arguments. The first argument is request object which contains information about the HTTP request made. This is also the object from which you can retrieve various information from the client requesting the data. The second argument is the HTTP response object which can be manipulated. These are usually abbreviated as `req` for request and `res` for response object.

In this example, I have single route `/` and in that `res.send()` method sends a response to the client with the string "Hello, World!". The `app.get()` method is used to define a route handler for the root path (`/`).  

Instead of this simple response, if you want to send a JSON response, you can use the `res.json()` method. Here is an example which sends a JSON response with a message "Hello, World!". Notice, that in your code, you're simply sending a JSON object instead of a string and Express will handle the conversion to JSON for you.

```javascript
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
});
```

By default, Express sends a status code of 200 (OK) with the response. If you want to send a different status code, you can use the `res.status()` method before sending the response. You can also chain the `res.status()` method with the `res.send()` method to send the response in a single line.

```javascript
app.get('/hello', (req, res) => {
    res.status(404).send('Not Found');
});
```

In above code, the server will respond with a status code of 404 (Not Found) and the message "Not Found" when a request is made to the `/hello` path because there is no route handler defined for that path and we have set the status code to 404.

If you want to handle different routes, you can define multiple route handlers for each of the routes. Below code sends simple text response for different routes.

```javascript
const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send("Root page");
});

app.get('/about', (req, res) => {
    res.send("About page");
});

app.listen(3000, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

With these changes, you can visit `/` and `/about` route in your browser and see the response for each of these routes. If you checkout the response in detail, you will notice that Express sends the response with `Content-Type: text/html` by default. If you want to send a different content type, you can use the `res.type()` method before sending the response.

```javascript
app.get('/about', (req, res) => {
    res.type('text/plain').send("About page");
});
```

In above code, we have set the content type to `text/plain` before sending the response. 
