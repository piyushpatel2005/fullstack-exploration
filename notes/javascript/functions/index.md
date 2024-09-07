# Javascript Functions

Generally, when you're writing a program, you'll have to perform a certain task multiple times. Instead of writing 
the same code over and over again, you can define a function that can be called whenever you need to perform that 
task. Functions are blocks of code that can be reused multiple times. They can take input, perform some operations 
on the given input, and they can also return a value.

For example, let's say you've written a program which would create a birthday wishes for a person if person's name 
and age is provided like below. 

```javascript
let name = 'John';
let age = 25;

console.log(`Happy Birthday ${name}! Wish you many many happy returns of the day!`);
console.log(`You're now ${age} years old and I wish this year brings you lots of happiness and success.`);
```

Now, if you want to wish another person, you'll have to copy the above code and change the name and age. Instead of 
that, you can define a function that takes the name and age as input and returns the birthday wishes. Let's learn 
about how it can be done.

## Defining a Function

You can define a function using the `function` keyword followed by the function name and a pair of parentheses. 
These parentheses can contain the parameters that the function takes as input. The function body is enclosed in 
curly braces `{}`.

```javascript
function greet() {
    console.log('Hello, World!');
}
```

Now, to use this function, you've to call this function. Calling a function means executing the code block of the 
function. It's also called invoking a function or executing a function. You can call a function by using the 
function name followed by a pair of parentheses `()`.

```javascript
greet();
```

## Function Parameters

You can pass data to a function by defining parameters in the function definition. Parameters are variables that can 
contain the data that you pass to the function. You can define multiple parameters separated by commas. Once you've 
passed these parameters, you can use them inside the function.

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet('John'); // Hello, John!
greet('Alice'); // Hello, Alice!
```

With this new knowledge, now you can create a function that takes the name and age as input and returns the birthday.

```javascript
function birthdayWishes(name, age) {
    console.log(`Happy Birthday ${name}! Wish you many many happy returns of the day!`);
    console.log(`You're now ${age} years old and I wish this year brings you lots of happiness and success.`);
}

birthdayWishes('John', 25);
birthdayWishes('Alice', 30);
```

## Function Return

A function can return a value using the `return` keyword. The `return` statement is used to return a value from 
inside the function. Once the `return` statement is executed, the function stops executing and the value is returned 
to the caller. The caller is the place where the function is called.

This can be quite useful to make the functions more flexible and reusable. For example, you can write a function 
that adds two numbers and returns the sum. You could definitely print those values, but then those values cannot be 
used easily with any other code. If you return the value, you can assign it to a variable and use it wherever you need.

```javascript
function add(a, b) {
    return a + b;
}

let sum = add(5, 10);
console.log(sum); // 15
```

Let's write a function which returns the sum of numbers in an array.

```javascript
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
```

Now, you can use this function to find the sum of any array of numbers.

```javascript
let balanceJohn = [100, -20, 30, -10];
let balanceAlice = [200, -50, 20, -30];

let sumJohn = sumArray(balanceJohn);
let sumAlice = sumArray(balanceAlice);

console.log(`John's balance: ${sumJohn}`); // 100
console.log(`Alice's balance: ${sumAlice}`); // 140
```

## Functional Programming

In Javascript, functions are first-class citizens. They are considered objects in Javascript language. This means that functions can be assigned to variables, passed as parameters to other functions, and returned from other functions. This is a powerful feature of Javascript that allows you to write more flexible and reusable code.

### Function as a Value

You can assign a function to a variable and then call the function using that variable.

```javascript
let sumByTwo = function(a) {
    return a + 2;
}

let result = sumByTwo(5);
console.log(result); // 7
```

### Function as a Parameter

You can also pass a function as a parameter to another function. This is also widely used in higher-order functions like `map`, `filter`, and `reduce`. These functions take another function as a parameter and apply that function to each element of an array. You will learn about these higher-order functions in the upcoming tutorials.

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

### Function as a Return Value

You can also return a function from another function. 

```javascript
function times(multiplier) {
    return function(number) {
        return number * multiplier;
    }
}

let double = times(2);
let triple = times(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```
