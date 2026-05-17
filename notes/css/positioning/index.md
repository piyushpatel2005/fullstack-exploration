# CSS Positioning

Normal document flow is great for text and stacked content, but sometimes you need to pull an element out and place it somewhere specific — a sticky header, a floating button, a tooltip that appears on top of other content. That's what `position` is for.

## Try It Yourself

Save this HTML file. It includes a card with a badge (for absolute positioning), a sticky nav bar, and normal flow text so you can see how each `position` value interacts with the rest of the page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Positioning</title>
    <style>
        body { font-family: sans-serif; margin: 0; }
        .card {
            width: 300px;
            border: 1px solid #ccc;
            padding: 20px;
            margin: 40px auto;
        }
        /* Paste positioning examples here */
    </style>
</head>
<body>
    <nav class="sticky-nav">Sticky Navigation Bar</nav>

    <p style="padding: 20px;">Normal paragraph above the card.</p>

    <div class="card">
        <h2>Card Title</h2>
        <p>Card content goes here.</p>
        <span class="badge">NEW</span>
    </div>

    <p style="padding: 20px;">Normal paragraph below the card.</p>

    <!-- Add lots of content so you can scroll and test sticky/fixed -->
    <div style="height: 600px; background: #f9f9f9; padding: 20px;">
        <p>Scroll down to test sticky and fixed positioning.</p>
    </div>
</body>
</html>
```

## Static (The Default)

Every element starts with `position: static`. Static elements are in the normal document flow. The `top`, `right`, `bottom`, and `left` properties have no effect on static elements.

```css
.normal {
    position: static;  /* default — you don't need to write this */
}
```

## Relative

`position: relative` keeps the element in the normal flow but lets you nudge it with offset properties. The nudge is relative to where the element would have been.

```css
.shifted {
    position: relative;
    top: 10px;    /* moved 10px down from its normal position */
    left: 20px;   /* moved 20px right from its normal position */
}
```

Crucially, other elements act as if the relatively positioned element is still in its original position — the space is preserved even though the element visually moved.

The other key use of `relative`: it creates a **positioning context** for absolutely positioned children. This is the pattern you'll use constantly.

## Absolute

`position: absolute` removes the element completely from the normal flow. Other elements ignore it. It positions itself relative to the nearest ancestor that has a position other than `static` (a parent with `relative`, `absolute`, or `fixed`).

```css
.card {
    position: relative;  /* creates positioning context */
}

.card .badge {
    position: absolute;
    top: 10px;
    right: 10px;
    /* positions relative to .card, not the whole page */
}
```

If no positioned ancestor exists, the absolutely positioned element positions itself relative to the initial containing block (basically the `<html>` element).

This is the workhorse pattern for things like:
- Badges in the corner of a card
- Dropdown menus that appear over other content
- Tooltips
- Close buttons on modals

## Fixed

`position: fixed` is similar to absolute, but it positions the element relative to the **viewport** (the browser window), not any ancestor. It stays in place even when the user scrolls.

```css
.sticky-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    z-index: 100;
}

.floating-button {
    position: fixed;
    bottom: 24px;
    right: 24px;
}
```

Fixed positioning is perfect for headers, floating action buttons, and cookie banners.

## Sticky

`position: sticky` is a blend of relative and fixed. The element stays in normal flow until it reaches a certain scroll position, then it sticks.

```css
.table-header {
    position: sticky;
    top: 0;        /* stick when it reaches the top of the viewport */
    background: white;
}

.sidebar {
    position: sticky;
    top: 20px;     /* stick 20px from the top while parent is visible */
}
```

The element only sticks within its parent container. Once the parent scrolls out of view, the sticky element goes with it. This makes it great for table headers and sidebars that should stay visible while their section is in view.

> **Note:** Sticky requires the parent to have a defined height and must not have `overflow: hidden` set — otherwise the stickiness won't work.

## Z-Index

When positioned elements overlap, `z-index` controls which one appears on top. Higher values are in front of lower values.

```css
.modal {
    position: fixed;
    z-index: 1000;
}

.tooltip {
    position: absolute;
    z-index: 10;
}

.dropdown {
    position: absolute;
    z-index: 50;
}
```

`z-index` only works on positioned elements (anything except `static`). Setting `z-index` on a static element does nothing.

## Stacking Contexts

Here's the tricky part: `z-index` doesn't just compare globally — it compares within **stacking contexts**. Certain CSS properties create a new stacking context, including `position` + `z-index` on the same element, `opacity` less than 1, `transform`, and others.

This means a child with `z-index: 9999` inside a parent stacking context with a low `z-index` can still be hidden behind another element with a higher `z-index` in a different context.

When a `z-index` fight seems irrational, check if a parent is creating a stacking context that's limiting you.

## Practical Example: A Tooltip

```css
.tooltip-container {
    position: relative;
    display: inline-block;
}

.tooltip {
    position: absolute;
    bottom: 100%;        /* sits directly above the container */
    left: 50%;
    transform: translateX(-50%);  /* center it horizontally */
    background: #333;
    color: white;
    padding: 6px 10px;
    border-radius: 4px;
    white-space: nowrap;
    z-index: 10;
}
```

```html
<div class="tooltip-container">
    Hover me
    <span class="tooltip">This is a tooltip</span>
</div>
```

The pattern here is the classic `relative` parent + `absolute` child combination.

> **Tip:** Use the browser's element inspector to check an element's computed `position` value. Sometimes a parent has `position: relative` you didn't notice, which is why an absolutely positioned child isn't going where you expect.

Next up is [Advanced Selectors](../advanced-selectors/index.md) — attribute selectors, sibling combinators, and child selectors.
