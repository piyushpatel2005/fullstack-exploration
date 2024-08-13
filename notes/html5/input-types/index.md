# HTML Form Input Types

In HTML, there are different types of input elements that can be used in forms. These can be created by changing the `type` attribute of the `input` element. Here are some common input types:

1. `text` - Used for single-line text input.
2. `password` - Used for password input. The characters are masked.
3. `email` - Used for email input. The browser will validate the input to ensure it is a valid email address.
4. `number` - Used for number input. The browser will validate the input to ensure it is a valid number.
5. `submit` - Used for submitting the form.
6. `reset` - Used for resetting the form.
7. `button` - Used for custom buttons.
8. `file` - Used for file uploads.
9. `date` - Used for date input.
10. `time` - Used for time input.
11. `url` - Used for URL input. The browser will validate the input to ensure it is a valid URL.
12. `search` - Used for search input.
13. `range` - Used for range input.
14. `color` - Used for color input.


## Types of Input Elements
Let's see their examples one by one.

### Text Input

The `text` input type is used for single-line text input. This is the default input type if no type is specified as the default input type. This is usually used for fields like username, first name, last name, etc.

- The `type` attribute specifies the input type.
- It can have `id` attribute which can be used in `<label>` tag to assign a label to the input field.
- It can also have `name` attribute which is used to identify the input field when the form is submitted. 
- The `placeholder` attribute can be used to provide a hint to the user about what to enter in the input field.

```html
<label for="firstname">First Name: </label>
<input type="text" id="firstname" name="firstname" placeholder="Enter your first name">
```

- You can also specify the `maxlength` and `minlength` attribute to limit the number of characters that can be entered in the input field.
- The `required` attribute can be used to make the input field mandatory. The form will not be submitted unless the required fields are filled.
- The `disabled` attribute can be used to disable the input field. The user will not be able to enter any value in the input field.
- The `readonly` attribute can be used to make the input field read-only. The user will not be able to edit the value in the input field.
- The `size` attribute can be used to specify the width of the input field in characters.

```html
<label for="username">Username: </label>
<input type="text" id="username" name="username" placeholder="Enter your username" minlength="5" maxlength="20">
```

### Password Input

The `password` input type is used for password fields. The characters entered in the field are masked for security. You might have seen this often in login forms.

```html
<label for="password">Password: </label>
<input type="password" id="password" name="password" placeholder="Enter your password">
```

### Email Input

The `email` input type is used for email fields. The browser will validate the input to ensure it is a valid email address. This is useful for forms where you need to collect email addresses. Unless the input is a valid email address, the form will not be submitted.

```html
<label for="email">Email: </label>
<input type="email" id="email" name="email" placeholder="Enter your email">
```

### Number Input

The `number` input type is used for number fields. The browser will validate the input to ensure it is a valid number. You can also specify the minimum and maximum values for the input and browser will perform the validations for those as well.

```html
<label for="item-quantity">Quantity: </label>
<input type="number" id="item-quantity" name="quantity" min="1" max="5">
```

### Submit Button

Once you've created a form, you will need to submit the form. For that we have a `submit` type. The `submit` input type is used for submitting the form. When this button is clicked, the form data is sent to the server for processing.

```html
<input type="submit" value="Submit">
```

### Reset Button

What if you want to reset the form to its original state? The `reset` input type is used for resetting the form. When this button is clicked, all the form fields are cleared and the form is reset to its initial state.

```html
<input type="reset" value="Reset">
```

### Button

The `button` input type is used for custom buttons. You can define the behavior of the button using JavaScript.

```html
<button onclick="alert('Hello World!')">Click Me</button>
```

You might wonder what's the difference between `button` and `submit` type. The `submit` type is used to submit the form data to the server, whereas the `button` type is used for custom buttons. You can define the behavior of the button using JavaScript, but it's covered here for completeness. You can make the button act like a submit button using JavaScript.

### File Input

The `file` input type is used for file uploads. When you click on the `Browse` button, you will see window open to select a file from your system. This allows users to select files from their local system and upload them to the server.

```html
<label for="file">Select a file: </label>
<input type="file" id="file" name="file">
```

### Date Input

The `date` input type is used for date input. This allows users to select a date from a calendar. The browser will provide a date picker for selecting the date.

```html
<label for="birthdate">Date of Birth: </label>
<input type="date" id="birthdate" name="birthdate">
```

### Time Input

The `time` input type is used for time input. This allows users to select a time from a time picker. The browser will provide a time picker for selecting the time.

```html
<label for="meeting-time">Choose a time for the meeting: </label>
<input type="time" id="meeting-time" name="meeting-time">
```

### URL Input

The `url` input type is used for URL input. The browser will validate the input to ensure it is a valid URL. This is useful for forms where you need to collect URLs.

```html
<label for="website">Website: </label>
<input type="url" id="website" name="website" placeholder="Enter the website URL">
```

### Search Input

The `search` input type is used for search input. The browser will provide a search box for entering search queries.

```html
<label for="search">Search: </label>
<input type="search" id="search" name="search" placeholder="Search...">
```

### Range Input

The `range` input type is used for selecting a value from a range of values. The browser will provide a slider for selecting the value.

```html
<label for="volume">Volume: </label>
<input type="range" id="volume" name="volume" min="0" max="100">
```

### Color Input

The `color` input type is used for selecting a color. The browser will provide a color picker for selecting the color.

```html
<label for="color">Choose a color: </label>
<input type="color" id="color" name="color">
```

### Hidden Input

The `hidden` input type is used to store data that is not visible to the user. This data is sent to the server when the form is submitted.

```html
<input type="hidden" name="userid" value="12345">
```

## Fieldset Element

The `fieldset` element is used to group related form elements together. You can use the `legend` element to provide a caption for the `fieldset`.

```html
<fieldset>
  <legend>Personal Information</legend>
  <label for="firstname">First Name: </label>
  <input type="text" id="firstname" name="firstname" placeholder="Enter your first name"><br>
  <label for="lastname">Last Name: </label>
  <input type="text" id="lastname" name="lastname" placeholder="Enter your last name"><br>
</fieldset>
```


## Complete Example

Write below code in a file and open it in a browser to see the form in action.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Form Elements</title>
</head>
<body>
    <h1>Form Elements</h1>
    <form action="/submit" method="get">
        <fieldset>
            <legend>Personal Information</legend>
            <label for="firstname">First Name: </label>
            <input type="text" id="firstname" name="firstname" placeholder="Enter your first name"><br>
            <label for="lastname">Last Name: </label>
            <input type="text" id="lastname" name="lastname" placeholder="Enter your last name"><br>
            <label for="birthdate">Date of Birth: </label>
            <input type="date" id="birthdate" name="birthdate"><br>
        </fieldset>
        <label for="email">Email: </label>
        <input type="email" id="email" name="email" placeholder="Enter your email"><br>
        <label for="item-quantity">Quantity: </label>
        <input type="number" id="item-quantity" name="quantity" min="1" max="5"><br>
        <input type="hidden" name="userid" value="12345">
        <input type="submit" value="Submit">
        <input type="reset" value="Reset">
    </form>
</body>
</html>
```

I have purposefully kept `method` as `GET` so that you can see what it passes to the output server in query string in the address bar.

1. Next, try entering invalid email address and press submit button. You will see a message saying "Please include an '@' in the email address." This is because the browser validates the email input field to ensure it is a valid email address.
2. Similarly, try entering a number less than 1 or greater than 5 in the quantity field. You will see a message saying "Please select a value that is no more than 5." This is because the browser validates the number input field to ensure it is within the specified range.
3. Try resetting the form. You will see that the browser resets the form fields to their initial values.
4. Try submitting the form. You will see that the browser sends the form data to the server using the GET method and displays the form data in the address bar.