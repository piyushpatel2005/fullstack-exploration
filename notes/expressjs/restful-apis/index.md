# RESTful APIs

Express.js makes it quite easy to create RESTful APIs. This tutorial will provide brief overview of RESTful APIs and how to build those using Express.js

## Intro to REST

REST stands for Representational State Transfer. It is an architectural style that defines a set of constraints and properties based on HTTP. RESTful APIs are designed to be stateless and should separate the client from the server. REST API consists of collections of resources identified by URLs. 

In the past, APIs were designed with nouns and verbs. For example, `GET /getUsers`, `POST /createUser`, `PUT /updateUser`, `DELETE /deleteUser`. RESTful APIs, on the other hand, use HTTP methods to perform CRUD operations on resources. For example, `GET /users`, `POST /users`, `PUT /users/:id`, `DELETE /users/:id`. The API endpoint itself along with request method should be sufficient to understand what operation is being performed. This is a standard convention for RESTful APIs. Here are the common conventions for RESTful APIs:

- Every resource endpoint should be in lowercase such as `/users`, `/blogs`, `/comments`.
- Use nouns for the endpoints, not verbs. For example, `/getUsers` is not a good endpoint. Instead, use `/users` is the correct endpoint with request method `GET` to demonstrate the purpose.
- API endpoints should not have file extensions like `.html`, `.php`, `.jsp`, etc.
- API endpoints use query parameters to filter, sort, paginate, etc. For example, `/users?sort=asc`, `/users?limit=10`, `/users?limit=10&offset=10`.
- If the resource contains two words, like `user profile`, the URL should be `user-profiles` in plural form with dashes.
- It's also best practice to not end the URL with a trailing slash. For example, `/users` is better than `/users/`.
- It's also best practice to version your API endpoints such as `/api/v1/blogs` and `/api/v2/blogs` to avoid breaking changes. However, this tutorial does not use versioning for simplicity.

In this tutorial, I will demonstrate a single API endpoint for `/blogs`. I will create a simple RESTful API to perform CRUD (Create, Read, Update, Delete) operations on a collection of blogs. We will use the following HTTP methods to perform CRUD operations:

- `POST /blogs`: Create a new blog
- `GET /blogs`: Get all blogs
- `GET /blogs/:id`: Get a blog by ID
- `PUT /blogs/:id`: Update a blog by ID
- `DELETE /blogs/:id`: Delete a blog by ID
- `PATCH /blogs/:id`: Partially update a blog by ID

As you have seen in previous tutorials, Express provides convenient methods to handle these HTTP methods. So, we will simply write the route handlers for each of these methods. Below are implementation of those route handlers. For demonstration purposes, I will use an array of blogs as our data store.

## 1. Create a new blog

```javascript
app.post('/blogs', (req, res) => {
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
});
```

This handler function checks the request body for `title` and `content`. If these fields are not present, it returns a `400 Bad Request` status with an error message. If the fields are present, it creates a new blog object with an `id`, `title`, and `content`. It then pushes this new blog object into the `blogs` array and returns the new blog object as a response. This is same code as we have seen in the previous tutorial on POST requests.

## 2. Get all blogs

```javascript
app.get('/blogs', (req, res) => {
    const sortType = req.query.sort || 'desc';
    if (sortType === 'asc') {
        blogs.sort((a, b) => a.id - b.id);
    }
    res.json(blogs);
});
```

Again, there is nothing new with this endpoint. It simply returns the list of blogs. It also accepts a query parameter `sort` to sort the blogs in ascending order.

## 3. Get a blog by ID

```javascript
app.get('/blogs/:id', (req, res) => {
    const id = Number(req.params.id);
    const blog = blogs.find(blog => blog.id === id);
    if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
});
```

This handler function gets the `id` parameter from the URL and finds the blog with that `id` in the `blogs` array. If the blog is not found, it returns a `404 Not Found` status with an error message. If the blog is found, it returns the blog object as a JSON response.

## 4. Update a blog by ID

```javascript
app.put('/blogs/:id', (req, res) => {
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
});
```

HTTP `PUT` method is used to update the blog entry as a whole. It accepts all parameters of the blog entry in the request body. The handler first finds the blog with the given `id` in the data store. If the blog is not found, it returns a `404 Not Found` status with an error message. If the blog is found, it updates the `title` and `content` of the blog with the values from the request body and returns the updated blog object as a response.

## 5. Delete a blog by ID

```javascript
app.delete('/blogs/:id', (req, res) => {
    const id = Number(req.params.id);
    const blogIndex = blogs.findIndex(blog => blog.id === id);
    if (blogIndex === -1) {
        return res.status(404).json({ error: 'Blog not found' });
    }
    const deletedBlog = blogs.splice(blogIndex, 1);
    res.json(deletedBlog);
});
```

This handler finds the blog with a given `id` and deletes the blog from the data store and returns the deleted blog entry. If the blog is not found, it returns a `404 Not Found` status with an error message.

## 6. Partial Updates

The difference between `PUT` and `PATCH` is that `PUT` updates the resource as a whole, while `PATCH` updates the resource partially. Here is an example of how to partially update a blog entry.

```javascript
app.patch('/blogs/:id', (req, res) => {
    const id = Number(req.params.id);
    const blog = blogs.find(blog => blog.id === id);
    if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
    }

    if (req.body.title) {
        blog.title = req.body.title;
    }

    if (req.body.content) {
        blog.content = req.body.content;
    }

    res.json(blog);
});
```

In this case, the request body does not need to contain all the fields of the blog entry. It can contain only the fields that need to be updated. The handler function updates only the fields that are present in the request body and returns the updated blog entry.

## Status Codes

It is also important to return appropriate status codes with the response. The response codes help the client application to understand the status of the request and take appropriate actions. For example, if the API endpoint was throttled, the server can return a `429 Too Many Requests` status code. This way the client code can implement a retry mechanism to circumvent the throttling. Here are some common status codes for each method.

| Method | Purpose | Endpoint                      | Description                                                                                                                                                                                                                                                                            |
| --- | --- |-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `POST` | Create | `/blogs`                      | - `201 Created` - The request has been fulfilled and a new resource has been created.<br/> - `405 Method Not Allowed` - The method is not allowed for the requested URL if the client sends POST request to `/blogs/:id` endpoint.<br/> - `409 Conflict` - The resource already exist. |
| `GET` | Read | - `/blogs`<br/> - `/blogs/:id` | - `200 OK` - The request has succeeded.<br/> - `404 Not Found` - The resource does not exist.                                                                                                                                                                                          |
| `PUT` | Update | `/blogs/:id`                  | - `200 OK` - The request has succeeded.<br/> - `404 Not Found` - The blog with `id` does not exist.<br/> - `405 Method Not Allowed` - The method is not allowed for the requested URL.<br/> - `204 No Content` - The request has succeeded but no content to return.                   |
| `DELETE` | Delete | `/blogs/:id`                  | - `200 OK` - The request has succeeded.<br/> - `405 Method Not Allowed` - The method is not allowed for the requested URL.<br/> - `404 Not Found` - The blog with `id` does not exist.                                                                                                 |
| `PATCH` | Partial Update | `/blogs/:id`                  | - `200 OK` - The request has succeeded.<br/> - `404 Not Found` - The blog with `id` does not exist.<br/> - `405 Method Not Allowed` - The method is not allowed for the requested URL.<br/> - `204 No Content` - The request has succeeded but no content to return.                   |

The complete code for the `index.js` file looks like this.

```js
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

app.use(express.json());

app.post('/blogs', (req, res) => {
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
    if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
});

app.put('/blogs/:id', (req, res) => {
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
});

app.delete('/blogs/:id', (req, res) => {
    const id = Number(req.params.id);
    const blogIndex = blogs.findIndex(blog => blog.id === id);
    if (blogIndex === -1) {
        return res.status(404).json({ error: 'Blog not found' });
    }
    const deletedBlog = blogs.splice(blogIndex, 1);
    res.json(deletedBlog);
});

app.patch('/blogs/:id', (req, res) => {
    const id = Number(req.params.id);
    const blog = blogs.find(blog => blog.id === id);
    if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
    }

    if (req.body.title) {
        blog.title = req.body.title;
    }

    if (req.body.content) {
        blog.content = req.body.content;
    }

    res.json(blog);
});

app.listen(3000, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```