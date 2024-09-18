# Javascript Math Functions

The `Math` object in Javascript provides a set of mathematical functions and constants. These functions are used to perform common mathematical operations such as rounding, exponentiation, trigonometry, and more. You can access the properties and methods of the `Math` object using the dot notation. `Math` works with the `Number` data type.

## Properties

The `Math` object has several properties that are useful for mathematical calculations. Here are some of the commonly used properties.

- `Math.PI`: The mathematical constant π (pi) which is approximately equal to 3.14159.
- `Math.E`: The mathematical constant e which is approximately equal to 2.71828.

```javascript
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
```

`Math.PI` can be useful for converting degrees to radians and vice versa.

```javascript
let degrees = 90;
let radians = degrees * (Math.PI / 180);
console.log(radians); // 1.5707963267948966
```

It can also be used to calculate area and circumference of a circle.

```javascript
let radius = 5;
let area = Math.PI * radius * radius;
let circumference = 2 * Math.PI * radius;
```

## Methods

The `Math` object has several mathematical metohds which are commonly used to perform mathematical operations.

- `Math.abs()`: Returns the absolute value of a number.
- `Math.ceil()`: Returns the smallest integer greater than or equal to a number.
- `Math.floor()`: Returns the largest integer less than or equal to a number.
- `Math.round()`: Returns the value of a number rounded to the nearest integer. If the number is between two integers, it rounds up.

```javascript
console.log(Math.abs(-5)); // 5
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.round(4.5)); // 5
```

- `Math.max()`: Returns the largest of zero or more numbers.
- `Math.min()`: Returns the smallest of zero or more numbers.

```javascript
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1
```

- `Math.pow()`: Returns the base to the exponent power.
- `Math.sqrt()`: Returns the square root of a number.

```javascript
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
```

- `Math.random()`: Returns a random number between 0 (inclusive) and 1 (exclusive).

```javascript
console.log(Math.random()); // 0.123456789
```

This can be used to create a random number between a range.

```javascript
console.log(Math.floor(Math.random() * 100)); // Random number between 0 and 9
```

- `Math.sin()`, `Math.cos()`, `Math.tan()`: Returns the sine, cosine, and tangent of a number.

```javascript
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1
```

- `Math.log()`, `Math.exp()`: Returns the natural logarithm and the exponential value of a number.

```javascript
console.log(Math.log(Math.E)); // 1
console.log(Math.exp(1)); // 2.718281828459045
```