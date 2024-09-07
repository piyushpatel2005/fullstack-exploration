# Nested Functions

In Javascript, you can define a function inside another function. These are called nested functions. To create a nested function, you simply define a new function inside the body of another function.

```javascript
function outerFunction() {
  function innerFunction() {
    console.log('Inner Function');
  }
  innerFunction();
}

outerFunction();
```

In the example above, `innerFunction` is defined inside `outerFunction`. When `outerFunction` is called, it calls `innerFunction` which logs `Inner Function` to the console.

On the surface, it seems like a trivial concept that we can define function inside another function, but this can help avoid polluting the global scope with functions that are only used in a specific context. For example, if you have a function that is only used inside another function, you can define it as a nested function rather than defining in the global scope and only using it once in the context of another function.

Nested functions can also access variables from the outer function. This is because of the concept of closure in Javascript. When a function is defined inside another function, it has access to the variables of the outer function even after the outer function has finished executing.

```javascript
function outerFunction() {
  let outerA = 10;
  function innerFunction() {
    console.log(outerA);
  }
  innerFunction();
}

outerFunction(); // 10
```

In the example above, `innerFunction` has access to the variable `outerA` from the outer function `outerFunction`. When `innerFunction` is called, it logs `10` to the console. 