# CSS Display

Every HTML element has a default `display` value — block, inline, or something else. This determines how the element sits in the flow of the page. Understanding the difference is what lets you control layout without fighting the browser.

## Try It Yourself

Save this HTML and open it in a browser. Apply the `display` values from each section to the `<style>` block and watch how elements rearrange.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Display</title>
    <style>
        /* Add a background to make elements visible */
        div, span, p, li { outline: 1px dashed #aaa; }

        /* Paste display examples here */
    </style>
</head>
<body>
    <div>This is a div (block by default)</div>
    <p>This is a paragraph (block by default)</p>
    <span>This is a span</span>
    <span>Another span</span>
    <a href="#">An inline anchor link</a>
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>
    <div class="badge">New</div>
    <p class="hidden">This paragraph is hidden</p>
    <p class="invisible">This paragraph is invisible but still takes up space</p>
</body>
</html>
```

> **Tip:** The `outline: 1px dashed #aaa` rule in the starter styles draws a faint box around every element so you can visually see which ones are block vs inline before you apply any `display` changes.

## Block Elements

Block elements take up the full width of their parent and always start on a new line. Even if the content is tiny, the element claims the whole horizontal row.

```html
<div>This is a div</div>
<p>This is a paragraph</p>
<h1>This is a heading</h1>
```

All three of these render on their own line — `<div>`, `<p>`, `<h1>`, `<section>`, `<header>`, `<ul>`, `<li>`, and most layout elements are block by default.

Block elements respect `width`, `height`, `padding`, `margin`, and `border` on all sides.

## Inline Elements

Inline elements sit inside the flow of text, side by side. They only take up as much space as their content needs.

```html
<p>This is a <strong>bold word</strong> and <em>italic text</em> in a paragraph.</p>
```

`<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, and `<code>` are inline by default.

The catch: inline elements don't fully respect `width`, `height`, or top/bottom `margin`. Setting `width: 200px` on a `<span>` does nothing.

## Inline-Block

`inline-block` is a hybrid. Elements sit in the flow like inline elements (side by side, don't break onto a new line), but they behave like block elements internally — they do respect `width`, `height`, and all four sides of padding and margin.

```css
.badge {
    display: inline-block;
    width: 80px;
    padding: 4px 8px;
    background-color: #eee;
    border-radius: 4px;
}
```

This is useful for things like badges, buttons, and navigation links — they should sit inline but need controlled sizing.

```css
/* Navigation links that sit side by side with padding */
nav a {
    display: inline-block;
    padding: 8px 16px;
}
```

## Switching Display Values

You can override any element's default display. This is common when you want to make a block element behave inline, or vice versa:

```css
/* Make list items sit side by side (for a horizontal nav) */
nav li {
    display: inline-block;
}

/* Make a link fill its container like a block element */
.card-link {
    display: block;
}
```

## `display: none` vs `visibility: hidden`

Both hide an element, but they behave differently:

```css
.hidden {
    display: none;       /* element is completely removed from the layout */
}

.invisible {
    visibility: hidden;  /* element is invisible but still takes up its space */
}
```

If you use `display: none`, adjacent elements will close the gap — the element is as if it doesn't exist. With `visibility: hidden`, the space is preserved but the element is transparent.

A common pattern: show/hide a dropdown menu with `display: none` toggled by JavaScript, so the layout doesn't shift when it appears.

## `display: flex` and `display: grid`

These are the modern layout modes and they get their own lessons. `flex` is for one-dimensional layouts (row or column), and `grid` is for two-dimensional layouts. Most modern layout work uses one of these two.

- [Flexbox Basics](../flexbox-basics/index.md)
- [CSS Grid](../grid/index.md)

## A Quick Rule of Thumb

When you're not sure which to use:

- **Block** — full-width sections, containers, structural pieces
- **Inline** — text-level elements, icons within text, links within sentences
- **Inline-block** — buttons, badges, nav items — needs sizing but should flow inline
- **Flex/Grid** — anything that's a layout container with children to arrange

> **Tip:** If an element isn't responding to `width` or `height`, it's probably `inline`. Switch it to `inline-block` or `block` and the sizing properties will take effect.

Next up is [Positioning](../positioning/index.md) — which is about taking elements out of the normal flow and placing them exactly where you want.
