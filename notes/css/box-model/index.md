# The CSS Box Model

Every element in a web page — a paragraph, a button, a div — is a rectangular box. The box model describes what makes up that box and how its size is calculated. Once you understand this, layout problems that used to seem mysterious will start making sense.

## Try It Yourself

Save this HTML and open it in a browser. Add the CSS examples to the `<style>` block — use your browser's dev tools (right-click → Inspect) to see the box model diagram as you add padding, borders, and margins.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>The Box Model</title>
    <style>
        /* Starter reset */
        *, *::before, *::after {
            box-sizing: border-box;
        }
        /* Paste examples below */
    </style>
</head>
<body>
    <div class="card">
        <h2>Card Title</h2>
        <p>Card body text goes here.</p>
    </div>
    <div class="box">I am a box</div>
    <div class="centered">I should be centered</div>
</body>
</html>
```

## The Four Layers

Each box has four layers, from the inside out:

1. **Content** — the actual text, image, or child elements
2. **Padding** — space between the content and the border
3. **Border** — a line around the padding
4. **Margin** — space outside the border, pushing away from other elements

```css
.card {
    width: 300px;
    padding: 20px;
    border: 2px solid #ccc;
    margin: 16px;
}
```

You can visualize it like a picture frame: the content is the photo, padding is the white mat inside the frame, the border is the frame itself, and the margin is the space between frames on the wall.

## The Sizing Problem

Here's where things get confusing if you don't know about `box-sizing`. By default, CSS uses `content-box` sizing — `width` and `height` only control the content area, and padding + border are added *on top* of that.

So this element actually takes up 344px wide, not 300px:

```css
.card {
    width: 300px;       /* content width */
    padding: 20px;      /* adds 40px total (20px each side) */
    border: 2px solid;  /* adds 4px total (2px each side) */
    /* actual width = 300 + 40 + 4 = 344px */
}
```

That means if you have a container that's 300px wide and you put this card inside it, the card overflows.

## The Fix: `box-sizing: border-box`

With `border-box`, the width you set *includes* padding and border. CSS works backwards to figure out the content area:

```css
.card {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 2px solid;
    /* actual width = 300px exactly. content area = 300 - 40 - 4 = 256px */
}
```

This is almost always the behavior you want. Most projects apply it globally with this trick:

```css
*, *::before, *::after {
    box-sizing: border-box;
}
```

Put this at the top of your stylesheet and forget about the `content-box` problem forever. Modern CSS resets and frameworks like Tailwind include this automatically.

## Padding

Padding can be set on all sides at once or individually:

```css
/* all four sides */
.box { padding: 20px; }

/* top/bottom  left/right */
.box { padding: 10px 20px; }

/* top  left/right  bottom */
.box { padding: 10px 20px 15px; }

/* top  right  bottom  left (clockwise from top) */
.box { padding: 10px 20px 15px 5px; }

/* individual sides */
.box {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 15px;
    padding-left: 5px;
}
```

The shorthand goes clockwise starting from the top — a helpful mnemonic is **TR**ou**BL**e: Top, Right, Bottom, Left.

## Border

Border has three parts — width, style, and color:

```css
.box {
    border: 2px solid #333;          /* shorthand */
}

.fancy {
    border-top: 4px solid #2563eb;   /* only top border */
    border-bottom: 1px dashed #ccc;  /* dashed bottom */
}
```

Available border styles: `solid`, `dashed`, `dotted`, `double`, `none`.

You can also round corners with `border-radius`:

```css
.button {
    border-radius: 4px;      /* slightly rounded */
}

.pill {
    border-radius: 9999px;   /* fully rounded ends */
}

.circle {
    border-radius: 50%;      /* perfect circle (if width = height) */
}
```

## Margin

Margin works the same way as padding for the shorthand syntax, but it controls space *outside* the element:

```css
.section {
    margin: 40px 0;     /* 40px top/bottom, 0 left/right */
}

.centered {
    margin: 0 auto;     /* auto left/right margin = horizontally center the block */
}
```

`margin: 0 auto` is the classic way to horizontally center a block element — it splits the remaining horizontal space evenly between left and right.

## Margin Collapse

One thing that trips up almost everyone: vertical margins collapse. If two elements are stacked vertically and both have margins, the space between them is the *larger* of the two margins, not the sum.

```css
p {
    margin-bottom: 20px;
}

h2 {
    margin-top: 30px;
}
/* space between them = 30px, not 50px */
```

This is by design — it prevents huge gaps when paragraphs are stacked inside containers. Margin collapse only happens vertically, not horizontally.

> **Tip:** Open your browser developer tools and hover over any element. The box model diagram in the inspector shows exactly how much space is padding, border, and margin. It's the fastest way to debug spacing issues.

Next up is [Display](../display/index.md) — understanding `block`, `inline`, and `inline-block` unlocks why elements sit where they do.
