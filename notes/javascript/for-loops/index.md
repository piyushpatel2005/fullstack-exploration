# Javascript For Loops

If you want to repeat specific part of the program multiple times, you can use loops. In JavaScript, there are three types of loops.

1. for loop
2. while loop
3. do-while loop
4. for...in loop
5. for...of loop
6. forEach loop

## Traditional For Loop

The for loop is used to execute a block of code a specified number of times. The syntax of the for loop is as follows.

```javascript
for (initialization; condition; increment/decrement) {
    // code to be executed
}
```

In this case, initialization is executed once at the beginning of the loop. The condition is evaluated at the beginning of each iteration. If the condition is `true`, the code inside the loop is executed. The increment/decrement is executed at the end of each iteration. This is also the one which will make sure the loop terminates eventually. Normally it updates the same variable which is initialized in the initialization part.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

For loop can also be used to iterate over an array using the array's length property.

```javascript
const fruits = ['apple', 'strawberry', 'mango', 'orange'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

In the above example, the loop will run 5 times and print the value of `i` each time.

## For...in Loop

There are newer variations of `for` loop where you can use it with `in` operator with arrays and objects. The syntax for that look as below.

```javascript
for (item in array) {
    // code to be executed
}
```

This type of loop is lot more readable and easy to use. It also avoids off by one error which commonly occurs in the traditional `for` loop. In traditional `for` loop, you need to be careful with the condition and the increment/decrement part. If you make a mistake in those, you might end up with an infinite loop. This new `for..in` loop is a lot more safer to use.

```javascript
const fruits = ['apple', 'strawberry', 'mango', 'orange'];

for (let fruit in fruits) {
    console.log(fruits[fruit]);
}
```

For objecs, you can use the `for..in` loop to iterate over the properties of an object. In this case, in each iteration you get access to each property from the object which can be used to reference values for those properties.

```javascript
const jeff = {
    name: 'Jeff',
    age: 30,
    city: 'New York'
};

for (let key in jeff) {
    console.log(`${key}: ${jeff[key]}`);
}
```

You can also iterate over each character of a string.

```javascript
const name = 'Jeff';

for (let char in name) {
    console.log(name[char]);
}
```

## For...of Loop

The `for...of` loop is used to iterate over the values of an iterable in Javascript. Here, iterables include arrays, strings, sets, etc. The syntax for the `for...of` loop is as follows.

```javascript
for (item of collection) {
    // code to be executed
}
```

Here, the `item` variables gets value of next property in the `collection` in each iteration. This is a lot more readable and easy to use compared to the traditional `for` loop.

```javascript
const niceCities = ['New York', 'Paris', 'London', 'Tokyo'];

for (let city of niceCities) {
    console.log(city);
}
```

Similar to `for..in` loop, you can also use `for..of` loop to iterate over the characters of a string.

## forEach Loop

The `forEach` loop is a method that is used to iterate over an array. This is commonly used in functional style of programming and is very convenient way to iterate through collections. 
The syntax for the `forEach` loop is as follows.

```javascript
array.forEach(function(item, index, array) {
    // code to be executed
});
```

Here, `item` is the current item in the array for each iteration, `index` is the index of the current item and `array` is the array that is being iterated over.

Let's take a look at how to use `forEach` loop to iterate over an array.

```javascript
const leaders = ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson'];

leaders.forEach((leader, index) => {
    console.log(`${index + 1}. ${leader}`);
});
/*
Output:
1. George Washington
2. Abraham Lincoln
3. Thomas Jefferson
 */
```

The fact that you have access to the array that's being iterated over is very useful. You can use that to modify the array in place.

```javascript
const leaders = ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson'];

leaders.forEach((leader, index, array) => {
    array[index] = `Leader ${index + 1}. ${leader}`;
});

leaders.forEach((leader) => {
    console.log(leader);
});

/*
Output:
Leader 1. George Washington
Leader 2. Abraham Lincoln
Leader 3. Thomas Jefferson
 */
```

In this example, we have actually modified the original array using `forEach` loop. This is a very powerful feature of `forEach` loop. Although, in practice, you would normally use `map` method to modify an array. You will learn more about these methods in functional programming section.