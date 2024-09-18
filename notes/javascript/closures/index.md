# Javascript Closures

A closure is a function that has access to the outer function's scope even after the outer function has finished executing. It's a function bundled together with references to its surrounding state. Closures are a powerful feature in Javascript that allows you to create private variables and functions. They are used in many design patterns and can be quite useful in many scenarios.

```javascript
function outerFunc() {
    const name = 'Foo';
    function innerFunc() {
        console.log(name);
    }
    return innerFunc;
}

const returnedValue = outerFunc();
returnedValue();
```

In this code, the `outerFunc` returns inner function `innerFunc`. When you call `outerFunc`, it creates a variable `name` and a function `innerFunc`. The `innerFunc` has access to the `name` variable even after the `outerFunc` has finished executing. This is because the `innerFunc` forms a closure over its surrounding which in this case has `name` variable. When you call `returnedValue`, it logs the value of `name` to the console.

## Use Cases

Closures are used in many design patterns and scenarios.

### Private Variables

Closures can be used to create private variables in Javascript. You can create a function that returns an object with methods that can access and modify the private variables. The private variables are not accessible from outside the function scope.

```javascript
function counter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getCount: function() {
            return count;
        }
    };
}

const counterObj = counter();
console.log(counterObj.getCount()); // 0
counterObj.increment();
counterObj.increment();
counterObj.increment();
counterObj.decrement();
console.log(counterObj.getCount()); // 2
```

In this code, the `counter` function returns an object with methods to `increment`, `decrement`, and `getCounter` to get the count. The `count` variable is private and not accessible from outside the function scope. This emulates the concept of private variables in Javascript.

There are few other use cases where closures can be quite useful. You can use closures to create factory functions, currying, and memoization. Closures are a powerful feature in Javascript that can be used in many scenarios to write more flexible and reusable code.

### Closure for Memoization

Memoization is an optimization technique used to store the results of expensive function calls and return the cached result when the same inputs occur again. You can use closures to create memoized functions.

```javascript
function memoize(func) {
    const cache = {};
    return function(...args) {
        const key = args.join(',');
        console.log(`key: ${key}, cache contains: ${cache[key]}`);
        if (cache[key] === undefined) {
            cache[key] = func(...args);
        }
        return cache[key];
    };
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);
let start = new Date().getTime();
console.log(memoizedFibonacci(30)); // 55
let second = new Date().getTime();
console.log(`Time taken: ${second - start} ms`);
console.log(memoizedFibonacci(30)); // 55 (cached result)
console.log(`Time taken: ${new Date().getTime() - second} ms`);
```

In this case, I have implemented a cache which will store the calculated values for fibonacci numbers. When the function is called with the same input, it will return the cached result instead of recalculating it. You can see that from the output where the time taken for first function is longer than the second one. Second one is usually zero milliseconds because it's just a lookup from the cached value. This can be quite useful to optimize the performance of the function. 