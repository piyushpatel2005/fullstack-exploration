# Javascript Arrays

An array is a special kind of object that lets you store multiple values in a single variable. The values can be of any data type. In Javascript, arrays are zero-indexed, which means that the first element of the array is at index `0`, the second element is at index 1, and so on.

## Creating Arrays

There are two ways to create arrays in Javascript:

1. Using the array literal syntax
2. Using the `new Array()` syntax
3. Using the `Array.from()` method
4. Using the `Array.of()` method

### Using Array Literal Syntax

The array literal syntax is the most common way to create arrays in Javascript. Simply create the array using square brackets `[]` and define the array values inside the brackets.

```javascript
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits); // ['apple', 'banana', 'cherry']
```

To create an empty array, you can simply use square brackets `[]`.

```javascript
let emptyArray = [];
console.log(emptyArray); // []
console.log(typeof emptyArray); // object
```

### Using `new Array()` Syntax

An array can also be created using the `new Array()` syntax. The `new Array()` constructor creates an array with the specified length. If you pass a single argument to the `new Array()` constructor, it will create an array with the specified length. If you pass multiple arguments, it will create an array with the specified elements.

```javascript

let emptyArray = new Array(3);
console.log(emptyArray); // [undefined, undefined, undefined]

let fruits = new Array('apple', 'banana', 'cherry');
console.log(fruits); // ['apple', 'banana', 'cherry']
```

### Using `Array.from()` Method

The `Array.from()` method creates a new array from an array-like or iterable object. It takes two arguments: the array-like or iterable object to convert to an array, and an optional mapping function to apply to each element of the new array.

```javascript
let arrayLike = {0: 'apple', 1: 'banana', 2: 'cherry', length: 3};
let fruits = Array.from(arrayLike);
console.log(fruits); // ['apple', 'banana', 'cherry']
```

### Using `Array.of()` Method

The `Array.of()` method creates a new array with the specified elements. It is similar to the `Array()` constructor, but it does not have the special case for creating arrays with a single numeric argument.

```javascript
let numbers = Array.of(1, 2, 3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]
```

### Using `fill()` Method

The `fill()` method fills all the elements of an array from a start index to an end index with a static value. It takes three arguments: the value to fill the array with, the start index, and the end index.

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 2, 4);
console.log(numbers); // [1, 2, 0, 0, 5]
```

### Using `from()` Method

The `from()` method creates a new array from an array-like or iterable object. It takes two arguments: the array-like or iterable object to convert to an array, and an optional mapping function to apply to each element of the new array.

```javascript
let arrayLike = {0: 'apple', 1: 'banana', 2: 'cherry', length: 3};
let fruits = Array.from(arrayLike);
console.log(fruits); // ['apple', 'banana', 'cherry']
```

## Accessing Array Elements

Arrays are zero-indexed in Javascript. In order to access elements from an array, we can use their index position to retrieve a specific element at any index.

```javascript
let students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
console.log(students[0]); // Alice
console.log(students[2]); // Charlie
```

You can get length of the array using the `length` property.

```javascript
let students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
console.log(students.length); // 5
```

In above code, the `students` array has five elements. They are from index position `0` until `4`. If you try to access an index value which doesn't exist in the array, it will return `undefined`.

```javascript
let students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
console.log(students[5]); // undefined
```

## Modifying Array Elements

You can modify array elements by assigning new values to them using their index position.

```javascript
let colors = ['red', 'green', 'blue'];
colors[1] = 'yellow';
console.log(colors); // ['red', 'yellow', 'blue']
```
