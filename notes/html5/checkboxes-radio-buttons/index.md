# Checkboxes and Radio Buttons in HTML Forms

Checboxes and radio buttons are quite common in HTML forms. They are used to select multiple options or a single option from a list of options.

## Checkbox Input

The `checkbox` input type is used for checkboxes. The checkboxes are used to select multiple options from a list of options. The `name` attribute is used to group the checkboxes together.

```html
<p>What toppings do you want on your Pizza?</p>
<input type="checkbox" name="tomatoes" value="Tomatoes" checked>
<label for="tomatoes">Tomatoes</label><br>
<input type="checkbox" name="onion" value="Onion">
<label for="onion">Onion</label><br>
<input type="checkbox" name="jalapeno" value="Jalapeno">
<label for="jalapeno">Jalapeno</label><br>
<input type="checkbox" name="mushroom" value="Mushroom">
<label for="mushroom">Mushroom</label><br>
```

## Radio Input

The `radio` input type is used for radio buttons. Only one radio button can be selected. This is useful when you want users to select only one option from a list of options.

```html
<p>Favorite Food: </p>
<input type="radio" id="pizza" name="food" value="Pizza">
<label for="pizza">Pizza</label><br>
<input type="radio" id="burger" name="food" value="Burger">
<label for="burger">Burger</label><br>
<input type="radio" id="pasta" name="food" value="Pasta">
<label for="pasta">Pasta</label><br>
```

## Complete Example

Try below code in your HTML file and open it in a browser to see the checkboxes and radio buttons in action.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Checkboxes and Radio Buttons</title>
</head>
<body>
    <h1>Checkboxes and Radio Buttons</h1>
    <form>
        <p>What toppings do you want on your Pizza?</p>
        <input type="checkbox" name="tomatoes" value="Tomatoes" checked>
        <label for="tomatoes">Tomatoes</label><br>
        <input type="checkbox" name="onion" value="Onion">
        <label for="onion">Onion</label><br>
        <input type="checkbox" name="jalapeno" value="Jalapeno">
        <label for="jalapeno">Jalapeno</label><br>
        <input type="checkbox" name="mushroom" value="Mushroom">
        <label for="mushroom">Mushroom</label><br>

        <p>Favorite Food: </p>
        <input type="radio" id="pizza" name="food" value="Pizza">
        <label for="pizza">Pizza</label><br>
        <input type="radio" id="burger" name="food" value="Burger">
        <label for="burger">Burger</label><br>
        <input type="radio" id="pasta" name="food" value="Pasta">
        <label for="pasta">Pasta</label><br>
    </form>
</body>
</html>
```

1. Try selecting multiple toppings for the pizza. You will see that the browser allows you to select multiple toppings by using checkboxes. Notice that tomatoes are selected by default because I have `checked` attribute assigned to it.
2. Try selecting a favorite food. You will see that the browser allows you to select only one favorite food by using radio buttons.