# Javascript Data Types

In order to store different kinds of data efficiently, language defines data types. This also provides a way to group common functionalities in the form of methods. In Javascript, the data types can be categorized into two types:

1. **Primitive Data Types**: These are the basic data types that are directly stored in the memory. They are immutable and are passed by value. The primitive data types include:
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol (ES6)
2. **Non-Primitive Data Types**: These are the complex data types that are stored in the memory by reference. They are mutable and are passed by reference. The non-primitive data types include:
    - Object
    - Array
    - Function

## Primitive Data Types

Let's discuss each of the primitive data types in detail:

### Number

The number data type includes numerical values. They can be integers, floating-point numbers, or even scientific numbers. For example:

```javascript
let num1 = 10; // integer
let num2 = 3.14; // floating-point number
let num3 = 2.998e8; // scientific number
console.log(num1, num2, num3);
```

The `Number` data type include a special numerical value called `NaN` (Not-a-Number). It is returned when a mathematical operation is not a valid number. For example:

```javascript
let result = 10 / "Hello";
console.log(result); // NaN
```

This in some manner is similar to `null` and `undefined` values. But, `NaN` is a numeric value representing Not-a-Number.

### String

The string data type includes textual data. They are enclosed within single quotes (`'`) or double quotes (`"`). For example:

```javascript
let str1 = 'Hello, Javascript!';
let str2 = "Javascript is fun!";
console.log(str1, str2);
```

You can also use backticks to create template literals. Template literals allow you to embed expressions within the string. For example:

```javascript
let name = `Alice`;
let greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!
```

Backticks can help construct larger strings easily without having to repeatedly use `+` operator.

### Boolean

The boolean data type includes two values: `true` and `false`. They are used to represent logical values. These can be used to make decisions in the code. The boolean variable names are usually prefixed with `is` or `has`.

```javascript
let isTrue = true;
let isFalse = false;
let hasAdminAccess = false;
console.log(isTrue, isFalse);
```

### Undefined

The `undefined` data type represents a variable that has been declared but not assigned a value.

```javascript
let x;
console.log(x); // undefined
```

### Null

The `null` data type represents an intentional absence of any object value. It is used to represent a variable that has been declared and assigned a value of `null`.

```javascript
let y = null;
console.log(y); // null
```

The difference between `null` and `undefined` is that `null` is an intentional absence of any object value, whereas `undefined` represents a variable that has been declared but not assigned a value.

### Symbol (ES6)

The `Symbol` data type was introduced in ES6. It is used to create unique identifiers for objects. These are useful when you need a value in code that is unique to the scope of the code.

```javascript
let symbol1 = Symbol('id');
let symbol2 = Symbol('id');

console.log(symbol1 === symbol2); // false
console.log(typeof symbol1); // symbol
```

## Non-Primitive Data Types

In Javascript, the non-primitive data types are stored by reference. These includes objects, arrays, and functions. This is just going to be brief introduction to these data types. They will be covered in lot more details in the upcoming lessons.

### Object

The object data type is a collection of key-value pairs. The keys are strings and the values can be of any data type. For example:

```javascript
let person = {
    name: 'John',
    age: 31
};
console.log(person);
console.log(typeof person); // object
```

In Javascript, most of the things are objects. For example, arrays, functions, and even regular expressions are objects. You will learn more about objects in the upcoming sections.

### Array

Arrays are special kind of object that lets you store multiple values in a single variable. The values can be of any data type.

```javascript
let colors = ['red', 'green', 'blue'];
let numbers = new Array(1, 2, 3, 4, 5);
console.log(colors);
console.log(numbers);
```

I will cover arrays in a separate lesson.

### Function

Functions are special kind of object that can be invoked. They are used to define reusable code blocks. Functions can take parameters and return values.

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

let message = greet('Alice');
console.log(message); // Hello, Alice!
```

Don't worry if these concepts are new to you. These will be covered in lot more detail in the upcoming lessons.