# CSS Backgrounds

Background properties do a lot more than just setting a background color. You can use images, gradients, control how they repeat, position them anywhere, and even layer multiple backgrounds on one element.

## Try It Yourself

Save this HTML file and open it in a browser. Add each CSS example to the `<style>` block — you'll immediately see backgrounds change on `.hero` and `.card`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Backgrounds</title>
    <style>
        .hero {
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .card {
            width: 300px;
            height: 150px;
            margin: 24px;
            padding: 20px;
        }
        /* Paste background examples below */
    </style>
</head>
<body>
    <div class="hero">
        <h1>Hero Section</h1>
    </div>
    <div class="card">
        <p>A content card</p>
    </div>
    <div class="banner" style="padding: 20px;">
        Banner with gradient
    </div>
</body>
</html>
```

## Background Color

You already saw `background-color` briefly — it accepts the same color formats as `color`:

```css
body {
    background-color: #f4f4f4;
}

.card {
    background-color: rgba(255, 255, 255, 0.9);
}
```

## Background Image

To use an image as a background, pass its path to `url()`:

```css
.hero {
    background-image: url('/images/hero.jpg');
    height: 500px;
}
```

By default, the image will tile (repeat) both horizontally and vertically to fill the element. That's almost never what you want for a photo, so you'll usually pair this with a few other properties.

## Background Repeat

```css
.hero {
    background-image: url('/images/hero.jpg');
    background-repeat: no-repeat;   /* don't tile */
}

.pattern {
    background-image: url('/images/tile.png');
    background-repeat: repeat-x;    /* tile only horizontally */
}
```

The options are `repeat` (default), `no-repeat`, `repeat-x`, `repeat-y`, and `space` (tiles with even spacing).

## Background Size

`background-size` controls how big the image is rendered:

```css
.hero {
    background-image: url('/images/hero.jpg');
    background-repeat: no-repeat;
    background-size: cover;   /* scale up until the image covers the whole element */
}

.thumbnail {
    background-image: url('/images/photo.jpg');
    background-size: contain;  /* scale down until the whole image is visible */
}

.logo-bg {
    background-image: url('/images/logo.png');
    background-size: 100px 50px;  /* explicit width and height */
}
```

`cover` and `contain` are the values you'll use most. `cover` is great for full-width hero images — it scales the image up or down to fill the box, cropping the edges if necessary. `contain` makes sure you see the whole image, which may leave empty space on the sides.

## Background Position

By default, images start at the top-left corner. `background-position` lets you change that:

```css
.hero {
    background-image: url('/images/hero.jpg');
    background-size: cover;
    background-position: center;        /* center horizontally and vertically */
}

.portrait {
    background-image: url('/images/person.jpg');
    background-size: cover;
    background-position: top center;    /* keep the top of the image visible */
}

.map {
    background-image: url('/images/map.jpg');
    background-position: 30% 60%;       /* precise percentage positioning */
}
```

When using `cover` on a portrait photo, `background-position: top center` makes sure the person's face stays in frame.

## Background Attachment

`background-attachment` controls whether the background scrolls with the page or stays fixed:

```css
.parallax-section {
    background-image: url('/images/mountains.jpg');
    background-size: cover;
    background-attachment: fixed;   /* image stays put while content scrolls */
}
```

`fixed` creates a parallax scrolling effect. It looks great in demos but can be choppy on mobile, so use it carefully.

## The Background Shorthand

All these properties can be combined into one `background` declaration:

```css
.hero {
    background: url('/images/hero.jpg') no-repeat center / cover;
}
```

The order matters: `image position / size`. This is convenient once you know the syntax, but it can be harder to read. Using individual properties is often clearer in production code.

## Gradients

CSS can generate gradients without any image file. Linear gradients go in a straight line:

```css
.banner {
    background: linear-gradient(to right, #667eea, #764ba2);
}

.fade-down {
    background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7));
}
```

`to right` sets the direction. You can also use angles like `135deg`. The color stops can be hex, rgb, or any other color format.

Radial gradients spread outward from a center point:

```css
.spotlight {
    background: radial-gradient(circle, #fff 0%, #ccc 100%);
}
```

## Layering Backgrounds

You can stack multiple backgrounds by separating them with commas. CSS applies them in order — the first one is on top:

```css
.card {
    background:
        url('/images/logo.png') no-repeat right 20px top 20px,
        linear-gradient(135deg, #1a1a2e, #16213e);
}
```

This puts a logo in the top-right corner over a dark gradient background.

> **Tip:** Use gradients as a color-stops trick to add a dark overlay on top of a background photo — great for making text readable without needing a separate overlay `div`:
>
> ```css
> .hero {
>     background:
>         linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
>         url('/images/hero.jpg') center / cover;
> }
> ```

Next up is [Typography](../typography/index.md) — fonts, sizes, spacing, and everything that affects how text reads.
