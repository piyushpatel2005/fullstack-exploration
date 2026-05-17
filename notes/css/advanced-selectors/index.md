# Advanced CSS Selectors

You already know how to select elements by tag, class, and ID. But CSS has a much richer set of selectors that let you target elements based on their attributes, their relationship to other elements, and their position in the HTML. These can eliminate a lot of extra classes.

## Try It Yourself

Save this HTML. It has a form with various input types, a nav with nested lists, and an article — good targets for the attribute, child, and sibling selectors in this lesson.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Advanced Selectors</title>
    <style>
        /* Paste selector examples here */
    </style>
</head>
<body>
    <form>
        <label>Name</label>
        <input type="text" placeholder="Your name" required>

        <label>Email</label>
        <input type="email" placeholder="you@example.com">

        <label>Website</label>
        <input type="url" placeholder="https://example.com">

        <label>Accept terms</label>
        <input type="checkbox">

        <input type="hidden" name="csrf" value="token123">
        <button type="submit">Submit</button>
    </form>

    <nav>
        <ul class="menu">
            <li><a href="/">Home</a>
                <ul>
                    <li><a href="/sub">Sub page</a></li>
                </ul>
            </li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>

    <article>
        <h2>Article Heading</h2>
        <p>First paragraph right after the heading.</p>
        <p>Second paragraph.</p>
        <p>Third paragraph.</p>
    </article>
</body>
</html>
```

## Attribute Selectors

You can select elements based on whether they have an attribute, or what that attribute's value is.

```css
/* any input with a "required" attribute */
input[required] {
    border-color: red;
}

/* input whose type is exactly "email" */
input[type="email"] {
    background-image: url('/icons/email.svg');
}

/* a link pointing to an external site */
a[href^="https://"] {
    color: green;
}

/* a link to a PDF file */
a[href$=".pdf"] {
    color: red;
}

/* any element whose class contains "btn" anywhere */
[class*="btn"] {
    cursor: pointer;
}
```

The special characters are:
- `[attr]` — element has the attribute (any value)
- `[attr="value"]` — exact match
- `[attr^="value"]` — value **starts with**
- `[attr$="value"]` — value **ends with**
- `[attr*="value"]` — value **contains**

This is how you can style all external links differently, or add an icon to any file download link, without adding classes to every one manually.

## Descendant Selector (Space)

The space between two selectors means "inside" — any descendant, not just a direct child.

```css
/* any <a> that's inside a <nav>, at any nesting level */
nav a {
    text-decoration: none;
}

/* any <li> that's inside .sidebar */
.sidebar li {
    margin-bottom: 8px;
}
```

## Child Selector (`>`)

The `>` operator restricts the match to *direct* children only, not deeper descendants.

```css
/* only <li> that are direct children of .menu */
.menu > li {
    display: inline-block;
}

/* only <p> that are direct children of .card */
.card > p {
    font-size: 0.9rem;
}
```

This matters when you have nested structures. A `.menu > li` rule won't accidentally affect submenu items that are also `<li>` elements but are nested deeper.

## Adjacent Sibling Selector (`+`)

`+` selects the element that comes *immediately after* another element with the same parent.

```css
/* the <p> that immediately follows an <h2> */
h2 + p {
    font-size: 1.1rem;
    color: #555;
}

/* an input that's immediately after a label */
label + input {
    margin-left: 8px;
}
```

This is useful for styling the first paragraph after a heading differently — the classic "intro paragraph" pattern — without needing a class.

## General Sibling Selector (`~`)

`~` selects all elements that come *after* another element with the same parent (not just the immediately adjacent one).

```css
/* all <p> that come after an <h2> in the same container */
h2 ~ p {
    color: #666;
}

/* all siblings after a .active item */
.active ~ li {
    opacity: 0.5;
}
```

The difference from `+` is that `~` matches every matching sibling that follows, not just the next one.

## Combining Selectors

You can combine multiple selector types in one rule:

```css
/* an input of type checkbox that's also disabled */
input[type="checkbox"]:disabled {
    opacity: 0.5;
}

/* a.nav-link that's a direct child of nav */
nav > a.nav-link {
    font-weight: 600;
}
```

## Real-World Example: A Form

Here's how you might style a form using only advanced selectors, with minimal extra classes:

```css
/* label directly before an input */
label + input,
label + select,
label + textarea {
    display: block;
    width: 100%;
    margin-top: 4px;
}

/* required fields get a visual cue */
input[required] {
    border-left: 3px solid #e63946;
}

/* disabled inputs look different */
input[disabled] {
    background-color: #f4f4f4;
    cursor: not-allowed;
}

/* the submit button (last child of form) */
form > button[type="submit"] {
    margin-top: 16px;
}
```

This gets you a polished form without adding a single extra class to the HTML.

> **Tip:** When a selector is getting long and hard to read, a short, descriptive class is often cleaner than a deeply nested CSS combinator chain. Selectors are a tool, not a puzzle to solve.

Next up is [Pseudo-Classes](../pseudo-classes/index.md) — selectors that respond to user interaction and element state.
