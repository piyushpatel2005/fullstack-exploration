# Flexbox Basics

Before Flexbox, laying out elements side by side was a mess — floats, clearfixes, display tables. Flexbox changed that. It's a layout model designed specifically for distributing space among items in a row or column, and it's now the standard tool for one-dimensional layouts.

## Try It Yourself

Save this HTML. The `.container` holds five items so you can see how `flex-direction`, `flex-wrap`, and `gap` affect them. The `.navbar` lets you try a horizontal nav layout.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Flexbox Basics</title>
    <style>
        body { font-family: sans-serif; margin: 0; padding: 24px; }
        .item {
            background-color: steelblue;
            color: white;
            padding: 16px;
            font-size: 1rem;
        }
        .navbar a {
            text-decoration: none;
            background: #e0e0e0;
            padding: 8px 16px;
        }
        /* Paste flexbox examples here */
    </style>
</head>
<body>
    <nav class="navbar">
        <a href="#">Logo</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
    </nav>

    <div class="container" style="margin-top: 24px; border: 1px solid #ccc; padding: 8px;">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
        <div class="item">Item 5</div>
    </div>

    <div class="card" style="margin-top: 24px; border: 1px solid #ccc; padding: 20px; width: 250px;">
        <h2>Card Title</h2>
        <p>Some content here.</p>
        <p class="card-footer" style="background: #f0f0f0; margin: 0; padding: 8px;">Card Footer</p>
    </div>
</body>
</html>
```

## How Flexbox Works

You enable Flexbox on a **container** and it affects how that container's direct children (the **flex items**) are arranged. Setting `display: flex` on a container is all it takes to start.

```css
.container {
    display: flex;
}
```

```html
<div class="container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

The three divs — which are block elements by default (each on their own line) — now sit side by side in a row. Flexbox took over.

## The Main Axis and Cross Axis

Flexbox has two axes. The **main axis** is the direction items flow. The **cross axis** runs perpendicular to it.

By default the main axis goes left to right (a row). If you change direction to a column, the main axis goes top to bottom. This distinction matters a lot when you get to alignment properties.

## `flex-direction`

This sets which way items flow:

```css
.row {
    display: flex;
    flex-direction: row;          /* default: left to right */
}

.row-reverse {
    display: flex;
    flex-direction: row-reverse;  /* right to left */
}

.column {
    display: flex;
    flex-direction: column;       /* top to bottom */
}

.column-reverse {
    display: flex;
    flex-direction: column-reverse; /* bottom to top */
}
```

`column` is particularly useful for card layouts where you want to stack content vertically inside the card and control spacing between child elements.

```css
.card {
    display: flex;
    flex-direction: column;
}

.card .card-footer {
    margin-top: auto;  /* push footer to the bottom of the card */
}
```

That `margin-top: auto` trick is one of flexbox's most useful patterns — it consumes all available space and pushes an element to the far end.

## `flex-wrap`

By default, flex items try to stay on a single line even if they overflow the container. `flex-wrap` changes that.

```css
.gallery {
    display: flex;
    flex-wrap: wrap;   /* items wrap to a new line when they don't fit */
    gap: 16px;
}

.gallery .photo {
    width: 200px;
}
```

Now photos that don't fit on one row will wrap to the next. Without `flex-wrap: wrap`, all photos would squish onto one line.

```css
flex-wrap: nowrap;          /* default — no wrapping */
flex-wrap: wrap;            /* wrap to next line */
flex-wrap: wrap-reverse;    /* wrap to previous line (upward) */
```

## `flex-flow` Shorthand

`flex-flow` combines `flex-direction` and `flex-wrap`:

```css
.container {
    flex-flow: row wrap;        /* direction then wrap */
}

.container {
    flex-flow: column nowrap;
}
```

## `gap`

`gap` adds space between flex items without needing margins. It's cleaner than adding `margin-right` to every item and then removing it from the last one.

```css
.nav {
    display: flex;
    gap: 16px;          /* 16px between every item */
}

.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px 12px;     /* 20px row gap, 12px column gap */
}
```

`gap` only adds space *between* items, not around the outside of the container — unlike padding or margin on individual items.

## A Practical Example

Here's a simple navigation bar using only the properties from this lesson:

```css
.navbar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 8px;
    align-items: center;
    padding: 0 24px;
    height: 64px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
}
```

```html
<nav class="navbar">
    <a href="/">Logo</a>
    <a href="/about">About</a>
    <a href="/blog">Blog</a>
    <a href="/contact">Contact</a>
</nav>
```

The links sit in a horizontal row with consistent spacing. You didn't need floats, clearfixes, or inline-block tricks.

> **Tip:** Flexbox only affects direct children. If you have a `ul` inside a flex container, the `ul` is the flex item — not the `li` elements inside it. To arrange the `li` elements with flex, put `display: flex` on the `ul`.

Next: [Flexbox Alignment](../flexbox-alignment/index.md) — `justify-content`, `align-items`, and how to control where items sit within the container.
