# CSS Specificity

The word **cascade** in CSS stands for the order in which styles are applied to an element. When multiple rules target the same element and set the same property, the browser needs a way to decide which one wins. That decision is based on three things: **inheritance**, **specificity**, and **source order**. Understanding all three turns confusing CSS bugs into predictable, solvable problems.

## Try It Yourself

Save this HTML. It has elements targeted by tags, classes, IDs, and inline styles — the perfect sandbox for testing which rule wins in a conflict.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Specificity</title>
    <link rel="stylesheet" href="external.css">
    <style>
        /* Paste specificity examples here */
    </style>
</head>
<body>
    <p>A plain paragraph</p>
    <p class="highlight">A paragraph with a class</p>
    <p class="highlight special">A paragraph with two classes</p>
    <p id="intro">A paragraph with an ID</p>
    <p id="intro" class="highlight">ID and class together</p>
    <p style="color: green;">Inline style paragraph</p>

    <div class="container">
        <p>A paragraph inside a div</p>
        <p class="note">A classed paragraph inside a div</p>
    </div>
</body>
</html>
```

## Inheritance

Inheritance is the process by which styles pass down from parent elements to child elements. When you set a CSS property on a parent, its children may inherit that value automatically.

```css
body {
    font-family: 'Inter', sans-serif;
    color: #222;
    line-height: 1.6;
}
```

Every `<p>`, `<h1>`, `<span>`, and other text element on the page inherits `font-family`, `color`, and `line-height` from `body` — you don't need to repeat it on each element.

Not every property inherits, though. Here are some that **do** inherit by default:

- `color`, `font-family`, `font-size`, `font-weight`, `font-style`
- `line-height`, `letter-spacing`, `text-align`
- `list-style`, `cursor`, `visibility`

And some that **do not** inherit (they reset for each element):

- `background-color`, `background-image`
- `border`, `padding`, `margin`
- `width`, `height`, `display`, `position`

```css
/* background-color does NOT inherit */
body {
    background-color: lightgrey;
}
/* Children don't get lightgrey automatically */

/* But color DOES inherit */
body {
    color: #333;
}
/* All text in the body becomes #333 */
```

### Forcing Inheritance

You can force any property to inherit from its parent using the `inherit` keyword:

```css
.card {
    border: 2px solid blue;
}

.card p {
    border: inherit;  /* paragraph gets the same blue border */
}
```

Or reset to the browser's default with `initial`, or do both at once with `unset` (inherits if the property normally inherits, otherwise resets to initial).

## Specificity

When two rules target the same element and set the same property, specificity determines which one wins. Every selector has a specificity score — the rule with the higher score is applied.

### The Specificity Scale

Specificity is calculated on three tiers, often written as **(A, B, C)**:

| Selector type | Tier | Example |
|---|---|---|
| Inline `style=""` attribute | A | `style="color: red"` |
| ID selectors (`#id`) | A | `#intro` |
| Class selectors (`.class`) | B | `.highlight` |
| Attribute selectors (`[type]`) | B | `[type="text"]` |
| Pseudo-classes (`:hover`) | B | `a:hover` |
| Element selectors (`div`, `p`) | C | `p` |
| Pseudo-elements (`::before`) | C | `p::before` |
| Universal selector (`*`) | — | None (zero specificity) |

To calculate: count the number of each tier in the selector, write them as **(A, B, C)**, and compare left to right.

```css
p               { color: black; }    /* (0, 0, 1) */
.highlight      { color: blue; }     /* (0, 1, 0) */
#intro          { color: green; }    /* (1, 0, 0) */
div p           { color: purple; }   /* (0, 0, 2) */
div .highlight  { color: orange; }   /* (0, 1, 1) */
```

Applied to `<p id="intro" class="highlight">`:
- `p` → **(0,0,1)** — loses
- `.highlight` → **(0,1,0)** — beats `p`
- `div .highlight` → **(0,1,1)** — beats `.highlight` alone
- `#intro` → **(1,0,0)** — beats everything above
- `style="color: red"` → **(1,0,0,0)** — beats ID selectors

### Specificity in Practice

```css
/* (0,0,1) — element */
p { color: black; }

/* (0,1,0) — class beats element */
.highlight { color: blue; }

/* (0,2,0) — two classes beat one class */
.highlight.special { color: purple; }

/* (0,1,1) — class + element */
div p { color: grey; }

/* (0,1,1) — same specificity as above, source order decides */
.container p { color: navy; }

/* (1,0,0) — ID beats all classes */
#intro { color: green; }
```

A useful mental model: think of specificity as a four-digit number. A rule with score (1,0,0) beats any number of (0,1,0) rules, just like 1000 beats any number of hundreds.

### Comparing Selectors — Examples

```css
/* Which rule wins for <a class="nav-link" href="/"> inside <nav>? */

nav a           { color: grey; }      /* (0,0,2) */
.nav-link       { color: blue; }      /* (0,1,0) — wins: 0,1,0 > 0,0,2 */
nav .nav-link   { color: navy; }      /* (0,1,1) — wins over both */
a.nav-link      { color: teal; }      /* (0,1,1) — tie with above, source order decides */
```

## The Cascade (Source Order)

When two rules have **equal specificity**, the one that appears later in the stylesheet wins — this is the cascade.

```css
p { color: red; }
p { color: blue; }  /* blue wins — it comes later */
```

Source order also matters across stylesheet files. A later `<link>` tag overrides an earlier one for equal-specificity rules. This is why a CSS reset is usually placed first — component styles should override reset styles, not the other way around.

```html
<link rel="stylesheet" href="reset.css">   <!-- loaded first -->
<link rel="stylesheet" href="styles.css">  <!-- overrides reset for equal specificity -->
```

## `!important`

`!important` is an override that bypasses the specificity system and forces a rule to win — even against inline styles.

```css
p { color: black !important; }

#intro { color: green; }       /* specificity wins normally... */
/* but !important on p overrides even the ID selector */
```

Use it very sparingly. Once you start relying on `!important`, the only way to override it is with another `!important`, and you end up in a specificity war that makes the CSS impossible to maintain.

Legitimate uses:
- Utility classes that should always apply (`.sr-only`, `.hidden`)
- Overriding third-party library styles you can't touch

```css
/* Accessibility utility — should ALWAYS hide visually */
.sr-only {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    overflow: hidden !important;
    clip: rect(0,0,0,0) !important;
}
```

## Debugging Specificity Conflicts

When a style isn't applying and you can't figure out why, open the browser's dev tools and inspect the element. In the Styles panel:

- Rules that are **crossed out** lost the specificity battle
- Each rule shows the selector that applied it — you can see exactly which selector is winning
- Hover over the selector to see its specificity score

A common trap: writing a long descendant selector to override something, when you could just add a class instead.

```css
/* This has (0, 0, 4) specificity — fragile and hard to override later */
body main section article p { color: red; }

/* This has (0, 1, 0) and is much easier to reason about */
.article-text { color: red; }
```

## The Order of Priority

From weakest to strongest:

1. **Browser defaults** (user agent stylesheet)
2. **Inherited styles** (from parent elements)
3. **CSS file rules** — ordered by specificity, then source order
4. **Inline styles** (`style=""` attribute)
5. **`!important`** (last resort override)

> **Tip:** If you're finding yourself reaching for `!important` often, that's usually a sign the CSS architecture needs rethinking. A flatter, more class-based approach (like [BEM](http://getbem.com/)) keeps specificity low and predictable across the whole project.

Next: check out [Colors](../colors/index.md) or continue where you left off in the table of contents.
