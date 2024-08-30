# Conditions in Javascript

In Javascript code, you can use `if`, `else if`, and `else` statements to execute different code blocks based on different conditions. These statements are used to control the flow of the program based on the value of a condition. The condition is usually a boolean expression that evaluates to either `true` or `false`.

Let's look at few examples to understand these.

## `if` statement

The `if` statement is used to execute a block of code if the condition is `true`. If the condition is `false`, the code block is skipped. Here, the code blocks is the `block created by curly braces `{}` or it may also be a single line of code.

```javascript
let x = 10;
if (x > 5) {
  console.log('x is greater than 5');
}
```

In the above code, the condition `x > 5` is evaluated to `true` because `x` is `10` which is greater than `5`. So, the code block inside the curly braces is executed and it prints `x is greater than 5`.

## `else` statement

Now, in above example, if the value of `x` is less than `5`, then nothing will be printed. You can use `else` statement to execute a block of code when the condition is `false`.

```javascript
let x = 3;
if (x > 5) {
    console.log(`${x} is greater than 5`);
} else {
    console.log(`${x} is less than or equal to 5`);
}
```

In the above code, the condition `x > 5` is evaluated to `false` because `x` is `3` which is less than `5`. So, the code block inside the `else` statement is executed and it prints `3 is less than or equal to 5`.

## `else if` statement

You can use `else if` statement to check multiple conditions. If the first condition is `false`, it checks the next condition and so on. You can have multiple `else if` statements in a single `if` block.

```javascript
let x = 5;
if (x > 5) {
    console.log(`${x} is greater than 5`);
} else if (x < 5) {
    console.log(`${x} is less than 5`);
} else {
    console.log(`${x} is equal to 5`);
}
```

## Fizzbuzz in Javascript

Let's write a simple program to print numbers from 1 to 100. If the number is divisible by 3, print `Fizz`. If the number is divisible by 5, print `Buzz`. If the number is divisible by both 3 and 5, print `FizzBuzz`.

```javascript
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
```

## Nested Conditionals

You can also have nested conditions in Javascript. This means you can have an `if` statement inside another `if` statement.

```javascript
let x = 10;
if (condition1) {
    if (condition2) {
        // if block
    } else {
        // inner else block
    }
} else {
    // outer else block
}
```

### Checking Authentication and Authorization

Let's write a simple program to check if a user is authenticated and authorized to access a resource. We will use `if` and `else` statements to check these conditions.

```javascript
let isAuthenticated = true;
let isAdmin = false;

if (isAuthenticated) {
    if (isAdmin) {
        console.log('You are authenticated and authorized to delete this data');
    } else {
        console.log('Only admins can delete this data. You are not authorized');
    }
} else {
    console.log('You are not authenticated');
}
```

In the above code, we first check if the user is authenticated. If the user is authenticated, we check if the user is an admin. If the user is an admin, we print a message saying that the user is authenticated and authorized to delete the data. If the user is not an admin, we print a message saying that only admins can delete the data. If the user is not authenticated, we print a message saying that the user is not authenticated.

## Ternary Operator

The ternary operator is a shorthand way of writing an `if` statement. It is used to evaluate a condition and return a value based on whether the condition is `true` or `false`.

```javascript
let x = 10;
let result = x > 5 ? 'x is greater than 5' : 'x is less than or equal to 5';
console.log(result);
```
