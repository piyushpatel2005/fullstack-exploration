# HTML Select and Option Elements

This tutorial explains about two important elements in HTML5. These are used to create dropdown lists like experience in the web UI.

## Select and Option

The `<select>` element is used to create a drop-down list. The `<option>` elements inside the `<select>` element define the available options in the list. This is useful when there are lots of options to choose from and it may be inconvenient to display them all.

The syntax for this type of element is as follows:

```html
<label for ="cuisine">Choose your Favorite Cuisine:</label>
<select id="cuisine" name="cuisine">
  <option value="italian">Italian</option>
  <option value="thai">Thai</option>
  <option value="chinese">Chinese</option>
  <option value="mediterranean">Mediterranean</option>
</select>
```

The `value` attribute is used to specify the value of the option. The text inside the `<option>` tags is what the user sees in the drop-down list.

## Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>HTML Select and Option Elements</title>
</head>
<body>
    <h2>HTML Select and Options</h2>
    <label for="city">Choose your city:</label><br>
    <select name="city">
        <option value="mumbai">Mumbai</option>
        <option value="toronto">Toronto</option>
        <option value="london">London</option>
        <option value="paris">Paris</option>
        <option value="newyork">New York</option>
    </select>
</body>
</html>
```

### Option groups

The `<optgroup>` tag is used to group options in a select box. It uses `label` attribute to display headings for each options.

Try below code in your browser and see the result of it. It will group cities by the country using `<optgroup>` tag. Also you can have different numbers of `option`s for each `optgroup`.

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Select and Option Elements</title>
</head>
<body>
<h2>HTML Select and Options</h2>
<label for="country">Choose your Favorite City:</label><br>
<select name="country">
    <optgroup label="USA">
        <option value="losangeles">Los Angeles</option>
        <option value="newyork">New York</option>
        <option value="miami">Miami</option>
        <option value="seattle">Seattle</option>
    </optgroup>
    <optgroup label="India">
        <option value="delhi">Delhi</option>
        <option value="mumbai">Mumbai</option>
        <option value="chennai">Chennai</option>
        <option value="jaipur">Jaipur</option>
    </optgroup>
    <optgroup label="Canada">
        <option value="vancouver">Vancouver</option>
        <option value="montreal">Montreal</option>
        <option value="toronto">Toronto</option>
    </optgroup>
</select>
</body>
</html>
```

## HTML5 Data Lists

A data list is used to form a list of auto suggestions. The value of the `list` attribute in the `<input>` tag is bound to the `<datalist>` elements with their corresponding `id` attribute. Each of the `<option>` element need `value` attribute reprsenting an auto-suggetsion into the input. When user starts typing in the input box, they will get auto-suggestion based on the option values.

Try below example in the code editor and view it in the browser. Next, start typing single character, you will get list of items starting with that character to pick from.

```html
<!DOCTYPE html>
<html>
<head>
    <title>
        HTML Data Lists
    </title>
</head>
<style>
    button{
        padding: 5px;
        margin-top: 5px;
    }
</style>
<body>
<h1> Data Lists</h1>
<p>Data Lists are used to create auto-suggestions.</p>
<form method="POST">
    <label for="meeting-time">Choose time to Meet:</label><br>
    <input list="time-for-meeting" id="meeting-time" name="meeting-time" />
    <datalist id="time-for-meeting">
        <option value="9:00AM"></option>
        <option value="9.30AM"></option>
        <option value="10:00AM"></option>
        <option value="10:30AM"></option>
        <option value="11:00AM"></option>
        <option value="11:30AM"></option>
        <option value="12:00PM"></option>
        <option value="12:30PM"></option>
        <option value="1:00PM"></option>
        <option value="1:30PM"></option>
        <option value="2:00PM"></option>
        <option value="2:30PM"></option>
        <option value="3:00PM"></option>
        <option value="3:30PM"></option>
        <option value="4:00PM"></option>
        <option value="4:30PM"></option>
        <option value="5:00PM"></option>
        <option value="5:30PM"></option>
    </datalist><br>
    <button type="submit">Submit</button>
</form>
</body>
</html>
```