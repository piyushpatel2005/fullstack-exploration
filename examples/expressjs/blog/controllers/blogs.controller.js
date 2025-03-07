const blogs = require('../models/blogs.model');

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


module.exports = {
    postBlogs,
    getBlogs,
    getBlogById,
    updateBlogById,
    deleteBlogById
};