# CSS Colors

If you've ever tried to describe a color to someone over the phone, you know how tricky it can be. "It's kind of a reddish-orange but not too bright..." — computers need something more precise. CSS gives you several ways to specify exactly which color you mean.

## Try It Yourself

Save this HTML file on your computer, open it in a browser, then paste the CSS examples from this lesson inside the `<style>` block one section at a time.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Colors</title>
    <style>
        /* Paste CSS examples here */
    </style>
</head>
<body>
    <h1>Page Heading</h1>
    <p>This is a paragraph with a <a href="#">link inside it</a>.</p>
    <div class="card">
        <h2>Card Title</h2>
        <p>Card body text.</p>
    </div>
    <button class="btn">Click Me</button>
</body>
</html>
```

## Named Colors

The simplest way is to use a color's name. CSS recognizes about 140 named colors that browsers understand out of the box.

```css
p {
    color: tomato;
}

h1 {
    color: steelblue;
}

body {
    background-color: whitesmoke;
}
```

Named colors are handy for quick prototyping. The downside is you're limited to that predefined set — you can't mix a custom shade. Also, some names are surprisingly quirky (`rebeccapurple` is a real one, added to honor a developer's daughter).

## Hex Colors

This is probably the format you'll see most often in real codebases. Hex colors start with `#` followed by six characters — each pair represents red, green, and blue intensity in hexadecimal (base 16, using 0–9 and A–F).

```css
h1 {
    color: #ff5733;       /* a bright orange-red */
}

p {
    color: #333333;       /* dark grey, almost black */
}

.card {
    background-color: #f9f9f9;  /* very light grey */
}
```

When both characters in each pair are the same, you can shorten it to three characters — `#333333` becomes `#333`, and `#ffffff` becomes `#fff`.

Design tools like Figma or Adobe XD output hex codes directly, which is a big reason this format is so popular.

## RGB Colors

RGB stands for Red, Green, Blue. You write three numbers between 0 and 255 — one per channel. `rgb(0, 0, 0)` is black, `rgb(255, 255, 255)` is white.

```css
p {
    color: rgb(255, 87, 51);   /* same orange-red as #ff5733 */
}

.sidebar {
    background-color: rgb(240, 240, 240);
}
```

Some people find RGB more readable than hex because the numbers are in a familiar range. It's especially nice when you're tweaking colors by hand.

## RGBA — RGB with Transparency

Adding an `a` gives you a fourth value for alpha — how opaque the color is. `0` is completely invisible, `1` is fully opaque.

```css
.overlay {
    background-color: rgba(0, 0, 0, 0.5);       /* semi-transparent black */
}

.tooltip {
    background-color: rgba(255, 255, 255, 0.9);  /* nearly solid white */
}
```

This is extremely useful for modals, overlays, and anything you want to slightly see through.

## HSL Colors

HSL stands for Hue, Saturation, Lightness. It's the most intuitive format for humans to reason about:

- **Hue** — the color itself, as a degree on the color wheel (0° and 360° are red, 120° is green, 240° is blue)
- **Saturation** — how vivid or muted the color is (0% is grey, 100% is fully saturated)
- **Lightness** — how light or dark (0% is black, 50% is the true color, 100% is white)

```css
a {
    color: hsl(220, 90%, 50%);   /* a clean blue */
}

a:hover {
    color: hsl(220, 90%, 35%);   /* darker version of the same blue */
}

.muted-text {
    color: hsl(0, 0%, 50%);      /* medium grey — 0% saturation = grey */
}
```

Where HSL really shines is when you're building a color system. Want a lighter variant? Bump the lightness. Need a disabled state? Drop the saturation. You stay in the same hue family without guessing at new hex values.

```css
/* Easy color variations */
.btn-primary   { background-color: hsl(210, 80%, 50%); }
.btn-light     { background-color: hsl(210, 80%, 80%); }  /* lighter */
.btn-dark      { background-color: hsl(210, 80%, 25%); }  /* darker */
.btn-disabled  { background-color: hsl(210, 20%, 60%); }  /* desaturated */
```

## HSLA — HSL with Transparency

Same idea as RGBA — just add the alpha channel:

```css
.glass-card {
    background-color: hsla(0, 0%, 100%, 0.2);  /* frosted-glass white */
}
```

## The `currentColor` Keyword

One underrated trick: `currentColor` refers to whatever `color` is set on the element. This is useful when you want a border or SVG to automatically match the text color.

```css
button {
    color: steelblue;
    border: 2px solid currentColor;  /* border matches text */
}

button:hover {
    color: navy;  /* border also turns navy — no extra rule needed */
}
```

## Which Format Should You Use?

There's no single right answer — different situations call for different formats:

- **Hex** when working from a design file (most tools output hex)
- **RGBA or HSLA** when you need transparency
- **HSL** when building a design system with color variants
- **Named colors** for quick drafts and prototyping

> **Tip:** Browser developer tools let you click on any color swatch and cycle between hex, RGB, and HSL. It's a fast way to experiment without touching code.

Next up is [Backgrounds](../backgrounds/index.md) — which covers a lot more than just `background-color`.
