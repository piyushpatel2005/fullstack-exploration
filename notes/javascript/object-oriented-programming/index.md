# Intro to OOP

Object-oriented programming (OOP) is a programming paradigm that uses objects and classes to design applications and computer programs. It is one of the oldest style of programming that is still widely used today. OOP is based on the concept of objects that can communicate with other objects to perform actions. An object can also contain data which are set of properties that describe the object. There will also be methods that can be used to perform actions on the object.

In OOP, there is also a concept of **class** which is a blueprint for creating objects. A class defines the properties and methods that an object will have. An object is an instance of a class. In other languages like C# or Java, classes are built-in and you will get an error at compile time if you try to use a class that is not defined. In Javascript, classes are introduced in ES6 and are syntactic sugar over the existing prototype-based inheritance. There are two ways to create classes in Javascript: using prototype based method and another using class declaration.

## Prototype-based Classes

In Javascript, before ES6, there was no class keyword. Instead, developers used prototype-based inheritance. In this method, you define a constructor function and add properties and methods to the prototype of the constructor function. This way, all the objects created from the constructor function will have access to the properties and methods defined in the prototype.

Javascript objects have a property `prototype` which is a reference to another object. This object is used to add properties and methods to the object. You can access the prototype of an object using the `__proto__` property. 

```javascript
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
};

console.log(person.__proto__); // Object {}
```
In the above example, the `person` object has a prototype object which is an empty object.
This can help with inheritance in Javascript as you can see below.

```javascript
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
};

const employee = {
    salary: 50000,
    position: 'Software Developer',
    department: 'Engineering',
    __proto__: person
};

console.log(person.__proto__); // Object {}
console.log(employee.__proto__); // { name: 'John', age: 30, greet: [Function: greet] }
console.log(employee.name); // John
console.log(employee.age); // 30
employee.greet(); // Hello, my name is John
```

The `employee` object has a prototype object which is the `person` object. This way, the `employee` object can access the properties and methods of the `person` object.

These are just syntactic sugar. Behind the scenes, it calls methods like `Object.setPrototypeOf()` and `Object.getPrototypeOf()` to set and get the prototype of an object.

### Constructor Functions

In Javascript, you can create a constructor function to create objects. A constructor function is a function that is used to create objects. The convention is to create constructor functions with pascal case notation.

The syntax for this looks like below.

```javascript
function FunctionName(parameters) {
// code to be executed
}
```

Once you've defined this constructor function, you can create objects using the `new` keyword.

```javascript
function Employee(name, age, position, salary) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
}

const john = new Employee('John', 26, 'Developer', 50000);
const eva = new Employee('Eva', 24, 'Designer', 40000);
console.log(`${john.name} is a ${john.position}`) // John is a Developer
console.log(`${eva.name} is a ${eva.position}`) // Eva is a Designer
```

> **`this` keyword:** While creating new object, the keyword `this` referes to the new object being created. Each object is assigned their own properties and they can be referenced using dot notation.

You could also add methods to the constructor function's prototype to make them available to all objects created from the constructor function.

```javascript
function Employee(name, age, position, salary) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
}

Employee.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}

const john = new Employee('John', 26, 'Developer', 50000);
const eva = new Employee('Eva', 24, 'Designer', 40000);
john.greet(); // Hello, my name is John
eva.greet(); // Hello, my name is Eva
```

## Class Declaration

In ES6, the `class` keyword was introduced to create classes in Javascript. This way of programming creates a new class using the `class` keyword. This will also provide a more familiar syntax for developers coming from the background of other object-oriented programming langauges.