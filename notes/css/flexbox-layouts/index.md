# Flexbox Layouts

The previous three lessons covered the theory. Now let's apply it. This lesson walks through practical layouts you'll build on nearly every project — a navbar, a card grid, a centered modal, a dropdown menu, and equal-height columns.

Each layout below is self-contained — copy the HTML and CSS for whichever one you want to try, paste them into a new file, and open it in the browser.

## Layout 1: Horizontal Navigation Bar

A navbar needs a logo on the left and links on the right, all vertically centered.

```html
<nav class="navbar">
    <a href="/" class="logo">MySite</a>
    <div class="nav-links">
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
    </div>
</nav>
```

```css
.navbar {
    display: flex;
    justify-content: space-between;  /* logo left, links right */
    align-items: center;             /* vertical centering */
    padding: 0 24px;
    height: 64px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
}

.logo {
    font-weight: 700;
    font-size: 1.25rem;
    text-decoration: none;
}

.nav-links {
    display: flex;
    gap: 24px;
}

.nav-links a {
    text-decoration: none;
    color: #444;
}

.nav-links a:hover {
    color: #111;
}
```

`space-between` pushes the logo and links to opposite ends. The nested flex on `.nav-links` spaces the individual links with `gap`.

## Layout 2: Card Grid

A row of cards that wrap to a new row on smaller screens.

```html
<div class="card-grid">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
</div>
```

```css
.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}

.card {
    flex: 1 1 280px;   /* grow and shrink, but start at 280px minimum */
    padding: 24px;
    border: 1px solid #eee;
    border-radius: 8px;
}
```

`flex: 1 1 280px` is the key. Each card starts at 280px and grows to fill available space. When they can't all fit on one line, they wrap. On a wide screen you might see 3 per row; on a narrow screen, 1 per row. No media queries needed.

## Layout 3: Centering a Card (The Famous Problem)

Centering something vertically and horizontally on the page:

```html
<div class="page">
    <div class="modal">I'm centered</div>
</div>
```

```css
.page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal {
    background: white;
    padding: 32px;
    border-radius: 8px;
    width: 480px;
    max-width: 90%;    /* don't overflow on small screens */
}
```

Two lines of flex — `justify-content: center` + `align-items: center` — and the centering problem is solved.

## Layout 4: Sidebar + Main Content

A two-column layout where the sidebar has a fixed width and the content fills the rest.

```html
<div class="layout">
    <aside class="sidebar">Sidebar</aside>
    <main class="content">Main content</main>
</div>
```

```css
.layout {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    flex: 0 0 260px;  /* fixed 260px, won't grow or shrink */
    background-color: #f4f4f4;
    padding: 24px;
}

.content {
    flex: 1;          /* fills remaining space */
    padding: 24px;
}
```

## Layout 5: Dropdown Menu

A navigation item with a dropdown that opens below it.

```html
<div class="nav-item">
    <button class="nav-button">Products</button>
    <ul class="dropdown">
        <li><a href="/product-a">Product A</a></li>
        <li><a href="/product-b">Product B</a></li>
        <li><a href="/product-c">Product C</a></li>
    </ul>
</div>
```

```css
.nav-item {
    position: relative;   /* positioning context for dropdown */
}

.dropdown {
    display: none;        /* hidden by default */
    position: absolute;
    top: 100%;            /* sits just below the button */
    left: 0;
    background: white;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 8px 0;
    min-width: 160px;
    list-style: none;
    margin: 0;
    z-index: 10;

    /* Flexbox for stacking the items vertically */
    flex-direction: column;
}

.nav-item:hover .dropdown {
    display: flex;   /* switch from none to flex on hover */
}

.dropdown a {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: #333;
}

.dropdown a:hover {
    background-color: #f9f9f9;
}
```

The dropdown uses `position: absolute` + flexbox with `flex-direction: column` to stack items vertically. The `:hover` on `.nav-item` toggles it between `display: none` and `display: flex`.

> **Note:** For production you'd want to handle this with JavaScript for keyboard navigation and accessibility (pressing Escape to close, managing `aria-expanded`). CSS-only hover dropdowns don't work on touch screens either.

## Layout 6: Equal-Height Columns

One of the classic pain points before Flexbox — making multiple columns have the same height even when they have different content lengths.

```html
<div class="columns">
    <div class="column">Short content</div>
    <div class="column">
        <p>This column has much more content...</p>
        <p>More paragraphs here...</p>
    </div>
    <div class="column">Medium content here.</div>
</div>
```

```css
.columns {
    display: flex;
    gap: 24px;
}

.column {
    flex: 1;
    padding: 24px;
    background-color: #f9f9f9;
    border-radius: 8px;
    /* No height needed — flex stretch makes all columns equal height */
}
```

Because `align-items` defaults to `stretch`, all flex items stretch to match the tallest sibling. The equal-height column problem that used to require JavaScript is now zero extra CSS.

> **Tip:** For building table-like structures with rows and columns where cells need to align in a grid pattern, CSS Grid is a better fit than Flexbox. Flexbox is best when you have a single row or column that might wrap — Grid is best when you need control over both axes at once. Check out the [CSS Grid](../grid/index.md) lesson next.
