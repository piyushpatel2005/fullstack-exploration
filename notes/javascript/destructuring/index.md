# Destructuring in Javascript

Destructuring is a convenient way of extracting multiple values from data stored in objects and Arrays. It can be used in locations that receive data (such as the left-hand side of an assignment). Destructuring can be used with arrays, objects, and function parameters.

Let's see how destructuring works with arrays and objects.

## Destructuring Arrays

With destructuring, you can extract values from arrays and assign them to variables. The syntax for destructuring an array is to enclose the variables in square brackets `[]`.

```javascript
let [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

In the above example, the variables `a` and `b` are assigned the values from the array `[1, 2]`. The value of `a` is `1` and the value of `b` is `2`.

You can also skip last element in the array. That is number of variables on the left side can be less than or equal to the number of elements in the array. They don't need to match exactly in number of elements.

```javascript
    
let [a, b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
```

### Skipping Elements

You can skip elements in the array by leaving empty commas.

```javascript
let [a, , b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 3
```

In the above example, the variable `a` is assigned the value `1` and the variable `b` is assigned the value `3`. The second element in the array is skipped.

If you want to skip the first element, you can leave an empty comma at the beginning.

```javascript
let [, a, b] = [1, 2, 3];
console.log(a); // 2
console.log(b); // 3
```

### Default Values

You can assign default values to variables in case the value extracted from the array is `undefined`.

```javascript
let [a, b, c = 3] = [1, 2];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

### Rest Operator

The rest operator `...` can be used to collect the remaining elements of an array into a new array. This can be useful when you care only about those elements that are not already assigned to variables ignoring the ones already assigned.

```javascript
let names = ['Alice', 'Bob', 'Charlie', 'David'];
let [first, second, ...rest] = names;
console.log(first); // Alice
console.log(second); // Bob
console.log(rest); // ['Charlie', 'David']
```

Notice that `rest` is now an array containing the remaining elements of the original array.

## Destructuring Objects

Destructuring objects is similar to destructuring arrays, but instead of using square brackets `[]`, you use curly braces `{}`.

```javascript
let {name, age} = {name: 'Alice', age: 25};
console.log(name); // Alice
console.log(age); // 25
```

In the above example, the variables `name` and `age` are assigned the values from the object `{name: 'Alice', age: 25}`. The value of `name` is `'Alice'` and the value of `age` is `25`.

### Different Variable Names

You can assign the extracted values to variables with different names.

```javascript
let {firstName, lastName: surname} = {firstName: 'John', lastName: 'Doe'};
console.log(firstName); // John
console.log(surname); // Doe
```

In this case, the value of `firstName` is `'John'` and the value of `surname` is `'Doe'`. The property `lastName` is assigned to the variable `surname` on the left.

### Default Values

You can assign default values to variables in case the value extracted from the object is `undefined`. This way if a property is not defined in the object, the default value will be used.

```javascript
let {name, age = 30} = {name: 'Anonymous User'};
console.log(name); // Anonymous User
console.log(age); // 30
```

### Rest Operator

The rest operator `...` can be used to collect the remaining properties of an object into a new object.

```javascript
let person = {firstName: 'John', lastName: 'Doe', age: 30, city: 'New York'};
let {firstName, lastName, ...rest} = person;
console.log(firstName); // John
console.log(lastName); // Doe
console.log(rest); // {age: 30, city: 'New York'}
```

In this example, `rest` is an object containing the remaining properties of the original object.

## Nested Destructuring

You can also destructure nested objects and arrays.

### Nested Arrays

```javascript
let [a, [b, c]] = [1, [2, 3]];
console.log(a); // 1
console.log(b); // 2
```

### Nested objects

```
let profile = {
    name: 'Jessica Florence',
    age: 27,
    address: {
        city: 'New York',
        state: 'NY',
        country: 'USA'
    },
    occupation: {
        title: 'Software Engineer',
        company: 'Adobe'
    }
};

let {name, address: {city, country}, occupation: {title}}
    = profile;

console.log(name); // Jessica Florence
console.log(city); // New York
console.log(country); // USA
console.log(title); // Software Engineer
```

In this example, the variables `name`, `city`, `country`, and `title` are assigned the values from the nested object `profile`.

### Renaming Nested Variables

You can rename the variables while destructuring nested objects.

```javascript
let profile =
{
    name: 'Jessica Florence',
    age: 27,
    address: {
        city: 'New York',
        state: 'NY',
        country: 'USA'
    },
    occupation: {
        title: 'Software Engineer',
        company: 'Adobe'
    }
};

let {name, address: {city, country}, occupation: {title: position}}
    = porfile;

console.log(name); // Jessica Florence
console.log(city); // New York
console.log(country); // USA
console.log(position); // Software Engineer
```

In this example, the variable `occupation.title` is renamed to `position` while destructuring the nested object `profile`.
