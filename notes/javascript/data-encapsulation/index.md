# Data Hiding and Encapsulation in JavaScript

Data encapsulation is a concept in object-oriented programming that binds the data and the functions that manipulate the data into a single unit. This concept is also known as data hiding. Data encapsulation is achieved by using classes in object-oriented programming languages. JavaScript is a prototype-based language and does not have classes. However, JavaScript provides a way to achieve data encapsulation using closures. This can be written in two ways.

## 1. Using Constructor Functions

In Javascript, there is no formal option for access modifiers using keywords like `public`, `private` or `protected` like in Java. By default, the properties are accessible publicly. However, if we modify the properties in the constructor function by using `var` instead of using `this`, then the properties become private and can only be accessed within the constructor function. 

```javascript
function Person(name, age) {
    let _name = name;
    let _age = age;

    this.getName = function() {
        return _name;
    }

    this.getAge = function() {
        return _age;
    }
}

var person = new Person('John', 30);
console.log(person.getName()); // John
console.log(person.name); // undefined
```

In Javascript, the convention is the name those private members using `_` prefix. This is not a keyword, but a convention to indicate that the property is `private`. In order to access the private members, you need to define `public` methods that return the private members or modify those private members.

## 2. Using ES6 Classes

With Javascript classes, you can achieve data encapsulation by using the `#` prefix. This is a new feature in ES6 that allows you to define private members in a class. 

```javascript
class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }
}

var person = new Person('John', 30);
console.log(person.getName()); // John
console.log(person.name); // undefined
```

### Private Methods

You can also define `private` methods in a class using the `#` prefix.

```javascript
class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    #getDetails() {
        return `${this.#name} is ${this.#age} years old`;
    }

    getDetails() {
        return this.#getDetails();
    }
}

var person = new Person('John', 30);
console.log(person.getDetails()); // John is 30 years old
console.log(person.#getDetails()); // SyntaxError: Private field '#getDetails' must be declared in an enclosing class
```

### Private Static members

Similarly, you can also define private static members in a class using the `#` prefix.

```javascript
class Person {
    static #count = 0;

    constructor() {
        Person.#count++;
    }

    static getCount() {
        return Person.#count;
    }
}

var person1 = new Person();
var person2 = new Person();
console.log(Person.getCount()); // 2
console.log(person1.#count); // SyntaxError: Private field '#count' must be declared in an enclosing class
```