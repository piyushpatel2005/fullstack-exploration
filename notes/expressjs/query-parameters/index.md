# Query Parameters

Query parameters are additional parameters added to the end of a URL to provide extra information to the server. They are used to filter, sort, or paginate the data according to user's choices. You might have used them a lot when shopping online. For example, the filter functionality and sorting of products based on price or recency are usually implemented using query parameters. Query parameters are separated from the URL path by a question mark `?` and multiple query parameters are separated by an ampersand `&`. Again, just like route parameters, query parameters are also accessible in the server code using the request object and they are also string type by default.

Below is an example code which demonstrates how to use query parameters in an Express.js application.

Create a new file called `index.js` and write the following code in it.

```javascript
const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();

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

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to our blog' });
});

app.get('/blogs', (req, res) => {
    const sortType = req.query.sort || 'desc';
    if (sortType === 'asc') {
        blogs.sort((a, b) => a.id - b.id);
    }
    res.json(blogs);
});

app.get('/blogs/:id', (req, res) => {
    const id = Number(req.params.id);
    const blog = blogs.find(blog => blog.id === id);
    res.json(blog);
});

app.listen(3000, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

In this code, I have added query parameter `sort` to the `/blogs` route. The `sort` parameter can have two values `asc` or `desc`. If the `sort` parameter is not provided, the default value is `desc`. This is also nice shorthand syntax to assign default value unless there is query parameter available from the request object using `const sortType = req.query.sort || 'desc';`. If the `sort` query parameter is absent, it by default assigns `desc` to `sortType`. Next, I sort the blogs array based on the `sortType` value. If the `sortType` is `asc`, I sort the blogs in ascending order based on the `id` of the blog post, but it can also be based on anything else like sorting by time the post was created or updated.

If you're passing multiple query parameters, the `req.query` is simply a JSON object so you can retrieve all values like `req.query.sort`, `req.query.page`, `req.query.limit`, etc. You can log those values in your server code to verify what's passed in the query parameters. Modify the `/blogs` route to log the query parameters.

```javascript
app.get('/blogs', (req, res) => {
    console.log(req.query);
    const sortType = req.query.sort || 'desc';
    if (sortType === 'asc') {
        blogs.sort((a, b) => a.id - b.id);
    }
    res.json(blogs);
});
```

Now, when you enter `http://localhost:3000/blogs?sort=asc&page=2&limit=3`, you should see the query parameters logged in your Terminal.

```javascript
{ sort: 'asc', page: '2', limit: '3' }
```

This is how you can use query parameters in your Express.js application to filter, sort, or paginate the data based on user's choices. Query parameters are a powerful way to provide additional information to the server and get the desired data in response.