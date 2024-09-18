# Arrow Functions

Arrow functions are a new way to define small functions like one line functions in Javascript. They provide a more concise syntax for defining functions compared to traditional function expressions. Arrow functions are also known as fat arrow functions because of the `=>` syntax used to define them.

## Syntax

The syntax for defining an arrow function is as follows.

```javascript
let functionName = (parameters) => {
  // function body
}
```

If your function is very small, like a one-liner, you can even omit the set of curly braces `{}` and the `return` keyword. The function will implicitly return the value of the expression. In that case, the syntax becomes even shorter.

```javascript
let functionName = (parameters) => expression;
```

## Simple Example

Let's take an example of defining a traditional function in Javascript and then converting it to an arrow function.

```javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
let add = (a, b) => a + b;
```

In the above example, we have defined a function `add` that takes two parameters `a` and `b` and returns their sum. The traditional function uses the `function` keyword to define the function followed by the function name and the parameter list. 

The arrow function uses function as a value and assigns it to a variable `add`. The `=>` syntax is used to define the function. The function body is a one-liner that returns the sum of the two parameters `a` and `b` which means we don't need curly braces nor the `return` keyword in this case.

## Arrow Functions Example cases

There can be various scenarios where you can use arrow functions to define functions in Javascript.

## Arrow Functions with No Parameters

If your function does not accept any parameters, you have to use an empty set of parentheses `()` to indicate that the function does not accept any parameters.

```javascript
let sayHello = () => 'Hello World';
console.log(sayHello()); // Hello World
```

In this case, the function `sayHello` does not accept any parameters and returns the string `'Hello World'`.

## Arrow Functions with Single Parameter

If your function accepts a single parameter, you can omit the parentheses `()` around the parameter because it only accepts single argument.

```javascript
let doubler = number => number * 2;
console.log(doubler(5)); // 10
```

In this case, the function `doubler` accepts a single parameter `number` and returns the double of that number.

## Arrow Functions with Multiple Parameters

If your function accepts multiple parameters, you have to use parentheses `()` around the parameter list.

```javascript
let fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName('John', 'Doe')); // John Doe
```