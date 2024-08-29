# Static vs Dynamic Type checking

Type checking is the process of verifying that a variable or expression has the correct data type before it is used in a program. There are two types of type checking: static and dynamic.

## Static type checking

Static type checking is done at compile time, which means the data types of variables are checked before the program is run. This helps catch errors early in the development process and ensures that the program is more robust and reliable. Compiled languages like C, C++, Java and C# use static type checking. There are advantages and disadvantages of static type checking.

For example, in Java you can declare a variable like this. You have to specify the variable type before you can use it.

```java
int x = 10;
String name = "John";
```

- **Advantages**: Static type checking helps catch errors early in the development process, improves code quality, and makes the program more reliable.
- **Disadvantages**: Static type checking can be more restrictive and require more code to be written, which can slow down development.

## Dynamic type checking

In contrast, dynamic type checking is performed at runtime, which means the data types of variables are checked when the program is executed. This allows for more flexibility and less code to be written, but it can also lead to errors that are not caught until the program is run. For example, you were expecting a number but you got a string. Interpreted languages like Python, Ruby, and JavaScript use dynamic type checking.

For example, in Javascript you can declare a variable like this without explicitly specifying the type. Javascript interpreter does assign type of `Number` and `String` to these variables.

```javascript
let x = 10;
let name = "John";
```
