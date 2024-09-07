# Functional Javascript

With Javascript, you can write code in a functional programming style. Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. In functional programming, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from other functions. This allows you to write more flexible and reusable code.

## Higher-order Functions

In functional programming, functions that take other functions as arguments or return functions are called higher-order functions. Higher-order functions are a powerful feature of functional programming that allows you to write more readable code.

There are two variations of higher order functions. 
1. Function as an Argument: This is when a function takes another function as an argument.
2. Function as a Return Value: This is when a function returns another function.

### 1. Function as an Argument

For example, you can define `calculate` function that takes two numbers and an operation function as arguments and returns the result of applying the operation to the two numbers.

```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}

let sum = function(a, b) {
    return a + b;
}

let subtract = function(a, b) {
    return a - b;
}

let result = calculate(5, 10, sum);
console.log(result); // 15  

result = calculate(10, 5, subtract);
console.log(result); // 5
```

In this case, the `calculate` function is higher order function that takes two numbers `a` and `b` and an operation function as arguments. Now, if you need to define new operation between two numbers, you simply have to define a new function and pass it to the `calculate` function.

### 2. Function as a Return Value

You can also return another function as a result of a function. For example, you can define a `createAdder` function that takes a number and returns a function that multiplies a number by that number.

```javascript
function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = createAdder(5);
console.log(add5(2)); // 7
console.log(add5(3)); // 8
```

Javascript language has many built-in methods on array data type which takes another function as an argument. These functions are called higher-order functions. Some of the commonly used higher-order functions are `map`, `filter`, `reduce`, `forEach`, `some`, `every`, `find`, `sort`, etc. These functions are used to perform operations on arrays in a functional programming style. You'll learn about these methods in upcoming lessons.