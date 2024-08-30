# Javascript let vs const

Javascript introduced two new ways to declare variables in ES6, `let` and `const`. These two new ways of declaring variables have some differences compared to the traditional `var` keyword. In this article, we will discuss the differences between `let` and `const` and when to use them.

## `let` keyword

The `let` keyword is used to declare variables that can be re-assigned. That is you can change the values of those variables. You cannot re-declare the variable with the same name. This is the preferred way to declare variables in Javascript. This is also similar to most other programming languages.

- `let` is block scoped. That is, the variable declared with `let` is only available within the block in which it is declared.
- The variable declared with `let` is not hoisted. That is, you cannot access the variable before it is declared. If you try to access a variable before it is declared, you will get a `ReferenceError`.

```javascript
let name = "John";

// Change value of the variable
name = "Jenny";

let name = 'Jessica'; // SyntaxError: Identifier 'name' has already been declared
```

### When to use `let`?

- Use `let` when you want to declare a variable that can be re-assigned.
- This is commonly used for variables whose values change over time in the program. For example, loop counters, temporary variables, etc.

## `const` keyword

The `const` keyword is used to declare variables that cannot be re-assigned. That is, the value of the variable cannot be changed once it is assigned. You must initialize the variable when you declare it. You cannot re-declare the variable with the same name.

- `const` is block scoped. That is, the variable declared with `const` is only available within the block in which it is declared.
- The variable declared with `const` is not hoisted. That is, you cannot access the variable before it is declared. If you try to access a variable before it is declared, you will get a `ReferenceError`.
- You must initialize the variable when you declare it. If you do not initialize the variable, you will get a `SyntaxError`.

```javascript
const PI = 3.14;

// Cannot re-assign the value
PI = 3.14159; // TypeError: Assignment to constant variable.

const PI = 3.14159; // SyntaxError: Identifier 'PI' has already been declared
```

### When to use `const`?

- Use `const` when you want to declare a variable that should not be re-assigned.
- Use `const` when you know that the value of the variable will not change. These are commonly used for constants like `PI`, `E`, etc.
- Use `const` for arrays and objects when you do not want to change the reference to the array or object. You can still change the elements of the array or object, but you cannot re-assign the variable to a new array or object.

```javascript
const numbers = [1, 2, 3, 4, 5];

// You can change the elements of the array
numbers[0] = 10;
console.log(numbers); // [10, 2, 3, 4, 5]
```


