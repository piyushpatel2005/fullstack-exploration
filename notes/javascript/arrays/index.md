# Javascript Arrays

An array is a special kind of object that lets you store multiple values in a single variable. The values can be of any data type. It's good data structure to manage data items in an orderly fashion. They are a data structure like list in other languages. In Javascript, arrays are zero-indexed, which means that the first element of the array is at index `0`, the second element is at index 1, and so on.

Some of the properties of Array in Javascript are as below.

1. Arrays are a special kind of objects in Javascript.
2. Arrays are zero-indexed, which means that the first element of the array is at index `0`.
3. Arrays can store values of different data types in the same array.
4. Arrays can store other arrays (nested arrays) as elements.
5. Arrays can have properties and methods to make it easier to work with arrays.

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

An array can also be created using the `new Array()` syntax. The `new Array()` constructor creates an array with the specified length. If you pass a single argument to the `new Array()` constructor, it will create an array with the specified length. By default, when we do not enter values for the array, the values will be `undefined` which is like an empty slot in memory. 

```javascript
let emptyArray = new Array(3);
console.log(emptyArray); // [undefined, undefined, undefined]
```

If you pass multiple arguments, it will create an array with the specified elements.

```javascript
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

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = Array.from(numbers, x => x * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
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

## Copying Arrays

There are multiple ways to copy an array in Javascript.

### Using the `slice()` Method

The `slice()` method creates a new copy of an array. It takes two arguments, the start index and the end index (non-inclusive). If you don't pass any arguments, it will copy the entire array.

```javascript
let colors = ['red', 'green', 'blue', 'purple', 'pink', 'violet', 'teal'];
const favoriteColors = colors.slice(2, 5);
console.log(favoriteColors); // ['blue', 'purple', 'pink']

const allColors = colors.slice();
console.log(allColors); // ['red', 'green', 'blue', 'purple', 'pink', 'violet', 'teal']
```

### Using `from()` method

The `from()` method can also be used to copy an array.

```javascript
let cities = ['Toronto', 'San Francisco', 'New York', 'Los Angeles'];
let copyOfCities = Array.from(cities);
console.log(copyOfCities); // ['Toronto', 'San Francisco', 'New York', 'Los Angeles']
```

### Using destructuring

You can use destructuring to copy an array.

```javascript
let colors = ['red', 'green', 'yellow', 'blue'];
let copyOfColors = [...colors];
console.log(copyOfColors); // ['red', 'green', 'yellow', 'blue']
```

## Iterating Over Array Elements

There are multiple ways to iterate over an array in Javascript.

### Using the `for` Loop

You can use a `for` loop to iterate over an array.

```javascript
let colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
```

### Using the `for...of` Loop

The `for...of` loop is a more modern way to iterate over an array.

```javascript
let colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}
```

### Using the `forEach()` Method

The `forEach()` method is a method that is used to iterate over an array. This is commonly used in functional style of programming and is very convenient way to iterate through collections. The syntax for the `forEach()` loop is as follows.

```javascript
let colors = ['red', 'green', 'blue'];

colors.forEach(function(color, index, array) {
    console.log(`${index + 1}. ${color}`);
});
```