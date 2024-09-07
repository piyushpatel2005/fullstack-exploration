# Javascript Variable Scopes

Variable scope defines the extent to which the variable is visible and accessible in the program. The scope of variables help with controlling the life of the variable and the assigned resources. It also helps secure resources and makes debugging easier.

In Javascript, there are two main types of scopes.

1. Global Scope
2. Local Scope
4. Lexical Scope
6. Module Scope

## Global Scope

Global scope is the scope that is available throughout the program. Variables declared outside of any function or block are considered to be in the global scope. These variables are accessible from any part of the program.

```javascript
let outerVariable = "Global";
function printOuterVariable() {
    console.log(outerVariable);
}
printOuterVariable(); // Global
```

In the above example, the `outerVariable` is declared outside of any function, so it is in the global scope. The `printOuterVariable` function can access the `outerVariable` and print its value.

## Local Scope

Locally defined variables are accessible only within the function or code block in which they are defined. These variables are not accessible outside of the function or block. These can have either function scope or a block scope.

```javascript
function printLocalVariable() {
    let innerVariable = "Local";
    console.log(innerVariable);
}
printLocalVariable(); // Local
console.log(innerVariable); // ReferenceError: innerVariable is not defined
```

In the above example, the `innerVariable` is declared inside the `printLocalVariable` function, so it is in the local scope. The `innerVariable` is accessible only within the `printLocalVariable` function and not outside of it.

```javascript
if (true) {
    if (true) {
        let blockScoped = "Block Scoped";
        console.log(blockScoped); // Block Scoped
    }
    console.log(blockScoped); // ReferenceError: blockScoped is not defined
```

Just like previous example, where `innerVariable` is only accessible within the function, in above example, `blockScoped` is only accessible within the block in which it is defined.

## Lexical Scope

In Javascript, the inner function has access to variables from the parent scope. This is known as lexical scope. The inner function can access the variables from the outer function, but the outer function cannot access the variables from the inner function.

```javascript
function outerFunction() {
    let outerVariable = "Outer, you can access using Lexical Scope";
    function innerFunction() {
        console.log(outerVariable);
    }
    innerFunction(); // Outer, you can access using Lexical Scope
}
outerFunction();
```

It may seem exactly like a Global scope but this `outerVariable` is not accessible outside the `outerFunction`. However, the global variables are accessible from anywhere in the program.

## Module Scope

In ES6, which added lots of new features to Javascript, the module scope was introduced. In Javascript, the code files are called modules. Modules usually contain class definitions or library of functions related to that module. The module scope is the scope of the module. The variables declared in the module are not accessible outside the module. This helps in avoiding naming conflicts and makes the code more modular.

In Javascript, you can import a variable from another module using the `import` statement. The imported variable is not accessible outside the module.

```javascript
import { importedVariable } from './module.js';
```

However, for this import to be successful the `module.js` should export the variable using the `export` statement.

```javascript
export let importedVariable = "Imported Variable";
```

For example, you can define below in `util.js` file.

```javascript
const greet = function (name) {
  console.log('Hello, ' + name + '!');
}

export { greet };
```

and then import it in another file `index.js` as below.

```javascript
import { greet } from './util.js';
greet('John');
```
