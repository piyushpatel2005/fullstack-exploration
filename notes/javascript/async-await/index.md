# Javascript Async Await

Although Promises solves the problem of callback hell from the syntax of callback functions, it's still little convoluted to read and write. To make it more readable and manageable, Javascript introduced a new feature called `async` and `await`.

## What is Async?

`async` is a keyword that is used to declare an asynchronous function that always returns a promise. The syntax of an async function is as follows.

```javascript
let asyncFunction = async function() {
    // code
}
```

This is much clener approach as this function looks very similar to normal function except the addition of `async` keyword. This function will always return a promise. You can also use arrow functions to declare async functions.

```javascript
let asyncFunction = async () => {
    // code
}
```

## What is Await?

The `await` keyword is used to pause the execution of an async function until the promise is resolved. The syntax of the `await` keyword is as follows.

```javascript
let result = await promise;
```

This would invoke the promise and wait for the promise to be resolved. The `await` keyword can only be used inside an async function. The `await` keyword in the async function makes the function wait for the promise to be resolved before continuing the execution of the function. This can be used to make asynchronous code run in a particular sequence. You must use `await` keyword only inside an async function else it will throw an error.

## Async Await Example

Let's take an example to understand how async and await work.

```javascript
let getPosts = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { title: 'Post 1', body: 'Sample Post 1' },
                { title: 'Post 2', body: 'Sample Post 2' },
            ]);
        }, 2000);
    });
}

let getComments = async () => {
    let posts = await getPosts();
    console.log(posts);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { body: 'Comment 1' },
                { body: 'Comment 2' },
            ]);
        }, 2000);
    });
}

let getPostsAndComments = async () => {
    let comments = await getComments();
    console.log(comments);
}

getPostsAndComments();
```

In this code, we have three async functions. The `getPosts` function returns a promise that resolves after 2 seconds. The `getComments` function waits for the `getPosts` function to resolve and then returns a promise that resolves after 2 seconds. The `getPostsAndComments` function waits for the `getComments` function to resolve and then logs the comments to the console.