# Responsive Design

A website that only looks good on a desktop is half-finished. Responsive design means your layout adapts to the screen it's being viewed on — phone, tablet, laptop, wide monitor. CSS gives you the tools to do this without building separate sites.

## Try It Yourself

Save this HTML (note it already has the viewport meta tag — that's the first thing this lesson covers). Open it in a browser, then resize the window narrow and wide to watch the layout respond as you add CSS.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Responsive Design</title>
    <style>
        * { box-sizing: border-box; }
        body { font-family: sans-serif; margin: 0; }
        .card {
            background: #f4f4f4;
            border-radius: 8px;
            padding: 20px;
        }
        /* Paste responsive styles here */
    </style>
</head>
<body>
    <nav class="navbar" style="padding: 16px; background: #fff; border-bottom: 1px solid #eee; display: flex; align-items: center; justify-content: space-between;">
        <span class="logo" style="font-weight: bold;">MySite</span>
        <button class="hamburger">&#9776;</button>
        <div class="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
        </div>
    </nav>

    <div class="container" style="padding: 24px;">
        <h1>Responsive Page</h1>
        <p>Resize the browser to see the layout change.</p>

        <div class="card-grid">
            <div class="card">Card 1 — some content here</div>
            <div class="card">Card 2 — some content here</div>
            <div class="card">Card 3 — some content here</div>
        </div>
    </div>
</body>
</html>
```

## The Viewport Meta Tag

Before any CSS, you need this in your HTML `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Without it, mobile browsers render the page as if it's a desktop screen and then shrink everything to fit — your carefully written CSS does nothing. This one tag tells the browser to use the actual device width as the viewport width.

## Relative Units

The first step toward responsive design is using units that scale:

### `%` (Percentage)

Relative to the parent element's size.

```css
.container {
    width: 90%;         /* 90% of parent — auto-shrinks on small screens */
    max-width: 1200px;  /* but never wider than 1200px */
    margin: 0 auto;
}

img {
    max-width: 100%;    /* images never overflow their container */
    height: auto;       /* maintain aspect ratio */
}
```

`max-width: 100%` on images is one of those rules that goes in every project — it prevents images from breaking layout on narrow screens.

### `em` and `rem`

`em` is relative to the element's own font size. `rem` is relative to the root (`<html>`) font size.

```css
html {
    font-size: 16px;   /* base: 1rem = 16px */
}

/* Scale up the base for larger screens */
@media (min-width: 1200px) {
    html {
        font-size: 18px;  /* now 1rem = 18px everywhere */
    }
}
```

By scaling the root font size at a breakpoint, everything that uses `rem` scales up proportionally — headings, paragraphs, padding, all at once.

### `vw` and `vh` (Viewport Units)

`1vw` = 1% of the viewport width. `1vh` = 1% of the viewport height.

```css
.hero {
    height: 100vh;        /* full screen height */
}

.hero-title {
    font-size: clamp(1.5rem, 5vw, 4rem);  /* fluid font size */
}
```

`clamp(min, preferred, max)` keeps a value within bounds. `clamp(1.5rem, 5vw, 4rem)` means: at least 1.5rem, ideally 5vw, at most 4rem. Font size scales smoothly with screen width between those limits.

## Media Queries

Media queries let you apply different styles at different screen sizes. They're the core tool for responsive design.

```css
/* Styles outside any media query apply everywhere */
.container {
    padding: 16px;
}

/* Only applies when viewport is at least 768px wide */
@media (min-width: 768px) {
    .container {
        padding: 24px;
    }
}

/* Only applies when viewport is at least 1024px wide */
@media (min-width: 1024px) {
    .container {
        padding: 40px;
    }
}
```

## Mobile-First vs Desktop-First

There are two approaches to writing responsive CSS:

**Mobile-first**: Write base styles for small screens, then add media queries for larger screens using `min-width`.

```css
/* Base: mobile */
.card-grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

/* Tablet and up */
@media (min-width: 768px) {
    .card-grid {
        flex-direction: row;
        flex-wrap: wrap;
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .card-grid {
        gap: 24px;
    }
}
```

**Desktop-first**: Write base styles for large screens, then override with `max-width` for smaller screens.

```css
/* Base: desktop */
.card-grid {
    display: flex;
    gap: 24px;
}

/* Only on smaller screens */
@media (max-width: 767px) {
    .card-grid {
        flex-direction: column;
    }
}
```

**Mobile-first is generally better**. It starts with the most constrained layout and progressively enhances — which tends to produce leaner, cleaner CSS. Most frameworks (Bootstrap, Tailwind) use mobile-first conventions.

## Common Breakpoints

These are the most common breakpoints you'll see:

```css
/* Small phones */
@media (min-width: 480px) { ... }

/* Tablets */
@media (min-width: 768px) { ... }

/* Small desktops / large tablets */
@media (min-width: 1024px) { ... }

/* Large desktops */
@media (min-width: 1280px) { ... }

/* Extra wide */
@media (min-width: 1536px) { ... }
```

Don't be rigid about these — set breakpoints where your design actually breaks, not because a number feels round.

## Responsive Navigation

A common pattern: a horizontal nav on desktop, a hamburger menu on mobile.

```css
/* Mobile: hide links, show hamburger */
.nav-links {
    display: none;
}

.hamburger {
    display: block;
}

/* Desktop: show links, hide hamburger */
@media (min-width: 768px) {
    .nav-links {
        display: flex;
        gap: 24px;
    }

    .hamburger {
        display: none;
    }
}
```

The hamburger toggle (showing/hiding `.nav-links`) is handled with JavaScript.

## Responsive Typography

```css
h1 {
    font-size: clamp(1.75rem, 4vw, 3rem);  /* fluid sizing */
}

body {
    font-size: clamp(1rem, 1.5vw, 1.125rem);
}
```

Or with explicit breakpoints:

```css
h1 { font-size: 1.75rem; }

@media (min-width: 768px) {
    h1 { font-size: 2.5rem; }
}

@media (min-width: 1200px) {
    h1 { font-size: 3.5rem; }
}
```

## Responsive Images

```css
img {
    max-width: 100%;  /* never overflows container */
    height: auto;     /* maintains aspect ratio */
}

.hero-image {
    width: 100%;
    height: 300px;
    object-fit: cover;   /* crops to fill, maintains aspect ratio */
    object-position: center;
}

@media (min-width: 768px) {
    .hero-image {
        height: 500px;
    }
}
```

`object-fit: cover` on an `<img>` works like `background-size: cover` but for actual image elements.

## The `prefers-color-scheme` Media Query

Media queries aren't just for screen width — you can also respond to user preferences:

```css
:root {
    --color-bg: white;
    --color-text: #111;
}

@media (prefers-color-scheme: dark) {
    :root {
        --color-bg: #0f0f0f;
        --color-text: #f4f4f4;
    }
}
```

This automatically switches to dark mode for users who have it enabled in their OS — no JavaScript toggle needed.

> **Tip:** Always test your responsive layouts in Chrome DevTools with the device toolbar (Ctrl+Shift+M / Cmd+Shift+M). Check actual devices when possible — DevTools simulation is good but not perfect, especially for touch interactions.
