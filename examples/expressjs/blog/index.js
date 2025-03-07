const express = require('express');
const path = require('path');
const blogRouter = require('./routes/blog.router');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to our blog' });
});

app.use ('/blogs', blogRouter);


app.listen(3000, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});