# Web Interaction in Javscript

This tutorial provides first taste of web interactivity in Javascript.

Below, I have written a simple HTML webpage which displays "Hello, World!" greeting. You can copy this code and paste it in an HTML file. Then, open this file in a browser and you will see the greeting message.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Interactivity</title>
    <style>
        h3 {
            color: teal;
        }
        #name {
            background-color: teal;
            color: white;
            padding: 2px;
        }
    </style>
</head>
<body>
    <h1>Web Interactivity</h1>
    <h3>Hello, <span id="name">World</span>!</h3>
    <button>Change Name</button>
</body>
</html>
```

I've also applied little bit of styling to the text with color and background just to make them look appealing. In the past webpages were like this without any interesting interaction. You could only see static content in the web. But now, with Javascript, you can make your webpages interactive.

Now, let's add `<script>` tag in the `body` section of the HTML file. This script will change the name displayed in the webpage when you click on the button. Copy this script and paste it in the HTML file with below code.

```html
<script>
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        const name = prompt('What is your name?');
        document.getElementById('name').textContent = name;
    });
</script>
```

Don't worry if you don't understand this because I haven't covered it. Just copy and paste this content.
In this case, basically, I'm selecting the button element using `document.querySelector` method and then adding an event listener to it to listen for `click` event. When you click on the button, it will prompt you to enter your name. Then, it will update the text content of the HTML element with id `name` with the name you entered.

So, just click on `Change Name`` button and enter your name. You will see the greeting message updated with your name.

I hope this gives you a little bit of encouragement of possibilities with Javascript. You will learn more about Javascript interactivity later in this series.