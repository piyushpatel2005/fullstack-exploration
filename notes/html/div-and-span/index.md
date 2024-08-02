# Div and Span Elements

Most of the tags in HTML have meaning. For example, headings are used for applying heading to the content. `<p>` tag is used for paragraphs. `<a>` tag is used for links. But there are two tags in HTML that are used for grouping elements and applying styles to them. These tags are `<div>` and `<span>`.

## Div Element

`<div>` stands for division. It is a block-level element that is used to group elements for applying styles to them. It is used to group block-level elements like headings, paragraphs, lists, etc. It is used to create sections and create layouts in the web page. It is used to apply styles to the group of elements.

### Syntax

```html
<div>
    <!-- Content goes here -->
</div>
```

Write below code in your `index.html` file.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Div Element Example</title>
    <style>
        div {
            background-color: lightblue;
            font-size: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="image.jpg" alt="Div example image" />
        <p>This is an example of div element.</p>
    </div>
</body>
</html>
```

You will see it output as below. 

![Div Element Example](images/div-button.png)

In this case, we want the button to be below the our image. We can use the `<div>` tag to group the image and the button together.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Div Element Example</title>
</head>
<body>
<div class="container">
    <img src="image.jpg" alt="Div example image" />
    <div>
        <button>Click me</button>
    </div>
</div>
</body>
</html>
```

Again, if we want to move image and the button together, we may have to group them into single element. That's when we can wrap both of them in single `<div>` tag.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Div Element Example</title>
</head>
<body>
<div class="container">
    <div style="width: 100px; margin: 0 auto;">
        <img src="image.jpg" alt="Div example image"/>
        <div>
            <button>Click me</button>
        </div>
    </div>
</div>
</body>
</html>
```

In this example, even though we moved image on the right side, the button also moves below the image because both of them are wrapped in a single `<div>` tag which we moved to the right using `margin: 0 auto;`. Don't worry about these styles, you will learn about them in the CSS tutorials.

### Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Div Element Example</title>
    <style>
        div {
            background-color: lightblue;
            font-size: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Div Element Example</h1>
        <p>This is an example of div element.</p>
    </div>
</body>
</html>
```

In this example, we have a `div` element whihc contains heading and paragraph. We have applied background color and font size to the `div` element. The content inside the `div` element will have a light blue background color and font size of `10px`.

## Span Element

`<span>` is an inline element that is used to group elements for applying styles to them. It is used to group inline elements like links, images, etc. It is used to apply styles to the group of elements.

For example, if we want to style our selection of text, we can use the `<span>` tag.

### Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Span Element Example</title>
    <style>
        span {
            color: red;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <p>This is an <span>red</span> colored text.</p>
</body>
</html>
```

Note that, `div` and `span` shouldn't be used that often if there are alternatives like `em` or `strong` for selecting elements while having semantic meaning.

There are also few new HTML5 tags like `section`, `article`, `header`, `footer`, `nav`, `aside`, etc. which are used to create semantic HTML structure. They can often replace `div` tags as you will learn about those in upcoming tutorial.