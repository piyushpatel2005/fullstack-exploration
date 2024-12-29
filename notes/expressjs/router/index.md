# Express Router

Express Router is a class that helps you to create modular route handlers. It is used to define application routes and can be used to perform operations like middleware, routing, etc. It is an isolated instance of middleware and routes. You can think of it as a mini express application without all the settings and configurations of an express application.

You can create a new router using `express.Router()` and assign it to a router variable. This can be very useful for large applications which may have hundreds of endpoints. Having all of that code in a single file acn be overwhelmin and difficult to maintain.

## Introduction

Routers help us us define routes in easier manner. In your server code, you can create a router using below syntax.

```js
const express = require('express');

const blogRouter = express.Router();
```

Next, you can use this router for handling all your endpoints to this router instead of using the main express `app`.

```js
const blogRouter = express.Router();
blogRouter.post('/blogs', blogController.postBlogs);
blogRouter.get('/blogs', blogController.getBlogs);
blogRouter.get('/blogs/:id', blogController.getBlogById);
blogRouter.put('/blogs/:id', blogController.updateBlogById);
blogRouter.delete('/blogs/:id', blogController.deleteBlogById);
```

The last part of the puzzle is to use this router in the main express application. You can do this by using the `app.use()` method. This is also called as mounting the router.

```js
app.use('/', blogRouter);
```

### Grouping Routes

In practice, it's usually used to simplify routes. That is to group routes that have a common path prefix. For example, if you have a blog application, you can group all the blog routes under `/blogs` path. This can be very useful if you have a large number of nested routes like `/blogs/:id/comments/:commentId`. So, you would use it like this.

```js
const blogRouter = express.Router();

blogRouter.get('/', blogController.getBlogs);
blogRouter.get('/:id', blogController.getBlogById);

app.use('/blogs', blogRouter);
```

This way `blogRouter` is mounted to handle all routes at `/blogs` prefix and from `blogRouter`'s perspective, it's handling routes at `/` and `/:id`.

## Refactoring to Routers

It's best practice to use separate modules for each router to make it more manageable. You can create a separate file for each router and export the router instance from that file.

```js
// routes/blog.router.js
const express = require('express');

const blogController = require('../controllers/blogs.controller');

const blogRouter = express.Router();

blogRouter.post('/', blogController.postBlogs);
blogRouter.get('/', blogController.getBlogs);
blogRouter.get('/:id', blogController.getBlogById);
blogRouter.put('/:id', blogController.updateBlogById);
blogRouter.delete('/:id', blogController.deleteBlogById);

module.exports = blogRouter;
```

In this code, you need to import `express`. Next, you create a router instance and define all routes. In order to define routes, you also need to import the corresponding controller. Finally, you export the router instance using `module.exports` as default export.

In your main application file, `index.js`, you need to import this router and mount it on the main express application.

```js
// index.js
/ ... ...
const blogRouter = require('./routes/blog.router');

app.use('/blogs', blogRouter);
```

Also, you don't need to import controller in the main application. So, you can remove that line of code.

```js
// index.js
const express = require('express');
const blogRouter = require('./routes/blog.router');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to our blog' });
});

app.use ('/blogs', blogRouter);

app.listen(3000, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

This makes your `index.js` lot more cleaner. Test out different endponts to make sure it works as expected.

Another benefit of separating routes is     the flexibility to define custom middleware for only one specific route. You can define middleware for a specific route like this.

```js
// routes/blog.router.js
const express = require('express');

const blogRouter = express.Router();

blogRouter.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

// ... ...
```

This middleware will be executed only for the routes defined in `blogRouter` or `/blogs` endpoint.