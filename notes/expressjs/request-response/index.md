# Express Request and Response Objects

Express.js provides two objects `req` and `res` which are used to handle the request and response objects respectively. These objects are passed to the route handler functions and can be used to access the request and send the response back to the client. This tutorial explains little bit more about what kind of information we can find in these objects.

## Request Object

The request object `req` is used to represent HTTP request and has properties for the request query string, parameters, body, HTTP headers, etc. The request object has the following properties and methods.

- `req.params`: This property is an object containing properties mapped to the named route parameters. For example, if you have a route `/users/:id`, then the `req.params` object will have a property `id` which will contain the value of the `id` parameter in the URL.
- `req.query`: This property is an object containing a property for each query string parameter in the route. For example, if you have a route `/users?name=John`, then the `req.query` object will have a property `name` which will contain the value `John`.
- `req.body`: This property is an object containing the parsed request body. This property is populated by middleware like `express.json()` which parses the incoming JSON data and makes it available under `req.body`. If you don't use a body parsing middleware, the default value will be `undefined`.
- `req.method`: This is a string representing the HTTP method of the request. It can be `GET`, `POST`, `PUT`, `DELETE`, etc.
- `req.cookies`: This property is an object containing the cookies sent by the client. This property is populated by the `cookie-parser` middleware. If the request doesn't have any cookies, the default value will be an empty object.
- `req.ip`: This is a string representing the IP address of the client that sent the request.
- `req.baseUrl`: This is URL path on which a router was mounted. It is useful for creating dynamic routes.
- `req.path`: This is a string representing the path part of the URL. For example, `http://localhost:8000/users?name=Ali`, the `req.path` will be `/users`.
- `req.accepts()`: This method is used to check if the specified content type is acceptable for the response. It returns the best match from the list of content types. You can use it like `req.accepts('text/html')`.
- `req.get()`: This method is used to get the value of the specified header field in the request. You can use it like `req.get('Content-Type')` or any other header from the request object.

There are many more properties available on the requeset object which you can find in the [official API documentation](https://expressjs.com/en/api.html#req).

## Response Object

HTTP response object is represented in Express.js as `res` object. This object is used to send the response back to the client. The response object has the following properties and methods.

- `res.headersSent`: This property is a boolean value which is `true` if the headers have been sent to the client and `false` otherwise.
- `res.locals`: This property is used to set variables accessible in the template files rendered by the `res.render()` function.
- `res.send()`: This is used to send HTTP response to the client. It can contain `body` parameter.
- `res.sendFile()`: This is used to send a file as an attachment. 
- `res.status()`: Sets the HTTP status code for the response object. You can chain this method with `res.send()` to send the response in a single line.
- `res.json()`: This method sends a JSON response to the client. It can contain `body` parameter of JSON type.
- `res.redirect()`: It redirects the URL based on the parameter passed to this function.
- `res.render()`: This is used to render a view and send the rendered HTML content to the client. It can includes `view`, `locals` parameters and a callback function.
- `res.cookie()`: This method sets cookies in the response object with `name` to `value`. It can also include `options` parameter which is an object containing age, expiry, domain, etc.
- `res.clearCookie()`: This method is used to clear the cookie with the specified `name`.
- `res.download()`: This is used to download a file with the specified `path`. Browsers will prompt the user for the download when this method is used. 

Again, just like request object, response object contains few more properties and methods which you can find in the [official API documentation](https://expressjs.com/en/api.html#res).