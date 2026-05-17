# CSS Variables (Custom Properties)

CSS variables — officially called *custom properties* — let you store values in one place and reuse them across your stylesheet. If your brand color changes from blue to purple, you update one line instead of fifty.

## Try It Yourself

Save this HTML. Define your variables in `:root` inside the `<style>` block and watch every element that references them update at once. Toggle the `data-theme="dark"` attribute on `<html>` to test theming.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Variables</title>
    <style>
        :root {
            /* Define your variables here */
        }
        body { font-family: sans-serif; padding: 24px; }
        /* Paste variable-based styles here */
    </style>
</head>
<body>
    <button class="btn">Primary Button</button>
    <button class="btn btn-light">Light Button</button>
    <button class="btn btn-dark">Dark Button</button>

    <div class="card" style="margin-top: 24px; padding: 20px; border-radius: 8px; border: 1px solid #eee;">
        <h2>Card Title</h2>
        <p>Card content using CSS variable colors and spacing.</p>
    </div>

    <div class="alert" style="margin-top: 16px; padding: 16px; border-radius: 4px;">
        Alert message — color should come from a variable.
    </div>
</body>
</html>
```

## Defining a Custom Property

Custom property names start with `--`. You define them like any other CSS declaration:

```css
:root {
    --color-primary: #2563eb;
    --color-text: #222;
    --color-bg: #ffffff;
    --font-size-base: 1rem;
    --spacing-md: 16px;
    --border-radius: 6px;
}
```

`:root` is the `<html>` element. Defining variables there makes them available everywhere in the document — they're global.

## Using a Custom Property

Use the `var()` function to refer to a custom property:

```css
button {
    background-color: var(--color-primary);
    border-radius: var(--border-radius);
    padding: var(--spacing-md);
    font-size: var(--font-size-base);
}

a {
    color: var(--color-primary);
}

body {
    color: var(--color-text);
    background-color: var(--color-bg);
}
```

Now if you ever rebrand, you change `--color-primary` in one place and the entire site updates.

## Fallback Values

`var()` accepts a second argument as a fallback in case the variable isn't defined:

```css
.card {
    background-color: var(--card-bg, white);    /* falls back to white */
    padding: var(--card-padding, 24px);          /* falls back to 24px */
}
```

This is useful for component-level defaults that can be overridden by a parent.

## Scoping Variables to a Component

Variables don't have to be global. You can define them on any element, and they'll only apply within that element's subtree:

```css
:root {
    --color-primary: #2563eb;
}

.alert {
    --color-primary: #dc2626;   /* override for just this component */
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
}
```

Inside `.alert`, `--color-primary` resolves to red. Outside it, it's still blue. This lets you create component-level theming without worrying about global conflicts.

## Theming with CSS Variables

CSS variables are the most common approach to implementing a dark mode toggle:

```css
:root {
    --color-bg: #ffffff;
    --color-text: #111;
    --color-surface: #f4f4f4;
    --color-border: #e0e0e0;
}

[data-theme="dark"] {
    --color-bg: #0f0f0f;
    --color-text: #f4f4f4;
    --color-surface: #1a1a1a;
    --color-border: #333;
}

body {
    background-color: var(--color-bg);
    color: var(--color-text);
}
```

When you add `data-theme="dark"` to `<html>` with JavaScript, the variables swap and the entire site re-themes — no class changes on individual components needed.

## CSS Variables vs Sass Variables

If you've used a preprocessor like Sass, you've used variables with `$color: blue`. CSS custom properties are different in important ways:

- **Sass variables** are compiled away — the output CSS has no variables, just the final values. You can't change them at runtime.
- **CSS variables** live in the browser. You can read and update them with JavaScript, respond to user preferences with media queries, and scope them to specific elements.

```javascript
// Read a CSS variable
const primary = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-primary');

// Update a CSS variable
document.documentElement.style.setProperty('--color-primary', '#9333ea');
```

That second line re-themes the entire site in one statement.

## A Design Token System

A common pattern: define all your design decisions as variables upfront, then use *only* variables in component styles (never hardcoded values):

```css
:root {
    /* Colors */
    --color-brand: #2563eb;
    --color-danger: #dc2626;
    --color-success: #16a34a;
    --color-text-primary: #111;
    --color-text-muted: #666;

    /* Typography */
    --font-sans: 'Inter', Arial, sans-serif;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;

    /* Spacing */
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-6: 24px;
    --space-8: 32px;

    /* Misc */
    --radius-sm: 4px;
    --radius-md: 8px;
    --shadow: 0 1px 3px rgba(0,0,0,0.1);
}
```

Now every component reads from this vocabulary, and changing the design is a matter of updating the token values.

> **Tip:** Browser developer tools show computed custom property values in the inspector. If a variable isn't resolving as expected, inspect the element and look for the variable in the Computed styles panel.

Next: [Transitions](../transitions/index.md) — adding motion to hover states and interactive elements.
