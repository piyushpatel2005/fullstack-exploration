# CSS Transitions and Transforms

Static styles are fine, but a subtle animation when you hover over a button or slide open a menu makes an interface feel polished and alive. CSS transitions and transforms give you that without any JavaScript.

## Try It Yourself

Save this HTML. Hover over the button, card, and thumbnail to see transitions in action as you add the CSS. The accordion icon is ready for a `rotate` transform.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Transitions and Transforms</title>
    <style>
        body { font-family: sans-serif; padding: 40px; }
        .btn {
            background-color: #2563eb;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 1rem;
        }
        .card {
            margin-top: 24px;
            padding: 24px;
            border: 1px solid #eee;
            border-radius: 8px;
            width: 220px;
        }
        .thumbnail {
            margin-top: 24px;
            width: 200px;
            height: 150px;
            background: steelblue;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
        /* Paste transition and transform examples here */
    </style>
</head>
<body>
    <button class="btn">Hover over me</button>

    <div class="card">
        <h3>Card Title</h3>
        <p>Hover over this card.</p>
    </div>

    <div class="thumbnail">Hover to zoom</div>

    <div class="accordion" style="margin-top: 24px; border: 1px solid #eee; padding: 16px; width: 300px;">
        <div class="accordion-header" style="display: flex; justify-content: space-between; cursor: pointer;">
            <span>Click to expand</span>
            <span class="accordion-icon">&#9660;</span>
        </div>
    </div>
</body>
</html>
```

## Transitions

`transition` tells CSS to animate a property change instead of making it instant. When you hover over a button and the background color changes, a transition smooths that change over time.

```css
button {
    background-color: #2563eb;
    transition: background-color 0.2s ease;
}

button:hover {
    background-color: #1d4ed8;
}
```

The transition goes on the **base state**, not the hover state. This way it also animates back when you move your mouse away.

The `transition` value has three parts:
1. **Property** — which CSS property to animate
2. **Duration** — how long the transition takes (`0.2s`, `200ms`)
3. **Timing function** — how the speed changes over the duration

## Timing Functions

```css
transition: color 0.3s ease;          /* starts slow, speeds up, slows down — natural */
transition: color 0.3s linear;        /* constant speed — feels mechanical */
transition: color 0.3s ease-in;       /* starts slow, ends fast */
transition: color 0.3s ease-out;      /* starts fast, ends slow — feels natural */
transition: color 0.3s ease-in-out;   /* slow start and end */
```

`ease` and `ease-in-out` look the most natural for UI elements. `linear` is useful for things like progress bars. For fine-tuned control, `cubic-bezier()` lets you define the exact curve.

## Transitioning Multiple Properties

You can transition several properties at once with commas:

```css
button {
    background-color: #2563eb;
    color: white;
    transform: scale(1);
    box-shadow: none;
    transition:
        background-color 0.2s ease,
        transform 0.15s ease,
        box-shadow 0.2s ease;
}

button:hover {
    background-color: #1d4ed8;
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
```

Or use `all` to transition everything that changes — though this can be a performance trap if overused:

```css
button {
    transition: all 0.2s ease;
}
```

## Transforms

`transform` lets you move, rotate, scale, or skew elements. Crucially, transforms don't affect the document layout — other elements don't move when you transform one.

### `translate` — Move an Element

```css
.card:hover {
    transform: translateY(-4px);   /* move 4px upward on hover */
}

.tooltip {
    transform: translateX(-50%);   /* shift left by 50% of own width — centering trick */
}
```

`translate(x, y)` moves on both axes. `translateX()` and `translateY()` move on one axis.

### `scale` — Resize an Element

```css
.icon:hover {
    transform: scale(1.1);   /* 10% bigger on hover */
}

.thumbnail:hover {
    transform: scale(1.05);  /* subtle zoom effect */
}
```

Scale of `1` is the original size. `0.5` is half size. Values above 1 enlarge.

### `rotate` — Spin an Element

```css
.chevron.open {
    transform: rotate(180deg);   /* flip the arrow upside down */
}

.loader {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
```

Rotation is around the element's center by default. Change the pivot with `transform-origin`.

### Combining Transforms

Multiple transforms on one element are separated by spaces (not commas):

```css
.card:hover {
    transform: translateY(-4px) scale(1.02);
}
```

The order matters — transforms are applied right to left. `translateY scale` means "scale first, then translate."

## `transform-origin`

Sets the point around which the transform is applied. Default is the element's center.

```css
.dropdown-icon {
    transform-origin: center;
    transition: transform 0.2s ease;
}

.dropdown-icon.open {
    transform: rotate(180deg);
}

.label {
    transform-origin: left center;
    transform: scale(0.75);    /* shrinks from the left edge, not the center */
}
```

## Practical Examples

### A Button with Hover Lift

```css
.btn {
    background-color: #2563eb;
    color: white;
    padding: 10px 20px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.35);
}

.btn:active {
    transform: translateY(0);
    box-shadow: none;
}
```

### A Collapsible Accordion Arrow

```css
.accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.accordion-icon {
    transition: transform 0.3s ease;
}

.accordion.open .accordion-icon {
    transform: rotate(180deg);
}
```

### A Card Hover Effect

```css
.card {
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}
```

> **Tip:** Prefer `transform` and `opacity` for animations. They run on the GPU and don't trigger layout recalculations, so they're smooth even on low-powered devices. Animating `width`, `height`, `top`, or `margin` forces the browser to recalculate layout on every frame — noticeably jankier.

Next: [Responsive Design](../responsive/index.md) — making your layouts adapt to any screen size.
