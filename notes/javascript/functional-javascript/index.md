
Let's take a look at some of the commonly used higher-order functions in Javascript.

- `map`
- `filter`
- `reduce`
- `forEach`
- `some`
- `every`
- `find`
- `sort`

### `map` function

The `map` method is used to transform each element of an array using a function and returns a new array with the transformed elements. The `map` function takes a function as an argument and applies that function to each element of the array.

```javascript
const numbers = [1, 2, 3, 4, 5];
const numbersPlusOne = numbers.map(number => number + 1);
console.log(numbersPlusOne); // [2, 3, 4, 5, 6]
```

The same `map` function can be used with array of objects as well.

```javascript
const employees = [
    { name: 'Alice', salary: 1000, age: 25 },
    { name: 'Bob', salary: 1500, age: 30 },
    { name: 'John', salary: 1200, age: 28 }
];

// Get only the names of employees
const employeeNames = employees.map(employee => employee.name);
console.log(employeeNames); // ['Alice', 'Bob', 'John']
```

### `flatMap` function

The `flatMap` function is used to map each element of an array to a new array and then flatten the result into a single array. The `flatMap` function is similar to the `map` function followed by the `flat` function.

The syntax for this looks like this.

```javascript
array.flatMap((element) => [element, element]);
```

Let's take a look at an example to better understand this.

```javascript
const people = [
    { name: 'Amy', favoriteColors: ['orange', 'red'] },
    { name: 'Devika', favoriteColors: ['green', 'purple', 'pink'] },
    { name: 'Charvi', favoriteColors: ['purple', 'pink', 'white'] }
]

const arrayOfColors = people.map(s => s.favoriteColors);
console.log(arrayOfColors);
/*
[
  [ 'orange', 'red' ],
  [ 'green', 'purple', 'pink' ],
  [ 'purple', 'pink', 'white' ]
]
*/

const allColors = arrayOfColors.flatMap(x => x);
console.log(allColors); // [ 'orange', 'red', 'green', 'purple', 'pink', 'purple', 'pink', 'white' ]
```


As you can see, it flattens array of array into a single array.

You could also use `map` and `flat` functions to achieve the same result.

```javascript
const allColors2 = people.map(s => s.favoriteColors).flat();
console.log(allColors2); // [ 'orange', 'red', 'green', 'purple', 'pink', 'purple', 'pink', 'white' ]
```

### `filter` function

The `filter` method is used to filter elements of an array based on a condition and returns a new array with the filtered elements. The `filter` function takes a function as an argument that returns a boolean value.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

Let's take a look at more practical example of using `filter` function.

```javascript
const employees = [
    { name: 'Alice', salary: 1000, age: 25 },
    { name: 'Bob', salary: 1500, age: 30 },
    { name: 'John', salary: 1200, age: 28 }
];

// Get employees over 29 years of age
const seniorEmployees = employees.filter(employee => employee.age > 29);
console.log(seniorEmployees); // [{ name: 'Bob', salary: 1500, age: 30 }]
```

Notice that, unlike `filter` funtion which returns a new array with the filtered elements, the `map` function returns a new array with the transformed elements.

### `reduce` function

The `reduce` method is used to reduce the elements of an array to a single value using an accumulator function. The `reduce` function takes an accumulator function and an initial value as arguments. The accumulator function is a function which can be applied to each element of the array to reduce it to a single value. This can be operations like sum, multiplication, etc.

The syntax for this looks like this.

```javascript
array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
```

In below examples, I am calculating sum and product of the numbers in an array. For sum, I am using `0` as initial value and for product, I am using `1` as initial value.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // 15

const product = numbers.reduce((accumulator, number) => accumulator * number, 1);
console.log(product); // 120
```

Let's take a practical example of this.

```javascript
const employees = [
    { name: 'Alice', salary: 1000, age: 25 },
    { name: 'Bob', salary: 1500, age: 30 },
    { name: 'John', salary: 1200, age: 28 }
];

// Calculate total salary of all employees
const totalSalary = employees.reduce((accumulator, employee) => accumulator + employee.salary, 0);

// Calculate salary of employees over 25 years of age
const salaryForSeniors = employees.filter(employee => employee.age > 25)
    .reduce((accumulator, employee) => accumulator + employee.salary, 0);
console.log(salaryForSeniors); // 2700
```

### `forEach` function

The `forEach` function is used to iterate over the elements of an array and apply a function to each element. The `forEach` function does not return anything and is used when you want to perform some operation on each element of the array.

```javascript
const favoriteCities = ['Paris', 'New York', 'London', 'Tokyo'];
favoriteCities.forEach(city => console.log(city));
```

Above example code will print each city in the array to the console. This can be a nice way to iterate over the elements of an array and perform some operation on each element.

The `forEach` method can also be used to iterate over object properties.

```javascript
const person = {
    name: 'Alice',
    age: 25,
    city: 'Paris'
};

Object.keys(person).forEach(key => {
    console.log(`${key}: ${person[key]}`);
});
```

### `some` function

The `some` function is used to check if at least one element of an array satisfies a condition. The `some` function takes a function as an argument that returns a boolean value.

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some(number => number % 2 === 0);
console.log(hasEvenNumber); // true
```

Let's see more practical example of this.

```javascript
const students = [
    {name: 'Jessica', marks: {maths: 90, science: 80}},
    {name: 'Zoe', marks: {maths: 85, science: 75}},
    {name: 'Jenny', marks: {maths: 95, science: 85}},
    {name: 'John', marks: {maths: 80, science: 70}}
];

// Check if any student has scored more than 90 in maths
const hasTopper = students.some(student => student.marks.maths > 90);
console.log(hasTopper); // true
```

### `every` function

The `every` function, on the other hand, checks if all elements of an array satisfy a condition. The `every` function takes a function as an argument that returns a boolean value.

```javascript
const numbers = [1, 2, 3, 4, 5];
const allEvenNumbers = numbers.every(number => number % 2 === 0);
console.log(allEvenNumbers); // false

const evenNumbers = [2, 4, 6];
const allEven = evenNumbers.every(number => number % 2 === 0);
console.log(allEven); // true
```

These functions can be handy to check if an array contains a certain element or if all elements of an array satisfy a condition.

### `find` function

The `find` function is used to find the first element of an array that satisfies a condition. The `find` function takes a function as an argument that returns a boolean value. This method also takes a predicate function as an argument and returns the first element in the array that satisfies the condition.

```javascript
const numbers = [1, 2, 3, 4, 5];
const firstEvenNumber = numbers.find(number => number % 2 === 0);
console.log(firstEvenNumber); // 2
```

The `findIndex` method is similar to `find` method except that `findIndex` returns the index of the element matching the predicate function instead of element itself. 

```javascript
const numbers = [1, 2, 3, 4, 5];
const indexOfFirstEvenNumber = numbers.findIndex(numbers => number % 2 === 0);
console.log(indexOfFirstEvenNumber); // 1

```

### `sort` function

The `sort` method is used to sort the elements of an array. The `sort` function takes an optional compare function as an argument that defines the sort order. If no compare function is provided, the elements are sorted in ascending order.

```javascript
const fruits = ['banana', 'apple', 'orange', 'mango'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'mango', 'orange']
```

To define your own sort order, you can pass a compare function to the `sort` method. This function can be used to determine the order of elements. This function should return a number where:
- If the first argument should come before the second, return a negative number.
- If the first argument should come after the second, return a positive number.
- If the two arguments are equal, return 0.

```javascript
const people = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 30 },
    { name: 'John', age: 28 },
    { name: 'Jenny', age: 22 },
    { name: 'Jenny', age: 35 }
];
people.sort((a, b) => {
    if (a.name === b.name) {
        return a.age - b.age;
    }
    return a.name > b.name ? 1 : -1;
})
console.log(people);
/*
[
  { name: 'John', age: 28 },
  { name: 'Jenny', age: 22 },
  { name: 'Jenny', age: 35 },
  { name: 'Bob', age: 30 },
  { name: 'Alice', age: 22 }
]
 */
```

In this example, the `people` array is sorted first by name in descending order and then by age. If the names are the same, the people are sorted by age in ascending order as you can see for `Jenny`.