# Callback Functions

A callback function is a function that is passed as an argument to another function. The callback function is executed inside the function it was passed to and are used to handle asynchronous executions. When an asynchronous event completes, you might want to continue the task by executing another function. This is where callback functions come in. The event loop can populate the call stack with functions that are waiting to be executed, it can add the callback function. These functions can use data from the asynchronous event to continue the task.

## Syntax

```javascript
function myFunction(callback) {
  // code
  callback();
}
```

###  Example

The simplest practical example you can think of is by using a setTimeout function. The setTimeout function is used to delay the execution of a function. This is a window method that is used to execute a function after a specified number of milliseconds. The setTimeout function takes two arguments: the first argument is the function to be executed and the second argument is the number of milliseconds to wait before executing the function.

```javascript
function greet() {
  console.log('Hello World');
}

function sayHello(callback) {
  setTimeout(callback, 5000);
}

sayHello(greet);
```

If you execute this code, you will notice that the `greet` function is executed after 5 seconds. This is because the `sayHello` function takes the `greet` function as an argument and executes it after 5 seconds.

You could also pass this function as an anonymous function to the `setTimeout` function.

```javascript
setTimeout(function() {
    console.log('Hello World');
}, 5000);
```

## Nested Callbacks

Sometimes you want certain operations to be executed in a specific order even though those are third-party API calls. For example, in a social media application, you might want to retrieve all of the user's posts and then retrieve all of the comments on those posts. This is where you can use nested callbacks. In this case, you first want user's posts to be retrieved first so you would pass the function that retrieves the comments as a callback to the function that retrieves the posts. I know this sounds very confusing so for demonstration again, I will use the `setTimeout` function.

```javascript
function thirdPartyAPI() {
    console.log("Calling third party API to retrieve posts");
    setTimeout(function() {
        console.log("Third party API returned posts");
        setTimeout(function() {
            console.log("Retrieved comments");
        }, 5000);
    }, 3000);
    console.log("Full response returned");
}


thirdPartyAPI();
```

This example demonstrates how you can use nested callbacks to execute operations in a specific order. The `thirdPartyAPI` function first retrieves the posts which takes 3000 seconds and then retrieves the comments on those posts which in turn takes 5000 seconds. Every time you execute this, you would get the response in exactly the same order.

### Callback Hell

Nested callbacks can be very confusing and difficult to read. If you have more than 3 levels deep nested callbacks, you might find it very hard to associate which callback is called by which event. This is known as callback hell. This is a common problem in JavaScript asynchronous code. To avoid this, Javascript added a wrapper called promises which simplifies this code and makes it more readable. You will learn about Promises in the next lesson.
