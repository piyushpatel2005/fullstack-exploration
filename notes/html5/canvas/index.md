# HTML5 Canvas Element

The HTML `<canvas>` element is used to draw graphics and animations on a web page. The `<canvas>` element creates an empty white board where you can use Javascript to draw visual graphics.

The basic syntax for creating an empty canvas looks like this.

```html
<canvas width="640" height="320"></canvas>
```

This creates an empty canvas with width of 640px and height of 320px.

## Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Canvas</title>
    <style>
        canvas {
            border: 1px solid gray;
        }
    </style>
</head>
<body>
<h1>Empty Canvas</h1>
<canvas width="640" height="320"
</body>
</html>
```

This creates an empty canvas on the webpage with borders around it. It doesn't have anything inside it and is just a boring box without Javascript.

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Canvas</title>
    <style>
        canvas {
            border: 1px solid gray;
        }
    </style>
</head>
<body>
<h1>Canvas with Rectangle and Text</h1>
<canvas id="canvas" width="640" height="320"></canvas>
<script>
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "red"
    context.font = "20px solid"
    context.fillText("Canvas: Drawing image", 10, 50);
    canvas.
    context.strokeRect(10, 80, 100, 100);
</script>
</body>
</html>
```

Below example creates a canvas with triangle drawn in it.

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Canvas</title>
    <style>
        canvas {
            border: 1px solid gray;
        }
    </style>
</head>
<body>
    <h1>Canvas with Triangle Arrow</h1>
    <canvas id="canvas" width="640" height="320"></canvas>
    <script>
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");
        context.fillStyle = "orange"
    
        context.beginPath();
        context.moveTo(50, 50);
        context.lineTo(100, 100);
        context.lineTo(50, 150);
        context.fill();
    </script>
</body>
</html>
```
