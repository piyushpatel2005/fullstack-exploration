# Type Casting in Javascript

Sometimes, you may need a variable to be of different type in order to perform specific action on it. For example, you may need to convert a string to a number in order to perform arithmetic operations on it. This process of converting a variable from one type to another is called type casting.

In Javascript, there are two types of type conversions: implicit and explicit.

## Implicit type conversion

It is done automatically by Javascript when an operator expects a certain type. For example, when you want to print values of different variables, Javascript will automatically convert them to string type.

```javascript
let number = 42;
let string = 'The answer is ' + number;
console.log(string); // The answer is 42
```

In the above code, the `number` variable is created with a value of type `Number` but it is implicitly converted to a string when it is concatenated with another string.

```javascript
console.log(5 + '5'); // 55
```

In above example as well, it is implicitly converting the number `5` to a string and concatenating it with another string.

## Explicit type conversion

Explicit type conversion is done manually by the programmer using built-in functions. This can be useful when you want to convert a variable from one type to another. In Javascript, you can use the following functions for type conversion:

- `Number()`: Converts a value to a number.
- `String()`: Converts a value to a string.
- `Boolean()`: Converts a value to a boolean.

### Conversion using `Number()`

This function can be used to convert string values into `Number` data type.

```javascript
let number = '42';
console.log(Number(number)); // 42

let doubleValue = '3.14';
console.log(Number(doubleValue)); // 3.14
```

### Conversion using `Boolean()`

The `Boolean()` function can be used to convert to a boolean value.

```javascript
let stringValue = 'hello';
console.log(Boolean(stringValue)); // true

stringValue = "";
console.log(Boolean(stringValue)); // false

let numberValue = 3.14;
console.log(Boolean(numberValue)); // true

numberValue = 0;
console.log(Boolean(numberValue)); // false
```

As you can see in above example, you can convert string or number types to boolean values. Basically if string is non-empty, it is treated as `true` else `false`. Similarly, for number values, unless number is `0`, it is treated as `true`.

### Conversion using `String()`

You can convert number or boolean values into string data type using `String()` function. You could also use `toString()` method on variables of `Number` type or `Boolean` type to convert them to their string representation.

```javascript
let number = 10;
let numberString = number.toString();
console.log(numberString); // 10
console.log(typeof numberString); // string

numberString = String(number);
console.log(typeof numberString); // string

let pi = 3.14;
let piString = String(pi);
console.log(typeof piString, piString); // string, 3.14

let booleanValue = true;
let booleanString = String(booleanValue);
console.log(typeof booleanString, booleanString); // string, true
```

Sometimes, you may also need to convert `float` to `int` or vice versa. You can use `parseInt()` and `parseFloat()` functions for this purpose. The `parseInt()` function will truncate the decimal part of the float number and return the integer part.

```javascript
let floatNumber = 3.14;
let intNumber = parseInt(floatNumber);
console.log(intNumber); // 3

let intNumber2 = 5;
let floatNumber2 = parseFloat(intNumber2);
console.log(typeof floatNumber2); // 5
```

As you can see value of `3.14` gets converted to `3` when `parseInt()` is used. If the value was `3.98`, it would still be converted to `3` because `parseInt()` rounds down the value.