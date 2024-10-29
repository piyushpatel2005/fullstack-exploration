# Recursion in Javascript

Recursion is a general problem solving technique in which a function calls itself to solve a problem. It is not something specific to Javascript alone. It is a powerful tool in programming that allows you to write elegant and efficient code.

## What is Recursion?

Recursion calls the same function repeatedly with everytime the algorithm scope reducing. Recursive function is a function that's called multiple times to reach a solution. This technique is used when we can break down the original problem into smaller sub-problems of the same type. These functions have two cases. 
1. Base case
2. Recursive Case

### 1. Base Case:
Base case is when the function stops calling itself. It is the condition that stops the recursion. Without a base case, the function will keep calling itself infinitely and eventually may run out of stack space. Every recursive solution must have a base case and each recursive call should converge towards the base case. That is it should move one step closer to the base case with each recursive call.

### 2. Recursive Case:
Recursive case is when the function calls itself. It is the condition that makes the function call itself. It is the condition that reduces the scope of the problem. You can call the recursive call as many times as you like.

## Practical Example

### 1. Factorial of a number

The most common example for a recursive function is the use of factorial. Factorial of a number is calculated as the mutiplication of all numbers from 1 to the given number. The factorial of 5 is calculated as `5! = 5 * 4 * 3 * 2 * 1 = 120`. So, the factorial of a number is the product of current number multiplied by the factorial of the previous number. That is `n! = n * (n-1)!`. Finally, we also need base case which eventually results in solution. The base case for factorial is `0! = 1`.

```javascript
function factorial(n) {
    if (n === 0) {
        // base case
        return 1;
    } else {
        // recursive case
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // 120
```

### 2. Fibonacci Series

Another common example for recursion is the Fibonacci series. The Fibonacci series is a series of numbers in which each number is the sum of the two preceding ones. The series starts with 0 and 1. The Fibonacci series is `0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...`. So, in this case, after first two numbers (`n1 = 0` and `n2 = 1`,  you can find next numbers with sum of previous two numbers. That is `n3 = 0 + 1 = 1` and `n4 = 1 + 1 = 2` and so on. The Fibonacci series can be calculated using the formula `fib(n) = fib(n-1) + fib(n-2)`. The base case for Fibonacci series is `fib(0) = 0` and `fib(1) = 1`.

```javascript
function fibonacci(n) {
    if (n === 0) {
        // base case
        return 0;
    } else if (n === 1) {
        // base case
        return 1;
    } else {
        // recursive case
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(5)); // 5
```