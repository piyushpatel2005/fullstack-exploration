# Textarea in HTML

The `<textarea>` element is used to create a multi-line text input field. It is useful when you want to allow users to enter large amounts of text, such as comments or large feedback messages. The size of the text area can be controlled using the `rows` and `cols` attributes.

The syntax for this type of element is as follows:

```html
<label for="feedback">Enter your feedback:</label><br>
<textarea id="feedback" name="feedback" rows="4" cols="50"></textarea>
```

## Example:

Try below code in your text editor with `index.html` file and open the file using a web browser. I have applied some styles using CSS which has changed the look of the web page in `<style>` element. This is just to get you familiar with the styles in HTML but you can ignore it for now.

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Textarea Example</title>
    <style>
        input, textarea {
            padding: 10px;
            margin: 10px;
            width: 30%;
        }

        input[type=submit] {
            width: 10%;
            font-size: 1.2em;
        }
    </style>
</head>
<body>
    <h2>User Comments</h2>
    <form method="post">
        <label for="name">Your name:</label><br>
        <input type="text" id="name" name="name" placeholder="Name"><br>
        <label for="email">Your email:</label><br>
        <input type="email" id="email" name="email" placeholder="Email address"><br>
        <label for="feedback">Enter your Comment:</label><br>
        <textarea id="feedback" name="feedback" rows="4" cols="50" placeholder="Enter your Comment..."></textarea><<br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
```

Next, change the `rows` and `cols` attributes in the `<textarea>` element to see how it affects the size of the text area. You can also change the `placeholder` attribute to display a default message in the text area.

The `textarea` can be very useful for multi line input from the user. You can also restrict the number of characters that can be entered in the textarea using the `maxlength` attribute.

