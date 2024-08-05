# HTML Lists

HTML lists are used to display information in a structured way. There are three types of lists in HTML:

1. **Ordered List**: An ordered list is a list of items where each item is marked with numbers.
2. **Unordered List**: An unordered list is a list of items where each item is marked with bullets.
3. **Description List**: A description list is a list of terms and their descriptions.

## Ordered List

An ordered list is created using the `<ol>` tag. Each list item is marked with a number. These can be used to display ordered collection of items like your favorite movies in sequential order or your favorite food. The list items are enclosed in `<li>` tags.

### Syntax

The syntax for creating an ordered list is as below.

```html
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
```

### Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Ordered List Example</title>
</head>
<body>
    <h2>My Favorite Movies</h2>
    <ol>
        <li>Equalizer</li>
        <li>The Godfather</li>
        <li>The Dark Knight</li>
    </ol>
</body>
</html>
```

## Unordered List

An unordered list is created using the `<ul>` tag. Each list item is marked with a bullet by default. These can be used to display a collection of items where the order is not important. Just like ordered lists, the list items are enclosed in `<li>` tags. If you look at it carefully, it's syntax is same as ordered list, just the tag name is different.

### Syntax

The syntax for creating an unordered list is as below.

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

### Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Unordered List Example</title>
</head>
<body>
    <h2>Fruits to Buy</h2>
    <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
    </ul>
</body>
</html>
```

## Description List

A description list is created using the `<dl>` tag. It is used to display a list of terms and their descriptions. Each term is marked with a `<dt>` tag and each description is marked with a `<dd>` tag.

### Syntax

The syntax for creating a description list is as below.

```html
<dl>
    <dt>Term 1</dt>
    <dd>Description 1</dd>
    <dt>Term 2</dt>
    <dd>Description 2</dd>
    <dt>Term 3</dt>
    <dd>Description 3</dd>
</dl>
```

### Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Description List Example</title>
</head>
<body>
    <h2>Programming Languages and their Usage</h2>
    <dl>
        <dt>HTML</dt>
        <dd>This stands for HyperText Markup Language and is used to display content on the web.</dd>
        <dt>CSS</dt>
        <dd>Cascading Style Sheets is used for styling the content of the web.</dd>
        <dt>JavaScript</dt>
        <dd>JavaScript is a programming language that enables you to interact with web pages.</dd>
    </dl>
</body>
</html>
```