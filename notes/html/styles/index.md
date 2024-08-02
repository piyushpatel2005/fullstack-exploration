# HTML Styles

In HTML, there are several ways to add styles to boring HTML webpages. 

## 1. Inline Styles

Styles can be added using the `style` attribute. The `style` attribute can be used to add inline styles to an element. Inline styles are styles that are applied directly to an element. The syntax for this would loook something like this.

```html
<tag style="property: value;">some content</tag>
```

In this case, we use `style` attribute and the styles are applied using the `property: value;` syntax. Here is an example of how to use inline styles.

```html
<p style="color: red;">This is a paragraph with red color.</p>
```

In this case, I've applied text color as red to the paragraph.
You can also apply multiple styles in single `style` attribute like so. Notice that each style is separated by a semicolon (`;`).

```html
<p style="color: red; background-color: yellow;">This is a paragraph with red color and font size 20px.</p>
```

The problem with this approach is that we are combining HTML and CSS in the same document. It may be less readable. Also, it's less maintainable. What if you want to apply the same style to `p` and `div` elements? You have to repeat the same style for each element. This is where internal and external styles come into play.

## 2. Style Tag

Internal styles are styles that are defined within the `<style>` tag in the `<head>` section of the HTML document. Internal styles are applied to the entire document. The syntax for this would look something like this.

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: red;
            background-color: yellow;
            font-size: 20px;
        }
        
        div {
            color: blue;
            background-color: green;
        }
    </style>
</head>
<body>
    <p>some content</p>
    <div>
        <p>Another paragraph inside div</p>
    </div>
</body>
</html>
```

In above example, I have used `<style>` tag to define styles for the paragraph tag. The styles are applied to all the paragraph tags in the document and I've also defined another style for `div` element which will be styled with `blue` color and `green` background. So, we can apply styles to multiple elements using style tag. This is also called internal styles.

This is better than inline styles because we can define common styles once in single location. However, again what if you want to apply the same styles to multiple HTML documents? You will end up defining the same `style` element in all those documents. This is where external styles come into play.

## 3. External Styles

External styles are styles that are defined in a separate CSS file. External styles are applied to the entire document. The syntax for this would look something like this.

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <p>some content</p>
    <div>
        <p>Another paragraph inside div</p>
    </div>
</body>
</html>
```

In above example, I have used `<link>` tag to link to an external CSS file called `styles.css`. The styles are defined in `styles.css` file in the same directory. Here is how `styles.css` file looks like.

```css
p {
    color: red;
    background-color: yellow;
    font-size: 20px;
}
```

This is the preferred way to add styles to HTML documents. In this case, the styles are defined at a single location for all the HTML documents. So, it's more maintainable in the first places. In HTML, we are not mixing those CSS styles which makes the code more readable. You can learn more about CSS at [CSS Tutorial](../../css/).