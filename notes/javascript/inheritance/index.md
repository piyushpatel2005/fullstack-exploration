# Javascript Inheritance

Inheritance is the ability of a class to take on the properties and methods of another class. Inheritance allows us to define a class based on another class, which makes it easier to create and maintain an application. This also helps reduce code duplication as we can put common properties and methods in a parent class and have other classes inherit from it.

**Parent class** is the class that is being inherited from. This is also called the base class or the super class. Similarly, **child class** is the class that inherits from another class. This is also called the derived class or the subclass.

## Prototype-based Inheritance

In Javascript, we can use prototypical inheritance to create a class that inherits from another class. Every object in Javascript has a prototype object that is used to define properties and methods that are shared among all instances of that object. When we create a new object, it inherits properties and methods from its prototype object.

```javascript
let animal = { canWalk: true };

let person = {
    canSpeak: true,
    __proto__: animal
};

console.log(person.canWalk); // true
console.log(person.canSpeak); // true
```

In the above example, the `animal` object is the prototype of the `person` object. The `person` object inherits the `canWalk` property from the `animal` object. If `animal` had more properties, the `person` object would inherit those as well. You can define hierarchy of objects using this method where all objects at the bottom can inherit properties from all objects in the prototype chain. 

Whenever a property is accessed on an object, Javascript will look for that property in the object itself. If it doesn't find it, it will look for it in the prototype object and so on.

## Inheriting from a Constructor Function

If you want to create a class that inherits from another class, you can use constructor functions. You can define a constructor function for the parent class and then use the `call` method to call the parent constructor from the child constructor. This way the subclass can inherit properties and methods from the parent class.

```javascript
function Animal(name) {
    this.name = name;
}

function Person(name, address) {
    Animal.call(this, name);
    this.address = address;
}

const richard = new Person('Richard', '101 King St, Toronto');
console.log(richard.name); // Richard
```

In the above example, the `Person` class inherits from the `Animal` class. The `Animal` constructor is called from the `Person` constructor using the `call` method. This way the `Person` object can inherit the `name` property from the `Animal` object.

With this method, if you add a method on parent function's prototype, it will not be available to the child function. 

```javascript
function Animal(name) {
    this.name = name;
}

    
Animal.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
}

function Person(name, address) {
    Animal.call(this, name);
    this.address = address;
}

const richard = new Person('Richard', '101 King St, Toronto');
richard.sayHello(); // TypeError: richard.sayHello is not a function
```

To make these newly defined properties and methods available, you can use the `Object.create` method to create a new object with the parent function's prototype.

```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
}

function Person(name, address) {
    Animal.call(this, name);
    this.address = address;
}

Person.prototype = Object.create(Animal.prototype);

const richard = new Person('Richard', '101 King St, Toronto');
richard.sayHello(); // Hello, my name is Richard
```

In the above example, we are creating a new object with the prototype of the `Animal` object and assigning it to the prototype of the `Person` object. This creates a new object with the prototype object passed as an argument. This way the `Person` object can inherit the `sayHello` method from the `Animal` object.

## Class Inheritance

With the introduction of ES6, we can use the `class` keyword to create classes in Javascript. We can also use the `extends` keyword to create a class that inherits from another class. This way we can define a parent class and have other classes inherit from it. This provides a cleaner syntax for creating classes and inheritance in Javascript.

The syntax for inheriting from a class is as below. In this case, you would define a child class and then add `extends` keyword followed by the parent class name.

```javascript
class SubClass extends ParentClass {
    // class definition
}
```

With this new syntax, you can also use the `super()` keyword to call the parent class constructor. This way you can inherit properties and methods from the parent class.

```javascript
class Product {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    toString() {
        return `Product: ${this._name} ${this._price}`;
    }
}

class Book extends Product {
    constructor(name, price, author) {
        super(name, price);
        this._author = author;
    }

    toString() {
        return `Book: ${this._name} with price ${this._price}$ ${this._author}`;
    }
}

class Desktop extends Product {
    constructor(name, price, cpu, brand) {
        super(name, price);
        this._cpu = cpu;
        this._brand = brand;
    }

    toString() {
        return `Desktop: ${this._name} with price ${this._price}$ ${this._cpu}`;
    }
}

const book = new Book('The Lord of the Rings', 10, 'J. R. R. Tolkien');
console.log(book.toString());
// Book: The Lord of the Rings with price 10$ J. R. R. Tolkien

const desktop = new Desktop('Dell All in one PC', 1000, 'i7');
console.log(desktop.toString());
// Desktop: Dell All in one PC with price 1000$ i7
```

Notice that in this case, we have `Product` as the parent class for all products. `Book` and `Desktop` classes inherit from the `Product` class. The `super()` keyword is used to call the parent class constructor which is a convenient way for assigning properties from the parent class.