# Setting up Express.js

In the previous tutorial, you saw what Express code looks like compared to pure Node.js. This tutorial will show you how to set up Express.js in your project.

Before moving forward with this tutorial, make sure you have Node.js and npm (Node package manager) installed on your machine. You can check if you have Node.js installed by running the following command in your terminal:

```bash
node -v
npm -v
```

If you don't have Node.js installed, please install it from the official website and follow along.

## Setting up a new Node.js project

To set up a new Node.js project, you need to create a new directory and run `npm init` command in that directory. This will create a `package.json` file which will store all the dependencies and scripts for your project.

```bash
mkdir learn-express
cd learn-express
npm init -y
```

The `-y` flag for `npm init` will automatically create a `package.json` file with the default values. If you don't specify this flag, it will ask you a series of questions to fill in the details for your project.

The contents of the `package.json` looks like this.

```json
{
  "name": "learn-express",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

This is a simple JSON configuration file used to keep track of your dependencies and scripts for the project. I will point out the what happens when you install a new package in the next section.

## Installing Express.js

To install Express.js, you need to run the following command in your terminal.

```bash
npm install express
```

This will download the latest version of Express.js from the npm registry and install it in your project. It will also add an entry in the `dependencies` section of your `package.json` file.

```json
"dependencies": {
  "express": "^4.21.1"
}
```

Here, it has installed the latest version of Express.js which is `4.21.1`. The `^` symbol in front of the version number means that it will install the latest version of Express.js that is compatible with the version `4.x.x`. If you want to install a specific version of Express.js, you can remove the `^` symbol and specify the version number.

The dependencies are stored in a folder called `node_modules` in your project directory. You should not modify anything in this folder. This is where all the dependencies for your project are stored. With this you're ready to write your first Express.js code. Let's recreate the same simple server code I had used in the last tutorial.

## Writing your first Express.js code

Create a new file called `index.js` in your project directory and write the following code in it.

```javascript
const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello there</h1>');
});

app.listen(3000, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

Now, you can run this server code using `node index.js` command in your termina and visit `http://localhost:3000` in your browser. You should see `Hello there` in the browser. 

```bash
node index.js
```

Now, let's modify the code to send a text response with message `Hello World`. You just have to modify the string inside the `res.send()` method.

Everytime you make changes to your code, you would have to stop the server using `Ctrl + C` and restart it using `node index.js` command. Again, visit `http://localhost:3000` in your browser and you should see the JSON response.

While develping your server code, it's quite common to modify your code and test it works as expected. It becomes very annoying if you have to repeatedly restart the server to test out your new changes. To resolve this, node community has built a tool called `nodemon` which watches the files in your project directory and restarts the server everytime you make changes to your code. To install `nodemon`, run the following command in your terminal.

```bash
npm install nodemon --save-dev
```

In this case, I have installed `nodemon` with flag `--save-dev`. This will add `nodemon` as a development dependency in your `package.json` file.

```json
  "devDependencies": {
    "nodemon": "^3.1.7"
  }
```

You now have `nodemon` installed in your project, but in order to use this, you would need to run the common `nodemon index.js` to start your server. It's generally good practice to add a `script` key in your `package.json` file to start the server using `nodemon`. Add the following script in the `scripts` section of your `package.json` file after the `test` command.

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js"
  },
```

With this, the `package.json` file looks like below.

```json
{
  "name": "learn-express",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.21.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.7"
  }
}
```

With this, you can simply run `npm run dev` command to start the server. This will run the command `nodemon index.js`. Check your browser and you should see the JSON response. Now, just modify the response message from `Hello World` to `Hi Everyone!` and save the file. You should see the changes reflected in the browser without having to restart the server. On the console, you can also see that the server has restarted automatically.
