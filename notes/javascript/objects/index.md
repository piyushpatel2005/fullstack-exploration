# Objects in Javascript

Objects are one of the most important data types in Javascript. They are used to store collections of data and more complex entities. An object is a collection of key-value pairs. Each key is a string, and each value can be of any data type.

## Creating Objects

There are two ways to create objects in Javascript:

1. Using the object literal syntax
2. Using the `new Object()` syntax

### Using Object Literal Syntax

The object literal syntax is the most common way to create objects in Javascript. Simply create the object using curly braces `{}` and define the key-value pairs inside the braces.

```javascript
let person = {}
console.log(typeof person) // object
```

To create object with few properties, you can define key and value pairs separated by a colon `:`. The key-value pairs are separated by commas.

```javascript
let person = {
    name: 'John',
    age: 31
};
console.log(person);
```

### Using `new Object()` Syntax

You can also create objects using the `new Object()` syntax. This syntax is less common than the object literal syntax.

```javascript
let person = new Object();
person.name = 'John';
person.age = 31;
console.log(person); // { name: 'John', age: 31 }
```

## Accessing Object Properties

You can access the properties of an object using the dot notation or the bracket notation. Both of these are common ways to access object properties.

```javascript
let person = {
    name: 'John',
    age: 31
};

console.log(person.name); // John
console.log(person['age']); // 31
console.log(person['age']); // 31
```

## Adding and Modifying Properties

You can also add new properties using the dot notation or the bracket notation.

```javascript
let person = {
    name: 'John',
    age: 31
};

person.city = 'New York';
person['country'] = 'USA';

console.log(person); // { name: 'John', age: 31, city: 'New York', country: 'USA' }
```

To modify an existing property, simply assign a new value to the property using dot notation or using brackets.

```javascript
person.city = 'Los Angeles';
```

Now, objects can also contain methods. A method is a function that is stored as a property of an object. You'll learn more about methods in Javascript. Here is an example of an object with a method `greet()`. Don't worry if this doesn't make sense as I will cover functions in the upcoming lessons and we will create several objects to cement this concept.

```javascript
let person = {
    name: 'John',
    age: 31,
    
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
};

person.greet(); // Hello, my name is John
```

There are also built-in objects in Javascript which can be used to perform common operations. These include `Math`, `Date`, `Array`, and `String`. We will cover these objects in more detail in the upcoming lessons.

## Iterating Over Object Properties

### `for...in` Loop

You can iterate over the properties of an object using a `for...in` loop. This loop iterates over the enumerable properties of an object.

```javascript
let person = {
    name: 'John',
    age: 31,
    city: 'New York'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}
```

### `forEach` Method

You can also use the `Object.entries()` method to get an array of key-value pairs of an object.

```javascript
Object.entries(person).forEach(([key, value]) => {
    console.log(key + ': ' + value);
});
```

Alternatively, you can use `Object.keys()` and `Object.values()` methods to get an array of keys and values respectively.

```javascript
Object.keys(person).forEach(key => {
    console.log(key + ': ' + person[key]);
});
```