# HTML Script Tag

The `<script>` tag is used to embed executable code or data. The `<script>` element either contains scripting statements, or it points to an external script file through the `src` attribute.

## Embedded Javascript

The `<script>` element can contain embedded Javascript inside the same HTML document as shown in below example.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Script Tag Example</title>
</head>
<body>
    <h1>Script Tag Example</h1>
    <p id="demo">This is a paragraph.</p>
    <button id="modify">Modify above content</button>
    <script>
        const button = document.getElementById("modify");
        button.onclick = function() {
            document.getElementById("demo").innerHTML = "Hello World!";
        }
    </script>
</body>
</html>
```

In above example code, I've embedded little Javascript code inside the `<script>` tag. When the button is clicked, the content of the paragraph is changed to "Hello World!". Don't worry about this code if it doesn't make sense because we have not covered it in HTML tutorial. There are separate [Javascript Tutorials](../../javascript) which covers this in details.

## External Javascript

The `<script>` element can also point to an external script file using the `src` attribute. Below is an example of how to include an external Javascript file.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Script Tag Example</title>
</head>
<body>
    <h1>Script Tag Example</h1>
    <p id="demo">This is a paragraph.</p>
    <button id="modify">Modify above content</button>
    <script src="script.js" type="text/javascript"></script>
</body>
</html>
```

In above example, the `src` attribute points to a file named `script.js` in the same directory. The content of `script.js` file is as below.

```javascript
const button = document.getElementById("modify");
button.onclick = function() {
    document.getElementById("demo").innerHTML = "Hello World!";
}
```

The `<script>` element may also have the `type` attribute which specifies the scripting language of the code. The `type` attribute is not required in HTML5 as Javascript is the default scripting language, but I've included it just for reference.

The `<script>` element can be placed in the `<head>` or `<body>` section of an HTML document. When placed in the `<head>` section, the script is executed before the page is loaded. When placed in the `<body>` section, the script is executed after the page is loaded. Usually because it requires a separate network call, it would be better to place the `<script>` tag at the end of the `<body>` section. This way the contents of the `body` is loaded quickly and then the script is loaded.