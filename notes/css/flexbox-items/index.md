# Flexbox Items

The previous two lessons focused on the flex container. Now let's look at what you can control on the individual items inside it. This is where you decide how much space each item should take up, whether it can shrink, and what order they appear in.

## Try It Yourself

Save this HTML. It has a sidebar+main layout, a row of items for testing `flex-grow`/`shrink`, and a pricing card row with a `.highlighted` plan — all ready for the item-level properties in this lesson.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Flexbox Items</title>
    <style>
        body { font-family: sans-serif; margin: 0; padding: 24px; }
        .layout, .row {
            display: flex;
            border: 1px solid #ccc;
            padding: 8px;
            gap: 8px;
            margin-bottom: 24px;
        }
        .item {
            background-color: steelblue;
            color: white;
            padding: 16px;
        }
        /* Paste flex item examples here */
    </style>
</head>
<body>
    <div class="layout">
        <div class="item sidebar">Sidebar</div>
        <div class="item main">Main content area</div>
    </div>

    <div class="row">
        <div class="item">Item A</div>
        <div class="item">Item B</div>
        <div class="item">Item C</div>
    </div>

    <div class="plans" style="display: flex; gap: 16px;">
        <div class="plan" style="border: 1px solid #eee; padding: 20px; border-radius: 8px;">
            <h3>Basic</h3>
            <div class="plan-price">$9/mo</div>
            <ul class="plan-features"><li>1 user</li><li>5 projects</li></ul>
            <button class="plan-cta">Get Started</button>
        </div>
        <div class="plan highlighted" style="border: 1px solid #2563eb; padding: 20px; border-radius: 8px;">
            <h3>Pro</h3>
            <div class="plan-price">$29/mo</div>
            <ul class="plan-features"><li>5 users</li><li>Unlimited projects</li><li>Priority support</li></ul>
            <button class="plan-cta">Get Started</button>
        </div>
        <div class="plan" style="border: 1px solid #eee; padding: 20px; border-radius: 8px;">
            <h3>Enterprise</h3>
            <div class="plan-price">$99/mo</div>
            <ul class="plan-features"><li>Unlimited users</li><li>Dedicated support</li></ul>
            <button class="plan-cta">Contact Sales</button>
        </div>
    </div>
</body>
</html>
```

## `flex-grow`

`flex-grow` tells an item how much of the **remaining space** it should claim. It's a ratio — if one item has `flex-grow: 2` and another has `flex-grow: 1`, the first gets twice as much of the leftover space.

```css
.container {
    display: flex;
    width: 600px;
}

.sidebar {
    flex-grow: 1;   /* takes 1/4 of extra space */
    width: 150px;
}

.main {
    flex-grow: 3;   /* takes 3/4 of extra space */
    width: 150px;
}
```

Both start at 150px. The remaining 300px gets split 1:3 between them. Sidebar ends up at 225px, main at 375px.

The default is `flex-grow: 0` — items don't grow by default, they just take up as much space as their content needs.

A common use: `flex-grow: 1` on all items to make them share space equally, or on just one item to make it fill whatever's left.

```css
/* Main content fills all available space, sidebar stays fixed */
.layout {
    display: flex;
}

.sidebar  { width: 250px; }
.content  { flex-grow: 1; }   /* takes all remaining horizontal space */
```

## `flex-shrink`

`flex-shrink` is the opposite of `flex-grow`. It controls how much an item shrinks when the container is *smaller* than the combined size of its items.

```css
.no-shrink {
    flex-shrink: 0;   /* this item will not shrink, even if container is too small */
}

.will-shrink {
    flex-shrink: 1;   /* default — will shrink proportionally */
}
```

The most common use of `flex-shrink: 0` is on a logo or icon that should never get squished, even when the screen narrows.

```css
.navbar {
    display: flex;
    align-items: center;
}

.logo {
    flex-shrink: 0;   /* logo never shrinks */
    width: 120px;
}

.nav-links {
    flex-grow: 1;     /* links fill remaining space */
}
```

## `flex-basis`

`flex-basis` sets the item's initial size *before* any growing or shrinking happens. Think of it as the starting point.

```css
.item {
    flex-basis: 200px;   /* start at 200px, then grow/shrink from there */
}

.item {
    flex-basis: 25%;     /* start at 25% of the container */
}

.item {
    flex-basis: auto;    /* default: use the item's width (or content size) */
}
```

`flex-basis` overrides `width` in a flex context. If you set both, `flex-basis` wins (unless `flex-basis` is `auto`, in which case `width` is used as the basis).

## The `flex` Shorthand

`flex` combines all three properties: `flex-grow`, `flex-shrink`, and `flex-basis`.

```css
.item {
    flex: 1;          /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
}

.item {
    flex: 0 0 200px;  /* grow: 0, shrink: 0, basis: 200px — fixed width item */
}

.item {
    flex: 2 1 auto;   /* grow: 2, shrink: 1, basis: auto */
}
```

`flex: 1` is the shorthand you'll use most often. It makes the item grow to fill available space equally with other `flex: 1` siblings. Note that it sets `flex-basis: 0`, not `auto` — this means items start from zero and grow proportionally rather than starting from their content size.

Common recipes:

```css
/* All items equal width regardless of content */
.item { flex: 1; }

/* Fixed sidebar, flexible main */
.sidebar { flex: 0 0 250px; }
.main    { flex: 1; }

/* Item that won't grow or shrink */
.icon { flex: none; }  /* same as flex: 0 0 auto */
```

## `order`

By default, flex items appear in their HTML source order. `order` lets you change that visually without touching the HTML.

```css
.item-a { order: 2; }
.item-b { order: 1; }  /* appears first visually */
.item-c { order: 3; }
```

Lower numbers come first. The default is `0`, so setting `order: -1` will move an item before everything else.

```css
/* Move the "featured" article to the front visually */
.article-featured {
    order: -1;
}
```

> **Important:** Reordering with `order` changes visual order only, not the DOM order that screen readers and keyboard navigation follow. If the reading order matters for accessibility, reorder the HTML instead.

## Practical Example: A Pricing Card Row

```css
.plans {
    display: flex;
    gap: 24px;
}

.plan {
    flex: 1;             /* all plans take equal width */
    display: flex;
    flex-direction: column;
    padding: 24px;
    border: 1px solid #eee;
    border-radius: 8px;
}

.plan-price {
    font-size: 2rem;
    font-weight: 700;
}

.plan-features {
    flex: 1;             /* features list fills available space */
}

.plan-cta {
    margin-top: auto;    /* button always sits at the bottom */
}

.plan.highlighted {
    order: -1;           /* featured plan appears first */
    border-color: #2563eb;
}
```

All plans are equal width, the feature list stretches to fill each card, and the button always sticks to the bottom — no matter how much content each plan has.

Next: [Flexbox Layouts](../flexbox-layouts/index.md) — putting it all together with real-world layout examples.
