# HTML Forms

HTML forms are used to collect user input. You might have encountered with forms when you sign up or fill up any form with your information. They are very common across the web nowadays. The most common forms use `<input>` tag to create form fields. Forms are used to collect different types of user input like text, password, email, number, etc. and for each of the inputs there are different types of `input` elements.

The basic structure of an HTML form is as follows:

```html
<form action="submit.php" method="post">
    <!-- form elements go here -->
</form>
```

## Example

Type the following in your `index.html` file.

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Forms</title>
</head>
<body>
    <form action="submit.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
```

In this example, we used `<label>` tag to connect the descriptive text to the `<input>` tag for that field. The `for` attribute of `<label>` tag connects to the `id` attribute of the `<input>` tag.

A form can mostly have below attributes:

1. `action` - Specifies the URL where the form data will be sent when the form is submitted. This is usually a server-side script that processes the form data.
2. `method` - Specifies the HTTP method used when submitting the form. The most common methods are `GET` and `POST`. The `GET` method appends the form data to the URL in the form of query parameters like `https://example.com/input=value&input2=value2`, while the `POST` method sends the form data in the request body. The `POST` method is more secure and is used when the form contains sensitive information like passwords. If you don't specify the `method` attribute, the default is `GET`.


There are few more attributes that can be used with the `<form>` tag, but these are the most common ones.

Also notice that we used `type` attribute in the `<input>` tag to specify the type of input field. Here, we have four different types: `text`, `email`, `password`, and `submit`. The `text` type is used to get single-line text input, `email` type is used to get email input, `password` type is used to get password input, and `submit` type is used to submit the form.

### `input` Attributes:

HTML `<input>` tag can have below most common attributes:

1. `type` - Specifies the type of input element.
2. `name` - Specifies the name of the input element. This value cannot be empty and must be unique among the form elements.
3. `value` - Specifies the value of the input element. This is the value passed to the backend when form is submitted.
4. `id` - Specifies a unique id for the input element. This is used to connect to the `label` element. This allows you to click on the text of the `label` to select the input element. Try clicking on "Name:" in the example above.
5. `placeholder` - Specifies a short hint that describes the expected value of the input element. This is used to suggest what kind of input is expected from the user.

A single webpage can have multiple different forms. Each form can be used to collect different set of information from the user. For example, a single web page may include form for sign up and login. If the user is signed up, they can login else they can register and sign up.

Below form also has a `textarea` element which is used to get multi-line text input.

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Forms</title>
</head>
<body>
    <form method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        <label for="feedback">Feedback:</label>
        <textarea id="feedback" name="feedback"></textarea><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
```

Notice that you can enter longer text in the `textarea` element as compared to the `input` element. You'll learn more details on these input types in upcoming tutorials.
