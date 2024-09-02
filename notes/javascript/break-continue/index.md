# Break and Continue Statements

In Javascript loops, you can use few statements which can control the flow of the loop. You could either make it 
skip an iteration or exit the loop prematurely. Let's take a look at these statements.

## Break Statement

The `break` statement is used to exit the loop prematurely. It is used to break out of the loop when a certain 
condition is met. This statement can be used in any loop such as `for`, `while`, or `do...while` loops.

Let's say you're asked to find the first number in an array that is divisible by 13. You could use any loop to iterate over the array and break out of the loop when you find the number.

```javascript
let numbers = [12, 100, 20, 24, 13, 26, 26];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 13 === 0) {
        console.log(`The first number divisible by 13 is ${numbers[i]}`);
        break;
    }
}
```

In the above code, the loop will break when it finds the first number divisible by 13. You don't need to iterate 
over the rest of the array once you've found the number.

## Continue Statement

Similarly, if you want to skip an iteration when a certain condition is met, you can use the `continue` statement. 
For example, you're given a task to print all the numbers in an array except the ones that are divisible by 13.

```javascript
let numbers = [12, 100, 20, 24, 13, 26, 26];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 13 === 0) {
        continue;
    }
    console.log(numbers[i]);
}
// Output: 12, 100, 20, 24
```

## Summary

- The `break` statement is used to exit the loop prematurely.
- The `continue` statement is used to skip an iteration when a certain condition is met.