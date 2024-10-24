# How to Add CSS

In order to apply CSS to HTML document, you need a way to embed CSS into HTML document. There are three ways to add CSS to any HTML document.

1. **Using Style Attribute**: You can add CSS styles directly to the HTML elements using the `style` attribute. This is the least recommended way to add CSS as it mixes the content with the presentation.
2. **Using Style Element**: You can add CSS styles within the `<style>` element in the `<head>` section of the HTML document. This is a better way to add CSS as it separates the content from the presentation.
3. **External CSS**: You can add CSS styles in a separate file with `.css` extension and link it to the HTML document using the `<link>` element. This is the best way to add CSS as it separates the content from the presentation and also allows you to reuse the CSS across multiple HTML documents.

## Inline CSS

You can use CSS directly in HTML elements using `style` attribute for each element. This is the least recommended way to add CSS as it mixes the content with the presentation. Another problem is that the styles are repeated for each element even though they have the same styles applied to them.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Using Style Attribute</title>
</head>
<body>
    <h1 style="color: red;">Heading for the Page</h1>
    <p style="color: red;">This is a sample paragraph</p>
</body>
</html>
```

In this example, both `h1` and `p` elements have exactly the same styles applied to them still the styles are repeated for each element. This is difficult to maintain. If you had 10 different elements the same styles applied on a single page and you wanted to modify the styles, you would have to modify each element's style individually. If you miss one, the style will not be what you would have expected.

## Using Style Element

To solve the problem with `style` attribute, you can use `<style>` element in the `<head>` section of the HTML document. This way you can define the styles in one place and apply them to multiple elements in a given document.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Using Style Element</title>
    <style>
        h1, p {
            color: red;
        }
    </style>
</head>
<body>
    <h1>Heading for the Page</h1>
    <p>This is a sample paragraph</p>
</body>
</html>
```

In this case, we didn't have to repeat the styles for each element. We defined the styles for `h1` and `p` elements in one place and applied them to multiple elements. This is a better way to add CSS to HTML document. However, nowadays most websites will have a lot of pages and you would prefer to be consistent in your styles across multple pages. With this approach, you would have to write the same styles for each page in their own HTML document. This is yet again difficult to maintain if you have more than one HTML document.

## External CSS

To solve the problem with internal CSS, you can use external CSS files. You can define the styles in a separate file with `.css` extension and add those styles to the HTML document using the `<link>` element. The `<link>` element is used to link a stylesheet to a HTML document. This way you can define the styles in one place and apply them to multiple HTML documents by simply adding `<link>` element to each of those and referencing the stylesheet you want to apply.

This pattern also separates the content from the presentation. So, you're not mixing two different coding in the same file. If you want to change the styles, you can simply change the styles in the external CSS file and all the HTML documents linked to that stylesheet will automatically get the updated styles.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Using External CSS</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1>Heading for the Page</h1>
    <p>This is a sample paragraph</p>
</body>
</html>
```

In above HTML document, we have linked the `styles.css` file to the HTML document. In this case, the `styles.css` file should be in the same directory as this HTML document. If it's in a different directory, you would have to provide the path to the CSS file in the `href` attribute of the `<link>` element. The content of the `styles.css` file would look like below.

```css
h1, p {
    color: red;
}
```

This is the best way to add CSS and is the most recommended way to add CSS to HTML documents.

You could also separate your styles into multiple CSS files based on the type of styles you want to apply. For example, you could have a `layout.css` file for layout styles, `animations.css` for applying animations, etc. This way you can keep your styles organized and easy to maintain. However, creating separate files for small CSS styles is not recommended as it would increase the number of HTTP requests made by the browser to fetch the CSS files. So, it's better to combine small CSS files into a single file.