# CSS Selectors

You saw a tiny example of CSS in the previous tutorial, you will now learn about CSS selectors in this lesson. 

## CSS Syntax

Again to recap, the basic syntax of CSS looks like this.

```css
selector {
    property1: value1;
    property2: value2;
}
```

The code for each selector block is enclosed in curly braces `{}` and indented for better readability.
Each CSS property and value are separated by a colon `:` symbol. Each property and value pair are separated by a semicolon `;` symbol. For readability, they are usually written in separate lines.

Here, the property could be different possible properties we can choose to style different HTML elements. These can includes properties like `color`, `background-color`, `font-size`, `border`, `background-image`, etc. The value is what sets different styles for each property. For example, you could set the `color` property to `red` or `white` or `black` or any other color you like. Similarly, you might prefer border with a radius or without a radius. All these little changes make your website look very different from others.

## What are CSS Selectors?

CSS selectors are used to select the HTML elements you want to style. You can select elements based on their tag name, class, id, attribute, etc. In HTML web page, there can be variety of scenarios where you want to style different elements differently. CSS selectors help you to do that. Let's look at some of the common CSS selectors.

### Element Selector

You can select any HTML element using the CSS element selector. These are elements with their own HTML tag in the document. HTML elements like `h1`, `p`, `div`, `img`, etc. are examples of element selectors.

```css
h1 {
    color: blue;
}

p {
    color: teal;
    text-align: justify;
}
```

This example selects all HTML elements with tag `h1` and applies blue color to them. Similarly, it also selects all `p` elements and applies teal color to them. It also aligns the text to justify. Notice that if you have more than one `h1` or `p` elements, all of them will have the same style applied to them with element selector. What if you want to apply some styles to only specific `p` elements? This is where class or id selectors can come in.

### ID Selector

CSS ID selectors are used to style elements with a given `id` attribute's value from the HTML document. For exmaple, if you want to select only the first `h2` element to have different style, you could apply the `id` attribute with `id=title` in the HTML markup and then you can select this specific `h2` element usingt the `#` symbol in CSS. Id selectors use the pound or hash `#` symbol followed by the id value.

```css
#title {
    color: red;
    font-size: 24px;
}
```

This example selects the element with id `title` and applies red color and font size of 24 pixels to it. You can only have one element with a given id in the HTML document. If you have more than one element with the same id, it is invalid HTML and the CSS will only apply to the first element with the given id.

### Class Selector

CSS class selectors are used to style elements with a given `class` attribute's value from the HTML document. Usually the same class can be applied to multiple HTML elements. So, this can be useful to group HTML elements with the same styles. For example, if your web page includes several sections with their own introduction section, you can apply `intro` class to each of those section and you can use the class selector `.intro`. Class selectors use the dot `.` symbol followed by the class value.

```css
.intro {
    font-weight: bold;
    color: lightblue;
}
```

### Global Selector

The global selector `*` selects all elements on the page. This can be useful when you want to apply a style to all elements on the page. For example, you can set the margin and padding to zero for all elements on the page.

```css
* {
    margin: 10px;
    padding: 10px;
}
```

### Combining Selectors

You can also group multiple selectors together to apply the same style to multiple elements. You can separate the selectors with a comma `,` symbol.

```css
h1, h2, h3 {
    color: green;
}
```

This example selects all `h1`, `h2`, and `h3` elements and applies green color to them.

### Child Selector

The child selector selects all elements that are **direct** children of a specified element. It is denoted by a greater than `>` symbol between two selectors. These selects only direct children elements of the parent element.

```css
div > p {
    color: lightblue;
}
```

This selects only `p` elements which are directly under the `div` element. It does not select `p` elements which are nested deeply inside other elements inside the `div` elements such as `p` contained inside `section` which in turn is inside `div` like below.

```html
<div>
    <p>This is direct child of div</p>
    <section>
        <p>This is not direct child of div</p>
    </section>
</div>
```

### Descendant Selector

The descendant selector selects all elements that are descendants of a specified element. It is denoted by a space between two selectors. These selects all non-direct children elements of the parent element.

```css
div p {
    color: purple;
}
```

This would select any `p` element as long it is under `div` element in the document tree even if it's nested deeply inside other elements. This would select deeply nested `p` element like below.

```html
<div>
    <section>
        <p>This is a nested paragraph</p>
    </section>
</div>
```

### Attribute Selector

You can also select elements based on their attributes. For example, you can select all elements with a specific attribute value. This is done by using square brackets `[]` with the attribute name and value. This is useful when you want to select elements with specific attribute values.

```css
input[type="text"] {
    padding: 10px;
    border: 1px solid lightgrey;
    border-radius: 5px;
}
```

This example selects all `input` elements with `type` attribute value of `text` and applies padding, border, and border radius to them.