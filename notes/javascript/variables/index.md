# Javascript Variables

Variables are used to store data in a program. In Javascript, you can declare a variable using `var`, `let`, or `const` keyword. All data in Javascript is called values. When a variable is declared, the memory is allocated for that variable. A variable can store any type of value such as number, string, boolean, object, array, etc. Let's see few examples of declaring variables in Javascript.

## Variable Types

Below table shows example values that can be stored in a variable.

| Data Type | Description | Example |
|-----------| --- | --- |
| Number    | Numeric values | 10, 20, 30 |
| String    | Text values | "Hello", "World" |
| Boolean   | True or False values | true, false |
| Array     | Collection of values | [10, 20, 30] |
| Object    | Collection of key-value pairs | { name: "John", age: 21 } |


## Declaring Variables

Now, Javascript is dynamically typed language. So, we don't need to specify the type of values we are going to insert into a variable. We can simply declare a variable and assign a value to it.

### What is `undefined`?

When a variable is declared but not assigned a value, it is said to be `undefined`. It means the variable is declared but not initialized with a value.

```javascript
let greeting;
console.log(greeting); // undefined
```

The variable can be assigned a value using assignment operator `=`. The value can be of any type such as number, string, boolean, object, etc. Below code assigns value "Hello" to variable `greeting`. Notice that the value `Hello` is enclosed in double quotes. This is because it is a string value. You could also use single quotes to enclose the string value and it will work exactly the same. In Javascript, you can use either double quotes or single quotes to enclose a string value but it's always good to stick with one consistent approach in your code. For examples in this tutorial, I will use double quotes to enclose string values.

```javascript
greeting = "Hello";
console.log(greeting); // Hello
```

You can declare and assign a value to a variable in a single line.

### Using `var` keyword

```javascript
var name = "John";
var age = 21;
var isMarried = false;
```

The variables created with `var` keyword can be re-assigned. That is you can change the values of those variables. It is not recommended to use `var` keyword to declare variables. Instead, use `let` or `const` keyword.

```javascript
var name = "John";
console.log(name); // John
name = "Jenny";
console.log(name); // Jenny
```

### Using `let` keyword

The `let` keyword is used to declare variables that can be re-assigned. That is you can change the values of those variables. You cannot re-declare the variable with the same name. This is the preferred way to declare variables in Javascript.

```javascript
let name = "John";
let age = 21;
let isMarried = false;
```

### Using `const` keyword

The `const` keyword is used to declare variables that cannot be re-assigned. These are like constant values which should not change during the execution of the code. This is the preferred way to declare variables in Javascript when you don't want to change the value of the variable. 

```javascript
const name = "John";
const age = 21;
const isMarried = false;
```

If you try to change the value of a variable declared with `const` keyword, it will throw an error.

```javascript
const name = "John";
name = "Jenny"; // Error: Assignment to constant variable.
```