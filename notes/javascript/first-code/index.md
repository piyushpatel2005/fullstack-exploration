# Javascript First Code

In this tutorial, you're going to explore your first Javascript code. You will learn how to write Javascript code in an HTML file and how to run it in a browser.

## Writing Javascript in Browser

In order to run Javascript in the browser, you can use `<script>` tag. The `<script>` tag is used to define a client-side script, such as Javascript. So, type below HTML code in a file and open it in a browser.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>First Javascript Code</title>
</head>
<body>
    <h1>My First Javascript Code</h1>
    <script>
        console.log("Hello, World!");
    </script>
</body>
</html>
```

In this code, we don't have anything interesting in the `body` but I've added a `script` tag in the `body` section. The `script` tag contains a Javascript code that logs "Hello, World!" to the console. Now, when you open this web page in the browser, you will see this message in the Javascript console. So, probably you can keep it open on the side while you explore different code.

> **Note:** You can open the Javascript console in the browser by pressing `F12` key and then selecting the `Console` tab. Alternatively, you can right click on any page in browser and select `Inspect` option. Then, select the `Console` tab.

> Also note that going forward, I will write only the code inside the `script` tag. You can copy this code and paste it inside the `script` tag in your HTML file.

When you open this web page and see the `Console` tab, you will see message "Hello, World!" printed there.

Notice that each line of command is terminated by semi-colon (`;`). This is like an indicator to the Javascript interpreter that the command is complete. You can write multiple commands in a single line but it is a good practice to write each command in a separate line. You can notice that it prints the thing inside double quotes. Try changin this text, and refresh your page, you will new text displayed. 

In this case, `console` is an object and we are invoking a method `log` on it. Don't worry about these details for now as you will learn about those later in the tutorials. You can change

## Running using Node.js

If you're using node.js to run Javascript code, you can use `console.log` to print messages to the console. You can run the Javascript code in the terminal using `node` command. For example, you can create a file named `hello.js` and write below code in it.

```javascript
console.log("Hello, World!");
```

Then, you can run this file using below command.

```bash
node hello.js
```

## Javascript comments

Now, before we move any further, I want you to know about comments. Comments are used to explain the code and are ignored by the Javascript interpreter. You can write comments in Javascript using `//` for single line comments and `/* */` for multi-line comments. Below is an example of comments in Javascript.

```javascript
// This is a single line comment
console.log("Example print statement");
/* This is a multi-line comment
   You can write multiple lines here */
console.log("Another print statement");
```

When you modify the code in your script with above snippet, you will see that the comments are not printed in the console. This is because comments are ignored by the Javascript interpreter. They are used in the code to explain about the code. So, while you're learning Javascript, you can write your notes in the code using comments because you might forget what you've learned. So, comments will give you a quick reference to what each of the functions or statements do.

In practice, the code will have comments only for complicated piece of logic. 