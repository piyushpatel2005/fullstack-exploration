# CSS Typography

Typography is about more than just picking a font — it's everything that affects how text looks and reads. A well-typeset page is comfortable to read for long stretches. A poorly typeset one feels tiring even after a few paragraphs.

## Try It Yourself

Save this HTML file and open it in a browser. Apply each CSS property to the `<style>` block and watch how the text changes.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Typography</title>
    <style>
        /* Paste typography examples here */
    </style>
</head>
<body>
    <h1>Main Heading</h1>
    <h2>Section Heading</h2>
    <h3>Subsection Heading</h3>
    <p>This is a paragraph of body text. Good typography makes long text
    comfortable to read even for extended periods of time.</p>
    <a href="#">This is a link</a>
    <p>Here is some <code>inline code</code> inside a paragraph.</p>
    <p class="label">CATEGORY LABEL</p>
    <p class="small-print">Terms and conditions apply.</p>
</body>
</html>
```

## Font Family

`font-family` sets the typeface. You almost always provide a list, not just one font — the browser will try each one left to right and fall back to the next if a font isn't available.

```css
body {
    font-family: 'Inter', Arial, sans-serif;
}

code {
    font-family: 'Fira Code', 'Courier New', monospace;
}
```

The last value (`sans-serif`, `serif`, `monospace`) is a generic family — a safety net that tells the browser what category of font to pick from its system fonts if everything else fails.

To use a custom font from Google Fonts, add a link in your HTML first:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
```

Then reference it by name in your CSS.

## Font Size

`font-size` controls how large the text renders. You can use several units:

```css
h1 { font-size: 2rem; }    /* relative to root element font size */
h2 { font-size: 1.5rem; }
p  { font-size: 1rem; }    /* 1rem = whatever the browser default is (usually 16px) */

.small-print { font-size: 0.75rem; }
.hero-text   { font-size: 5vw; }    /* relative to viewport width */
```

`rem` is the unit you want to use for most body text and headings. It's relative to the root font size (set on `<html>` or `<body>`), which makes it easy to scale your whole typography by changing one value. Avoid `px` for font sizes — it doesn't respect the user's browser font-size preference.

## Font Weight

`font-weight` sets how bold the text is. Numeric values give you finer control than keywords:

```css
.light    { font-weight: 300; }
.normal   { font-weight: 400; }
.medium   { font-weight: 500; }
.semibold { font-weight: 600; }
.bold     { font-weight: 700; }
.heavy    { font-weight: 900; }
```

Note that not every weight is available for every font — if a font only comes in 400 and 700, the browser will synthesize (fake) the in-between weights, which usually doesn't look great. Check what weights your chosen font actually provides.

## Font Style

```css
em {
    font-style: italic;
}

blockquote {
    font-style: italic;
}

.no-italic {
    font-style: normal;
}
```

You mostly use `italic` and `normal`. Browsers also support `oblique`, which is a mechanically slanted version of the font — less common.

## Line Height

Line height (sometimes called leading) is the vertical space between lines of text. It's one of the most impactful things you can adjust for readability.

```css
body {
    line-height: 1.6;     /* 1.6x the font size — good for body text */
}

h1 {
    line-height: 1.2;     /* tighter for headings */
}
```

Notice there's no unit. That's intentional — `1.6` means 1.6 times the element's own font size, which scales correctly when the font size changes. Avoid setting line-height with `px` or `em` — it creates maintenance headaches.

A good rule of thumb: body text at around 1.5–1.8, headings at 1.1–1.3.

## Letter Spacing

`letter-spacing` adds or removes space between characters:

```css
h1 {
    letter-spacing: -0.02em;  /* slightly tighter — common for large headings */
}

.label {
    font-size: 0.75rem;
    letter-spacing: 0.1em;    /* more air — helps small uppercase labels */
    text-transform: uppercase;
}
```

Large headings often look better with slightly negative letter-spacing. Small uppercase labels often look better with slightly positive spacing.

## Text Alignment

```css
h1 {
    text-align: center;
}

p {
    text-align: left;    /* default in left-to-right languages */
}

.price {
    text-align: right;
}
```

Avoid `text-align: justify` for web text — it creates ugly gaps between words, especially on narrow columns.

## Text Decoration

```css
a {
    text-decoration: underline;
}

a.nav-link {
    text-decoration: none;   /* remove underline from nav links */
}

del {
    text-decoration: line-through;
}
```

You can also control the underline color and thickness:

```css
a {
    text-decoration: underline;
    text-decoration-color: #888;
    text-underline-offset: 3px;  /* move underline away from the text */
}
```

`text-underline-offset` is a small detail that makes a big visual difference — the default underline sits too close to descending letters like `g` and `y`.

## Text Transform

```css
.nav-link   { text-transform: uppercase; }
.heading    { text-transform: capitalize; }
.reset      { text-transform: none; }
```

`uppercase` and `capitalize` are handy for navigation and labels without needing to write the HTML text in caps — which would be bad for screen readers.

## Putting It Together

Here's a typical base typography setup you might use for a blog or documentation site:

```css
html {
    font-size: 16px;
}

body {
    font-family: 'Inter', Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.7;
    color: #222;
}

h1, h2, h3 {
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #111;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 1.75rem; }
h3 { font-size: 1.25rem; }

a {
    color: #2563eb;
    text-decoration: underline;
    text-underline-offset: 3px;
}

code {
    font-family: 'Fira Code', monospace;
    font-size: 0.9em;
}
```

> **Tip:** Browser default styles make `<h1>` through `<h6>` look very different across browsers. Most projects start by resetting or normalizing these so you have a consistent baseline to build from.

Next up is [The Box Model](../box-model/index.md) — the foundation of how CSS lays out every element on the page.
