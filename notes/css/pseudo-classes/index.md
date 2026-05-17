# CSS Pseudo-Classes

Pseudo-classes let you style elements based on their current state — whether the user is hovering over them, whether a checkbox is checked, or where an element sits in a list. The colon syntax (`:hover`, `:nth-child`) is what marks them as pseudo-classes.

## Try It Yourself

Save this HTML. It has buttons, inputs, a checkbox, nav links, a list, and a table — so you can try every pseudo-class in this lesson without changing the HTML.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Pseudo-Classes</title>
    <style>
        body { font-family: sans-serif; padding: 24px; }
        /* Paste pseudo-class examples here */
    </style>
</head>
<body>
    <button>Normal Button</button>
    <button disabled>Disabled Button</button>

    <br><br>
    <input type="text" placeholder="Type something...">
    <input type="email" placeholder="Email" required>

    <br><br>
    <input type="checkbox" id="terms">
    <label for="terms">I accept the terms</label>

    <nav style="margin-top: 16px;">
        <a class="nav-link" href="#">Home</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">Blog</a>
    </nav>

    <ul style="margin-top: 16px;">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Fourth item</li>
        <li>Last item</li>
    </ul>

    <table style="margin-top: 16px; border-collapse: collapse; width: 300px;">
        <tr><td style="padding: 8px;">Row 1</td><td>Data</td></tr>
        <tr><td style="padding: 8px;">Row 2</td><td>Data</td></tr>
        <tr><td style="padding: 8px;">Row 3</td><td>Data</td></tr>
        <tr><td style="padding: 8px;">Row 4</td><td>Data</td></tr>
    </table>
</body>
</html>
```

## Interaction States

These are the ones you'll use on almost every project:

### `:hover`

Applies when the user moves their mouse over the element.

```css
button {
    background-color: #2563eb;
    color: white;
}

button:hover {
    background-color: #1d4ed8;  /* slightly darker on hover */
}

a:hover {
    text-decoration: underline;
}
```

### `:focus`

Applies when an element receives keyboard focus — usually when a user tabs to it or clicks on an input.

```css
input:focus {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
}

a:focus {
    outline: 2px solid orange;
}
```

Don't remove focus styles without replacing them — they're essential for keyboard navigation and accessibility. A common mistake is `outline: none` without any replacement, which makes your page unusable for keyboard users.

### `:active`

Applies while an element is being clicked (the brief moment between mouse-down and mouse-up).

```css
button:active {
    transform: scale(0.98);   /* subtle press effect */
}
```

### `:focus-visible`

A smarter version of `:focus`. It only shows the focus style when the user is navigating with a keyboard, not when clicking with a mouse. This is the modern way to handle focus styling:

```css
button:focus-visible {
    outline: 2px solid #2563eb;
}
```

## Child Position

These let you select elements based on where they sit among their siblings.

### `:first-child` and `:last-child`

```css
/* remove top border from first item in a list */
.list-item:first-child {
    border-top: none;
}

/* remove bottom margin from the last paragraph */
.card p:last-child {
    margin-bottom: 0;
}
```

### `:nth-child()`

Selects elements based on their position. The argument can be a number, a keyword, or a formula.

```css
/* the third item */
li:nth-child(3) {
    color: red;
}

/* every even item (for zebra striping) */
tr:nth-child(even) {
    background-color: #f9f9f9;
}

/* every odd item */
tr:nth-child(odd) {
    background-color: white;
}

/* every 3rd item starting from the 1st */
li:nth-child(3n+1) {
    font-weight: bold;
}
```

The formula `An+B` means: every Ath element, offset by B. So `2n` = every second, `3n+1` = 1st, 4th, 7th, ...

### `:nth-last-child()`

Same as `nth-child` but counts from the end:

```css
/* the last 3 items */
li:nth-last-child(-n+3) {
    opacity: 0.6;
}
```

## Form States

### `:checked`

Applies to checkboxes and radio buttons that are checked:

```css
input[type="checkbox"]:checked + label {
    color: #2563eb;
    font-weight: bold;
}
```

This uses the adjacent sibling selector (`+`) to style the label next to a checked checkbox — a common pattern for custom checkbox styling.

### `:disabled` and `:enabled`

```css
input:disabled {
    background-color: #f4f4f4;
    color: #aaa;
    cursor: not-allowed;
}

button:disabled {
    opacity: 0.5;
    pointer-events: none;
}
```

### `:placeholder-shown`

Selects an input that's currently showing its placeholder text (i.e., it's empty):

```css
input:placeholder-shown {
    border-color: #ccc;
}

input:not(:placeholder-shown) {
    border-color: #2563eb;  /* highlight when user has typed something */
}
```

## The `:not()` Pseudo-Class

`:not()` lets you exclude elements from a selection:

```css
/* all inputs except hidden ones */
input:not([type="hidden"]) {
    border: 1px solid #ccc;
}

/* all list items except the last one — add a divider between items */
li:not(:last-child) {
    border-bottom: 1px solid #eee;
}

/* all links except those in the nav */
a:not(.nav-link) {
    text-decoration: underline;
}
```

`:not()` is extremely useful for avoiding repetition — instead of adding a class to every element you want to exclude, you describe the exception.

## `:empty`

Selects elements with no children (including no text):

```css
.badge:empty {
    display: none;  /* hide badge when it has no content */
}
```

## Real-World Example: Interactive Navigation

```css
.nav-link {
    color: #444;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 4px;
    transition: background-color 0.2s;
}

.nav-link:hover {
    background-color: #f4f4f4;
    color: #111;
}

.nav-link:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
}

.nav-link:active {
    background-color: #e8e8e8;
}
```

This gives you hover, keyboard focus, and click feedback with no JavaScript.

> **Tip:** Keep `:hover`, `:focus-visible`, and `:active` styles consistent with each other. Users should always be able to tell an element is interactive, whether they're using a mouse, keyboard, or touch device.

Next up is [Flexbox Basics](../flexbox-basics/index.md) — the go-to tool for one-dimensional layout.
