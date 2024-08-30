# Array Properties

Javascript arrays can have properties and methods which provide convenient functionalities needed to easily work with arrays. 
Arrays have several built-in properties that can be useful when working with arrays.

## `length` property

The `length` property returns the number of elements in an array. The length of an array is always one more than the highest index in the array. This can be useful to iterate over the elements of an array as you can use the `length` property to determine the number of iterations.

```javascript
const names = ['Alice', 'Bob', 'Charlie', 'David'];
console.log(names.length); // 4

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
```

## `prototype` property

The `prototype` property allows you to add new properties and methods to the `Array` object. This can be useful to extend the functionality of arrays and make it fit your needs.

```javascript
Array.prototype.first = function() {
    return this[0];
};

Array.prototype.last = function() {
    return this[this.length - 1];
};

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.first()); // 1
console.log(numbers.last()); // 5
```