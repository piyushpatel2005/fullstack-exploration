# Flexbox Alignment

Once you have a flex container, the next thing you want is control over where the items sit. Do they hug the left? Are they centered? Spread out evenly? Flexbox gives you fine-grained control over all of this with a handful of alignment properties.

Quick reminder from the basics: flexbox has two axes. The **main axis** runs in the direction of `flex-direction` (row = horizontal, column = vertical). The **cross axis** runs perpendicular to it.

## Try It Yourself

Save this HTML. The `.container` holds items of different heights so you can clearly see how `justify-content` and `align-items` move things around. The `.navbar` is ready for `space-between` alignment.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Flexbox Alignment</title>
    <style>
        body { font-family: sans-serif; margin: 0; padding: 24px; }
        .item {
            background-color: steelblue;
            color: white;
            padding: 16px;
        }
        .item.tall  { padding: 40px 16px; }
        .item.short { padding: 6px 16px; }
        /* Paste alignment examples here */
    </style>
</head>
<body>
    <nav class="navbar" style="border: 1px solid #ccc; padding: 8px; margin-bottom: 24px;">
        <a class="logo" href="#" style="font-weight: bold;">MySite</a>
        <div class="nav-links">
            <a href="#">About</a>
            <a href="#">Blog</a>
        </div>
    </nav>

    <div class="container" style="border: 1px solid #ccc; padding: 8px; height: 200px;">
        <div class="item">Item 1</div>
        <div class="item tall">Item 2 (tall)</div>
        <div class="item short">Item 3</div>
        <div class="item featured">Featured</div>
    </div>

    <div class="centered-container" style="border: 1px solid #ccc; margin-top: 24px; height: 200px;">
        <div class="content" style="background: steelblue; color: white; padding: 16px;">Center me</div>
    </div>
</body>
</html>
```

## `justify-content` — Main Axis Alignment

`justify-content` controls how items are distributed along the main axis.

```css
.container {
    display: flex;
    justify-content: flex-start;    /* default: items packed to the start */
}
```

The values:

```css
justify-content: flex-start;    /* items start at the left (for row) */
justify-content: flex-end;      /* items pushed to the right */
justify-content: center;        /* items centered */
justify-content: space-between; /* first item at start, last at end, even gaps between */
justify-content: space-around;  /* equal space on each side of every item */
justify-content: space-evenly;  /* equal space everywhere including edges */
```

`space-between` is the most used — perfect for navbars where you want a logo on the left and links on the right:

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
}
```

```html
<nav class="navbar">
    <a class="logo" href="/">MySite</a>
    <div class="nav-links">
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
    </div>
</nav>
```

The logo snaps to the left, the links group snaps to the right, automatically.

## `align-items` — Cross Axis Alignment

While `justify-content` works along the main axis, `align-items` aligns items along the **cross axis**.

For a row (`flex-direction: row`), the cross axis is vertical — so `align-items` controls vertical alignment.

```css
.container {
    display: flex;
    height: 200px;
    align-items: stretch;     /* default: items stretch to fill cross axis */
}
```

```css
align-items: stretch;     /* items fill the container height (default) */
align-items: flex-start;  /* items align to the top */
align-items: flex-end;    /* items align to the bottom */
align-items: center;      /* items centered vertically */
align-items: baseline;    /* items align by their text baseline */
```

The most common use: vertically centering content in a fixed-height container.

```css
.card-header {
    display: flex;
    align-items: center;    /* icon and text sit at the same vertical center */
    gap: 12px;
    height: 60px;
}
```

## `align-content` — Cross Axis Wrapping Alignment

`align-content` is similar to `align-items` but only applies when there are **multiple rows** (i.e., `flex-wrap: wrap` is on and items have wrapped). It controls how those rows are distributed in the container.

```css
.grid {
    display: flex;
    flex-wrap: wrap;
    height: 400px;
    align-content: flex-start;  /* rows pack to the top */
}
```

```css
align-content: flex-start;    /* rows packed to start */
align-content: flex-end;      /* rows packed to end */
align-content: center;        /* rows centered */
align-content: space-between; /* even spacing between rows */
align-content: space-around;  /* space around rows */
align-content: stretch;       /* rows stretch to fill container (default) */
```

If your flex container only ever has one row, `align-content` does nothing. It only kicks in when you have wrapping items that form multiple rows.

## `align-self` — Per-Item Cross Axis Override

`align-items` sets the alignment for *all* items. `align-self` overrides that for a *specific* item.

```css
.container {
    display: flex;
    align-items: center;    /* all items centered */
}

.featured {
    align-self: flex-start; /* this one sits at the top instead */
}
```

This is useful in nav bars where you want most items centered but one item (like a notification dot) should align differently.

## `gap`

Already covered in Flexbox Basics, but worth repeating here: `gap` is the clean way to add space between items. It's main-axis gap and cross-axis gap in one:

```css
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;          /* 24px between all items in all directions */
}

.container {
    gap: 16px 8px;      /* 16px between rows, 8px between columns */
}
```

## Centering Anything

The classic "center something both horizontally and vertically" problem — previously a CSS nightmare — is trivial with flexbox:

```css
.centered-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;     /* or any defined height */
}
```

```html
<div class="centered-container">
    <div class="content">I'm perfectly centered.</div>
</div>
```

This works for centering modals, loading spinners, hero text — anything you need in the middle of its container.

## Summary: Which Property Controls What

| Property | Axis | Affects |
|---|---|---|
| `justify-content` | Main axis | Distribution of all items |
| `align-items` | Cross axis | Alignment of all items (single line) |
| `align-content` | Cross axis | Distribution of multiple rows |
| `align-self` | Cross axis | Alignment of one specific item |

> **Tip:** When something isn't aligning how you expect, first check: which is the main axis for this container? `justify-content` works along the direction of `flex-direction`, not always horizontally.

Next: [Flexbox Items](../flexbox-items/index.md) — controlling how individual items grow, shrink, and size themselves.
