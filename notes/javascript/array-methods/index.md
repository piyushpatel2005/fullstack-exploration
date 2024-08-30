# Array Methods

Javascript arrays have several methods built-in that can be used to perform various operations on arrays. These methods provide convenient functionalities needed to easily work with arrays.

## `push()` method

The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

```javascript
const countries = ['USA', 'Canada', 'Mexico'];
console.log(countries.push('Brazil')); // 4
console.log(countries); // ['USA', 'Canada', 'Mexico', 'Brazil']
```

You can also add multiple elements to the end of an array by passing them as arguments to the `push()` method.

```javascript
countries.push('India', 'China');
console.log(countries); // ['USA', 'Canada', 'Mexico', 'Brazil', 'India', 'China']
```

## `pop()` method

The `pop()` method removes the last element from an array and returns that element. This method changes the length of the array.

```javascript
const countries = ['USA', 'Canada', 'Mexico', 'Brazil'];
console.log(countries.pop()); // 'Brazil'
console.log(countries); // ['USA', 'Canada', 'Mexico']
```

## `shift()` method

The `shift()` method removes the first element from an array and returns that element. This method changes the length of the array.

```javascript
const countries = ['USA', 'Canada', 'Mexico', 'Brazil'];
console.log(countries.shift()); // 'USA'
console.log(countries); // ['Canada', 'Mexico', 'Brazil']
```

If the `length` property of the array is `0`, the `shift()` method returns `undefined`.

```javascript
const countries = [];
console.log(countries.shift()); // undefined
```

## `unshift()` method

The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

```javascript
const countries = ['USA', 'Canada', 'Mexico'];
console.log(countries.unshift('Brazil')); // 4
console.log(countries); // ['Brazil', 'USA', 'Canada', 'Mexico']
```

You can also add multiple elements to the beginning of an array by passing them as arguments to the `unshift()` method.

```javascript
countries.unshift('India', 'China');
console.log(countries); // ['India', 'China', 'Brazil', 'USA', 'Canada', 'Mexico']
```

## `concat()` method

The `concat()` method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array containing the elements of the arrays that were merged.

```javascript
const countries1 = ['USA', 'Canada'];
const countries2 = ['Mexico', 'Brazil'];
const mergedCountries = countries1.concat(countries2);
console.log(mergedCountries); // ['USA', 'Canada', 'Mexico', 'Brazil']
```

You can also merge multiple arrays by passing multiple arrays as arguments to the `concat()` method.

```javascript
const numbers = [1, 2, 3];
const evens = [4, 6, 8];
const odds = [5, 7, 9];
const multiple = numbers.concat(evens, odds);
console.log(multiple); // [1, 2, 3, 4, 6, 8, 5, 7, 9]
```

## `slice()` method

The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `begin` to `end` (`end` not included) where `begin` and `end` represent the index of items in that array. The original array will not be modified.

```javascript
const numbers = [1, 2, 3, 4, 5];
const slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers); // [2, 3, 4]
```

If `begin` is not specified, the `slice()` method will start from the beginning of the array. If `end` is not specified, the `slice()` method will slice until the end of the array.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice(2)); // [3, 4, 5]
console.log(numbers.slice(1, 3)); // [2, 3]
```

The `slice()` method can also take negative indices, which will count from the end of the array.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice(-3)); // [3, 4, 5]
console.log(numbers.slice(-4, -1)); // [2, 3, 4]
```

In above example, the last element of the `numbers` array is at index `-1` and the first element is at index `-5`.

## `splice()` method

The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. This method returns an array containing the deleted elements. It's syntax looks like this.

```javascript
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 0, 6); // insert at 2, delete 0 items and value to insert is 6
console.log(numbers); // [1, 2, 6, 3, 4, 5]
```

This method can also be used to delete elements from an array.

```javascript
numbers.splice(3, 1); // delete 1 item at index 3
console.log(numbers); // [1, 2, 6, 4, 5]
```

You can also insert multiple elements and delete multiple elements using the `splice()` method.

```javascript
numbers.concat(1, 3, 7, 8); // insert at 1, delete 3 items and values to insert are 7, 8
console.log(numbers); // [1, 7, 8, 4, 5]
```

## `indexOf()` method

The `indexOf()` method returns the first index at which a given element can be found in the array, or `-1` if it is not present.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.indexOf(3)); // 2
console.log(numbers.indexOf(6)); // -1
```

## `lastIndexOf()` method

The `lastIndexOf()` method returns the last index at which a given element can be found in the array, or `-1` if it is not present.

```javascript
const numbers = [1, 2, 3, 4, 5, 3];
console.log(numbers.lastIndexOf(3)); // 5
console.log(numbers.lastIndexOf(6)); // -1
```

## `includes()` method

The `includes()` method determines whether an array includes a certain element, returning `true` or `false` as appropriate.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // true
console.log(numbers.includes(6)); // false
```

## `join()` method

The `join()` method creates and returns a new string by concatenating all of the elements in an array, separated by a parameter passed in the function. By default, this character is comma `,` if nothing is passed.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.join()); // '1,2,3,4,5'

const names = ['John', 'Johny', 'Jackson'];
console.log(names.join(';')); // 'John;Johny;Jackson'
```

## `reverse()` method

The `reverse()` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]
```

## `sort()` method

The `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

```javascript
const fruits = ['banana', 'apple', 'orange', 'mango'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'mango', 'orange']
```

You can also pass a compare function to define your own sort order. This will be covered once we start learning about functional programming.

## `fill()` method

The `fill()` method fills all the elements of an array from a start index to an end index with a static value. The end index is not included.

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 2, 4);
console.log(numbers); // [1, 2, 0, 0, 5]
```

## `at()` method

The `at()` method takes an index and returns the element at that index. It is similar to using the square bracket notation.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.at(2)); // 3
```

## `copyWithin()` method

The `copyWithin()` method shallow copies part of an array to another location in the same array and returns it without modifying its length.

The syntax for this function looks like this.

```javascript
array.copyWithin(target, start, end)
```

Here `target` is the index at which to copy the sequence to, `start` is the index at which to start copying elements from, and `end` is the index at which to end copying elements from.

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3, 5);
console.log(numbers); // [4, 5, 3, 4, 5]
```

In this example, we are copying elements from index `3` to `5` to index position `0`.

## Other Methods

There are also several other methods with array which are used mostly in functional programming. These are methods like `map()`, `filter()`, `reduce()`, `forEach()`, `some()`, `every()`, `find()`, `sort()`, etc. which will be covered in upcoming lesson on functional programming.
