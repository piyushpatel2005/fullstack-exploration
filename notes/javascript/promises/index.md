# Javascript Promises

As you may know that when running asynchronous functions sequentially, you may run into an issue called *callback hell* or also known as *pyramid of doom*. To avoid this nesting of callbacks, Javascript introduced a new feature called Promises. 

## What are promises?

A promise is a class which is used to neatly execute asynchronous functions. Promises are a way to handle asynchronous operations in a more readable and manageable way. It acts as a wrapper around a value that may or may not be available at the time of the function call. Promises are used to handle asynchronous operations in JavaScript. You can create a promise with or without asynchronous functions. A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

## Creating a Promise

A promise is created using the `Promise` constructor. The promise constructor takes a function as an argument which takes two parameters: `resolve` and `reject`. The `resolve` and `reject` functions are used to resolve or reject the promise. 

```javascript
let promise = new Promise(fn);
```

The `fn` function takes two arguments: `resolve` and `reject`. 
1. *Resolve Function*: This is the first argument to that function in the promise constructor and is used to resolve the promise. 
2. *Reject Function*: This is the second argument to that function in the promise constructor and is invoked when the promise fails. It is mainly used as a error handling mechanism for promises. 

One more important point to consider is that the `resolve` and `reject` functions can only be called once. If you try to call them more than once, it will throw an error. You can also provide any number of arguments to the `resolve` and `reject` functions. 

```javascript
let promise = new Promise((resolve, reject) => {
    if (/* condition */) {
        resolve('Success');
    } else {
        reject('Error');
    }
});
```

## `then` and `catch` methods

Javascript promises have two methods: `then` and `catch`. 

- The `then` method is used to handle the resolved promise. It takes a callback function as an argument which is executed when the promise is resolved. The syntax is as follows.

```javascript
promise.then(callbackfn);
```

This will invoke the function inside the promise object and pass the resolved value to the callback function.

- The `catch` method is used to handle the rejected promise. It takes a callback function as an argument which is executed when the promise is rejected. The syntax is as follows.

```javascript
promise.catch(callbackfn);
```

This will invoke the function inside the promise object and pass the rejected value to the callback function.

## Example

Let's take an example to understand how promises work. 

```javascript
let promise = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 2) {
        resolve('Success');
    } else {
        reject('Error');
    }
});

promise.then((message) => {
    console.log('This is in the then block: ' + message);
}).catch((message) => {
    console.log('This is in the catch block: ' + message);
});
```

In the context of retrieving data for a hypothetical user, you can use promises to handle the async operations of fetching posts and comments. 

```javascript
// Write a promise code to simulate getting posts from a server and then getting comments for each post with console log message.
let postsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            { id: 1, title: 'Post 1' },
            { id: 2, title: 'Post 2' }
        ]);
    }, 2000);
});

let commentsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            { id: 1, body: 'Comment 1' },
            { id: 2, body: 'Comment 2' }
        ]);
    }, 3000);
});

let commentsPromise = postsPromise
    .then(posts => {
        console.log(posts);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {id: 1, body: 'Comment 1'},
                    {id: 2, body: 'Comment 2'}
                ]);
            }, 2000);
        });
    });

commentsPromise.then(comments => {
    console.log(comments);
}).catch(error => {
    console.log(error);
});
```