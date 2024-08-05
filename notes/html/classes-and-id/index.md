# HTML Classes and ID

In HTML, classes and IDs are used to style and manipulate elements. They are used to apply CSS styles to elements and to select elements with JavaScript. These are just attributes and not tags and can be applied to any HTML element. One big difference between them is that the same class can be applied to multiple elements, but an ID can only be applied to one element.

## HTML Classes

Classes are used to apply the same style to multiple elements. 

To apply a class to an element, you use the `class` attribute. The value of the `class` attribute is the name of the class you want to apply. 

- You can apply multiple classes to the same element by separating them with a space.
- You can apply the same class to multiple HTML elements.

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .red {
            color: red;
        }
        .bold {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1 class="red">Red heading</h1>
    <p class="red bold">
        This is a red and bold paragraph.
    </p>
</body>
</html>
```

In this example, we have two classes: `red` and `bold`. The `red` class changes the text color to red, and the `bold` class makes the text bold. The `h1` element has the `red` class, so the text color is red. The `p` element has both the `red` and `bold` classes, so the text color is red and the text is bold.

## HTML IDs

IDs are used to apply a unique style to a single element.

To apply an ID to an element, you use the `id` attribute. The value of the `id` attribute is the name of the ID you want to apply.

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        #green {
            color: green;
        }
        .red {
            color: red;
        }
    </style>
</head>
<body>
    <h1 id="green">Green heading</h1>
    <p class="red">
        This is a red paragraph.
    </p>
    <p>This is unstyled paragraph.</p>
</body>
</html>
```

In this example, we have two elements: `h1` and `p`. The `h1` element has the `green` ID, so the text color is green. The `p` element has the `red` class, so the text color is red. The second `p` element is unstyled because it does not have any classes or IDs.

Notice that the `id` selector in CSS uses a `#` symbol, while the class selector uses a `.` symbol. You will learn more about this in CSS selectors tutorial.

### ID as Anchor Links

IDs are also used as anchor links to navigate to a specific section of the page. You can use the `id` attribute to create an anchor link to a specific element on the page.

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        #top {
            color: red;
        }
    </style>
</head>
<body>
    <h1 id="top">Top heading</h1>
    <p>
        <a href="#top">Go to top</a>
    </p>
</body>
</html>
```

In this example, the `h1` element has the `top` ID. The `a` element has an `href` attribute with the value `#top`. When you click on the "Go to top" link, it will take you to the `h1` element with the `top` ID. This was a relatively small web page, but if you had a page with long scroll content, you could use anchor links to navigate to different sections of the page.

Try below examples to understand better. In below example, there is nothing fancy, I have just used some placeholder text using latin to fill the page so that we have a big webpage to scroll. Don't worry, I do not know Latin, I just used a placeholder text generator to generate the text.

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        #top {
            color: red;
        }
        p {
            font-size: 1.5em;
            padding: 0 25% 0 25%;
        }
    </style>
</head>
<body>
<h1 id="top">Top heading</h1>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
</p>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et  ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
</p>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
</p>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
</p>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
</p>

<p>
    <a href="#top">Go to top</a>
</p>
</body>
</html>
```

In above example, I have used `padding: 0 25% 0 25%;` in `p` tag. At the end, I have added a link to go to top of the page. When you click on the link, it will take you to the top of the page. When you click on this anchor tag, it should take you to the top of the webpage, that is the `h1` tag with id `top`. After clicking on the link, you can also notice that the URL in the browser address bar changes as well. This is because of the `#top` in the `href` attribute of the anchor tag. 

This is called as `fragment identifier`. It is used to identify a portion of a document that sits within a top-level document. It is used to navigate to a specific section of a document. 