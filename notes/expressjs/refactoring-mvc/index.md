# Refactoring Express App to MVC Architecture

So far, we have written everything in a single file. This is fine for small demo or POC applications. However, as the application grows, it becomes difficult to manage the codebase if everything was written in a single file. This is where MVC architecture comes into play. It helps to organize the codebase into three distinct layers: Model, View and Controller. This makes the application more organized and easier to maintain.

So far, I've only added endpoint for `/blogs`. However, as your application grows, you will add new endpoints for `/users`, `/comments`, etc. Keeping everything in single file will become too cluttered. So, let's break our single page server file into MVC architecture.

## Controllers

Controllers are route handler functions which handle specific routes. The convention is to use a separate file for each controller. They are defined in the `controller` directory. So, let's create a file `controllers/blogs.controller.js` and move the content for blog handler function and the `blogs` array into this file.

```javascript
// controllers/blogs.controller.js
const blogs = [
    {
        id: 1,
        title: 'Blog Post 1',
        content: 'Content of Blog 1'
    },
    {
        id: 2,
        title: 'Blog Post 2',
        content: 'Content of Blog 2'
    },
    {
        id: 3,
        title: 'Blog Post 3',
        content: 'Content of Blog 3'
    }
];

function postBlogs (req, res)  {
    if (!req.body.title || !req.body.content) {
        return res.status(400).json({ error: 'Title and Content are required' });
    }

    const newBlog = {
        id: blogs.length + 1,
        title: req.body.title,
        content: req.body.content
    };
    blogs.push(newBlog);
    res.json(newBlog);
}

function getBlogs (req, res) {
    const sortType = req.query.sort || 'desc';
    if (sortType === 'asc') {
        blogs.sort((a, b) => a.id - b.id);
    }
    res.json(blogs);
}

function getBlogById (req, res) {
    const id = Number(req.params.id);
    const blog = blogs.find(blog => blog.id === id);
    if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
}

function updateBlogById (req, res) {
    const id = Number(req.params.id);
    const blog = blogs.find(blog => blog.id === id);
    if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
    }

    if (!req.body.title || !req.body.content) {
        return res.status(400).json({ error: 'Title and Content are required' });
    }

    blog.title = req.body.title;
    blog.content = req.body.content;
    res.json(blog);
}

function deleteBlogById (req, res) {
    const id = Number(req.params.id);
    const blogIndex = blogs.findIndex(blog => blog.id === id);
    if (blogIndex === -1) {
        return res.status(404).json({ error: 'Blog not found' });
    }
    const deletedBlog = blogs.splice(blogIndex, 1);
    res.json(deletedBlog);
}
```

Here, I have moved the two route handlers for `/blogs` and one handler for `/blogs/:id` into the `blogs.controller.js` file. Now, to use these handler functions in our `index.js` file, we need to export these functions from the module. In order export them, we can use the `module.exports` object at the end of the file. You can use named exports as shown below.

```javascript
// controllers/blogs.controller.js
module.exports = {
    postBlogs: postBlogs,
    getBlogs: getBlogs,
    getBlogById: getBlogById,
    updateBlogById: updateBlogById,
    deleteBlogById: deleteBlogById
};
```

In this case, because the name of the export is same as the defined function, you can use the short-hand notation as shown below.

```javascript
// controllers/blogs.controller.js
module.exports = {
    postBlogs,
    getBlogs,
    getBlogById,
    updateBlogById,
    deleteBlogById
};
```

Now, to use this module in your `index.js` file, you first need to import this module using `require` function.

```javascript
// index.js
const blogController = require('./controllers/blogs.controller');
```

Now that you've added this import, you can use its functions as shown below.

```javascript
app.post('/blogs', blogController.postBlogs);

app.get('/blogs', blogController.getBlogs);

app.get('/blogs/:id', blogController.getBlogById);

app.put('/blogs/:id', blogController.updateBlogById);

app.delete('/blogs/:id', blogController.deleteBlogById);
```

This cleans up your `index.js` file and makes it more readable.

## Models

So far, our data is stored in `blogs` array. When the application grows, you will use database to store the data. The data is usually stored in model file. So, let's create `models/blogs.model.js` file and move the `blogs` array from `controllers/blogs.controller.js` file into this file.

```javascript
// models/blogs.model.js
const blogs = [
    {
        id: 1,
        title: 'Blog Post 1',
        content: 'Content of Blog 1'
    },
    {
        id: 2,
        title: 'Blog Post 2',
        content: 'Content of Blog 2'
    },
    {
        id: 3,
        title: 'Blog Post 3',
        content: 'Content of Blog 3'
    }
];

module.exports = blogs;
```

Notice that this file only exports the `blogs` array. Now to use this in the controller file, you can simply use the relative imports.

```javascript
// controllers/blogs.controller.js
const blogs = require('../models/blogs.model');
```

## Views

In our case, we don't have special views as we are returning JSON data. However, in a real-world application, you will have views to render HTML pages. You can use template engines like EJS, Pug, Handlebars, etc. to render views. You can create a `views` directory and store your views in it.