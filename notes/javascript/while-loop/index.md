# Javascript While Loop

Javascript provides a way to execute a block of code repeatedly as long as a condition is true. This is done using a 
`while` loop. There are two variations of the `while` loop. These are the `while` loop and the `do while` loop. 
Let's understand each of those in detail.

## While Loop

The `while` loop is used to execute a block of code as long as the condition is true. This is common when you are working with user input or when you 
are unsure of the number of times the loop should run.

### Syntax

```javascript
while (condition) {
    // code block
}
```

The `condition` is evaluated before the execution of the code block. If the condition is `true`, the code block is 
executed. If the condition is `false`, the code block is skipped and the program continues with the next statement 
after the `while` loop.

### While Loop Example

```javascript
let i = 5;
while (i > 0) {
    console.log(i);
    i--;
}
```

In the above example, the loop will run as long as the value of `i` is greater than `0`. The value of `i` is 
decremented. If you forget to decrement the value of `i`, the loop will run indefinitely. This is known as an 
**infinite loop**. This is a common mistake that beginners make.

## Do While Loop

The `do...while` loop is similar to the `while` loop. The only difference is that the `do while` loop will execute 
the code block at least once before checking the condition. This is because the condition is checked after the first 
execution of the code block.

### Syntax

```javascript
do {
    // code block
} while (condition);
```

### Do While Loop Example

```javascript
let i = 5;
do {
    console.log(i);
    i--;
} while (i > 0);
```

In the above example, the value of `i` is decremented after the first execution of the code block. Even if the 
condition is `false`, the code block is executed at least once. Try modifying the value of `i` to `0` and see what 
happens. 

## Summary

- The `while` and `do...while` loops can sometimes result in an infinite loop. This can happen if the condition is 
never evaluated to `false`.
- These loops are used when you are unsure of the number of times the loop should run.
- The `do...while` loop is used when you want to execute the code block at least once before checking the condition.