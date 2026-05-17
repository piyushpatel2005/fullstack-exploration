# CSS Grid

Flexbox handles one axis at a time — either a row or a column. CSS Grid handles both at once. It's designed for two-dimensional layouts: things like page layouts, image galleries, and dashboards where you need items to align both horizontally and vertically.

## Try It Yourself

Save this HTML. It has a `.container` for experimenting with columns, a `.photo-gallery` for spanning items, and a `.page` with named areas for the full layout example at the end of the lesson.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Grid</title>
    <style>
        body { font-family: sans-serif; margin: 0; padding: 24px; }
        .item {
            background-color: steelblue;
            color: white;
            padding: 20px;
            text-align: center;
        }
        /* Paste grid examples here */
    </style>
</head>
<body>
    <!-- Basic column grid -->
    <div class="container" style="margin-bottom: 24px;">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
    </div>

    <!-- Spanning items -->
    <div class="photo-gallery" style="margin-bottom: 24px;">
        <div class="item">Photo 1</div>
        <div class="item">Photo 2</div>
        <div class="item wide-card">Wide Photo</div>
        <div class="item">Photo 4</div>
        <div class="item">Photo 5</div>
    </div>

    <!-- Named areas page layout -->
    <div class="page" style="height: 400px;">
        <header class="page-header item">Header</header>
        <aside class="page-sidebar item">Sidebar</aside>
        <main class="page-main item">Main Content</main>
        <footer class="page-footer item">Footer</footer>
    </div>
</body>
</html>
```

## Enabling Grid

Like Flexbox, Grid is activated on a container:

```css
.container {
    display: grid;
}
```

On its own this doesn't do much — you need to define the columns and/or rows.

## `grid-template-columns`

This is where you define how many columns the grid has and how wide each should be.

```css
.container {
    display: grid;
    grid-template-columns: 200px 200px 200px;   /* three 200px columns */
}
```

But hardcoded pixel widths get repetitive. The `repeat()` function helps:

```css
.container {
    grid-template-columns: repeat(3, 200px);    /* same thing, shorter */
}
```

## The `fr` Unit

`fr` stands for *fraction*. It divides up the available space proportionally, similar to `flex-grow`.

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;   /* three equal columns */
}

.layout {
    display: grid;
    grid-template-columns: 250px 1fr;     /* fixed sidebar + flexible main */
}

.weighted {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;   /* middle gets twice the space */
}
```

`fr` units take up space after fixed widths are subtracted. In `250px 1fr`, the sidebar gets 250px and the `1fr` column gets everything that's left.

## `grid-template-rows`

You can also define row heights, though you often don't need to — rows size to their content by default.

```css
.page {
    display: grid;
    grid-template-rows: 64px 1fr 100px;   /* header, main, footer */
    min-height: 100vh;
}
```

## `gap`

Same as in Flexbox — adds space between grid cells.

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;          /* 24px between all rows and columns */
}

.container {
    gap: 16px 24px;     /* row gap, column gap */
}
```

## Auto Placement

By default, Grid places items one per cell in source order, filling left to right, then top to bottom. You get a lot for free without specifying where each item goes:

```css
.photo-gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
}

/* Photos automatically fill the grid, 4 per row */
```

## Placing Items Manually

You can take a specific item out of auto flow and explicitly place it:

```css
.featured {
    grid-column: 1 / 3;    /* spans from column line 1 to column line 3 (2 columns wide) */
    grid-row: 1 / 2;       /* in the first row */
}
```

Column and row lines start at 1. A 3-column grid has 4 column lines (1, 2, 3, 4).

The `span` keyword is often easier to read:

```css
.wide-card {
    grid-column: span 2;   /* takes up 2 column slots wherever it lands */
}

.tall-card {
    grid-row: span 2;      /* takes up 2 row slots */
}
```

## `grid-template-areas`

For named, visual layouts, `grid-template-areas` lets you describe the structure in a human-readable way:

```css
.page {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 64px 1fr 80px;
    grid-template-areas:
        "header  header"
        "sidebar main"
        "footer  footer";
    min-height: 100vh;
}

.page-header  { grid-area: header; }
.page-sidebar { grid-area: sidebar; }
.page-main    { grid-area: main; }
.page-footer  { grid-area: footer; }
```

The ASCII art in `grid-template-areas` maps directly to the visual layout. Each string is a row, each word is a cell, and repeating the same word makes it span multiple cells. A `.` represents an empty cell.

This is one of the most readable ways to describe a full page layout.

## `auto-fill` and `auto-fit` with `minmax()`

For responsive grids that automatically adjust column count based on available width:

```css
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 24px;
}
```

`minmax(250px, 1fr)` means: each column is at least 250px wide and at most 1fr. `auto-fill` creates as many columns as fit. The result: wide screens get 4 columns, medium screens get 2-3, small screens get 1. No media queries.

The difference between `auto-fill` and `auto-fit`:
- `auto-fill` creates as many columns as possible, even if some are empty
- `auto-fit` collapses empty columns so filled items expand to use the space

For a card grid where you want cards to fill the row, `auto-fit` is usually what you want.

## Grid vs Flexbox

A common question: which one should I use?

Use **Flexbox** when you have a row or column of items and you mainly care about how they distribute space along one axis — navbars, button groups, stacked cards.

Use **Grid** when you need to control both rows and columns — page layouts, image galleries, dashboards, any time items need to line up in two dimensions.

They're also complementary. A page layout might use Grid for the overall structure and Flexbox inside each section for arranging content.

> **Tip:** Grid's developer tools in Firefox are especially good — they display the grid lines directly on the page. Turn on Grid inspector when debugging grid layouts.

Next: [CSS Variables](../css-variables/index.md) — custom properties for maintainable, themeable stylesheets.
