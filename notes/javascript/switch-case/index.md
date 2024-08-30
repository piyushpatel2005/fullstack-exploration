# Javascript Switch Case Statement

Javascript also provides a `switch` statement that allows you to execute different blocks of code based on different conditions. The `switch` statement evaluates an expression and compares it with multiple cases. If a match is found, the corresponding block of code is executed.

## Syntax

The syntax for the `switch` statement is as follows.

```javascript
switch (expression) {
    case expression1:
        // code block
        break;
    case expression2:
        // code block
        break;
    case expression3:
        // code block
        break;
    default:
        // code block
}
```

## Example

Let's take a look at an example.

```javascript
const month = 2;
let monthName;

switch (month) {
    case 1:
        monthName = 'January';
        break;
    case 2:
        monthName = 'February';
        break;
    case 3:
        monthName = 'March';
        break;
    case 4:
        monthName = 'April';
        break;
    case 5:
        monthName = 'May';
        break;
    case 6:
        monthName = 'June';
        break;
    case 7:
        monthName = 'July';
        break;
    case 8:
        monthName = 'August';
        break;
    case 9:
        monthName = 'September';
        break;
    case 10:
        monthName = 'October';
        break;
    case 11:
        monthName = 'November';
        break;
    case 12:
        monthName = 'December';
        break;
    default:
        monthName = 'Invalid month';
}

console.log(monthName); // February
```

### Details on `break` and `default`

Notice that after each `case` block, there is a `break` statement. This is important because it tells the program to exit the `switch` statement after executing the corresponding block of code. If you forget to include a `break` statement, the program will continue executing the next `case` block even if the condition is not met.

The `default` case is optional and is executed if none of the `case` blocks match the expression. It is similar to the `else` block in an `if-else` statement. Notice that the `default` case does not require a `break` statement because it is the last block in the `switch` statement.

## Multiple cases

You can also specify multiple cases that should execute the same block of code.

```javascript
const month = 3;
let season;

switch (month) {
    case 1:
    case 2:
    case 11:
    case 12:
        season = 'Winter';
        break;
    case 3:
    case 4:
    case 5:
        season = 'Spring';
        break;
    case 6:
    case 7:
    case 8:
        season = 'Summer';
        break;
    case 9:
    case 10:
        season = 'Fall';
        break;
    default:
        season = 'Invalid month';
}

console.log(season); // Spring
```

In the above example, the `season` variable is set to `'Spring'` because the `month` variable has a value of `3`. If it had value of `4` or `5`, the `season` variable would still be `'Spring'` because the `case 3` and `case 4` blocks do not have a `break` statement, so the program continues executing the next block until it finds the `break` statement or `default` block.