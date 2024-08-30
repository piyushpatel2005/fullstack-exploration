# Javascript Multi-dimensional Arrays

A multi-dimensional array is an array of arrays. It is a way to store data in a table-like structure. It can be more than one dimension. For example, a two-dimensional array is an array of arrays, where each array is a row of the table. A three-dimensional array is an array of arrays of arrays, where each array is a table of rows.

## Creating a multi-dimensional array

You can create a multi-dimensional array by nesting arrays inside arrays. Here is an example of a two-dimensional array:

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

In this example, `matrix` is a two-dimensional array with three rows and three columns.

You could also create an empty two-dimensional array like this.

```javascript
const arr = [];
arr.push(new Array(3).fill(0));
arr.push(new Array(3).fill(0));
console.log(arr); // [ [ 0, 0, 0 ], [ 0, 0, 0 ] ]
```

In above example, I've created `2 x 3` matrix with all elements initialized to `0` using `fill()` method.

You could also populate values for each element in the array like this.

```javascript
const arr = new Array(2);
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(2);
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = i * 2 + j;
    }
}
console.log(arr); // [ [ 0, 1 ], [ 2, 3 ] ]
```

## Accessing elements in a multi-dimensional array

You can access elements in a multi-dimensional array by using multiple indexes. For example, to access the element in the second row and third column of the `matrix` array, you can use the following code:

```javascript
console.log(matrix[1][2]); // 6
```

Here, the first index `1` selects the second row which will be an array `[4, 5, 6]`, and the second index `2` selects the third column which is `6` in this case.

## Iterating over a multi-dimensional array

You can iterate over a multi-dimensional array using nested loops. For example, to iterate over the `matrix` array, you can use the following code:

```javascript
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
```

## Appending new Rows

You can append new rows to a multi-dimensional array by using the `push()` method. For example, to append a new row `[100, 101, 102]` to the `matrix` array, you can use the following code:

```javascript
matrix.push([100, 101, 102]);
console.log(matrix);
```

You can also use all the common methods with multi-dimensional arrays.

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix.slice(1, 2)) // [ [ 4, 5, 6 ] ]
const newMatrix = matrix.splice(1,1); // Removes the second row
console.log(matrix); // [ [ 1, 2, 3 ], [ 7, 8, 9 ] ]
```

I hope these examples give you a good understanding of multi-dimensional arrays in JavaScript. They are sometimes used in algorithms and data structures to represent complex data in a structured way.