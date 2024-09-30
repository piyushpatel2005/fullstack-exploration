# Classes in Javascript

In ES6, the `class` keyword was introduced to create classes in Javascript. This way of programming creates a new class using the `class` keyword. This will also provide a more familiar syntax for developers coming from the background of other object-oriented programming langauges. So, with class declaration, you use `class` keywrod to create a class instead of using constructor functions.

The constructor function is a special method that is called when a new object is created. The constructor method is conveniently called `constructor()` and is used to initialize the object. The constructor method is optional. If you do not define a constructor method, Javascript will add an empty constructor method.

## Class Declaration

The syntax for creating a class in Javascript is as follows.

```javascript
class ClassName {
    constructor(parameters) {
        // code to be executed
    }
}
```

In above syntax, the parameters are optional.

### Example

```javascript
class Person {
    constructor (name, age) {
        console.log('Person constructor called');
        this.name = name;

        this.setAge = (age) => {
            if (age >= 0 && age <= 110) {
                this.age = age;
            } else {
                console.log('Invalid age');
                this.age = 0;
            }
        }

        this.setAge(age);
    }

    greet = () => {
        console.log(`Hello, ${this.name}! How are you doing?`)
    }

    info = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const anita = new Person('Anita', 25);
anita.greet(); // Hello, Anita! How are you doing?
anita.info(); // Name: Anita, Age: 25
const patrick = new Person('Patrick', 135);
patrick.info(); // Name: Patrick, Age: 0
```

In this example, you can notice that the `constructor` method is called when a new object is created. The `constructor` method initializes the object with the name and age. The `setAge` method is used to set the age of the person. 


The `greet` and `info` methods are used to greet the person and display the information of the person respectively. They are defined outside the constructor. The `greet` and `info` methods are defined using arrow functions. Arrow functions do not have their own `this` value. They inherit the `this` value from the enclosing scope. This way, the `this` value in the arrow function will refer to the object that created the function. This reduces the number of keystroke and makes the code more readable.

## Static Methods

You can also define static methods in a class. Static methods are methods that are called on the class itself, not on the instances of the class. From ES6 version of Javascript, you can define a static method using the `static` keyword. These methods are directly assigned to the class instead of the objects created from the class.

### Example

```javascript
class Person {
    static count = 0;
    constructor (name, age) {
        this.name = name;

        this.setAge = (age) => {
            if (age >= 0 && age <= 110) {
                this.age = age;
            } else {
                console.log('Invalid age');
                this.age = 0;
            }
        }

        this.setAge(age);
    }

    greet = () => {
        console.log(`Hello, ${this.name}! How are you doing?`)
    }

    info = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    static getCount = () => {
        Person.count++;
        console.log(`Person count: ${Person.count}`);
    }
}

const anita = new Person('Anita', 25);
Person.getCount(); // Person count: 1
const patrick = new Person('Patrick', 35);
Person.getCount(); // Person count: 2
```

As you can see in the above example, the `getCount` method is defined as a `static` method. The `getCount` method is called on the class itself, not on the instances of the class. The `count` property is also defined as a `static` property. The `count` property is incremented each time the `getCount` method is called.
