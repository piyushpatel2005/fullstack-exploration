const express = require('express');

const blogController = require('../controllers/blogs.controller');

const blogRouter = express.Router();

blogRouter.post('/', blogController.postBlogs);
blogRouter.get('/', blogController.getBlogs);
blogRouter.get('/:id', blogController.getBlogById);
blogRouter.put('/:id', blogController.updateBlogById);
blogRouter.delete('/:id', blogController.deleteBlogById);

module.exports = blogRouter;