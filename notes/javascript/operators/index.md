# Javascript Operators

In Javascript, operators are used to perform operations on variables and values. Operators are used to assign values, compare values, perform arithmetic operations, and more. This lesson covers different types of operators available in Javascript.

## Types of Operators

There are different types of operators in Javascript. They are:

1. Arithmetic Operators
2. Comparison Operators
3. Logical Operators
4. Assignment Operators
5. `in` Operator
6. Bitwise Operators
7. Conditional (Ternary) Operator
8. Unary Operators
9. String Concatenation Operator

### Arithmetic Operators

Arithmetic operators are used to perform mathematical operations on numbers. The following arithmetic operators are available in Javascript.

| Operator | Description                                                  | Example         |
|----------|--------------------------------------------------------------|-----------------|
| `+`      | Addition: used to perform addition of two or more variables. | `x + y`         |
| `-`      | Subtraction: used to perform subtraction                     | `x - y`         |
| `*`      | Multiplication: used for multiplication of variables         | `x * y`         |
| `/`      | Division: used for division operation                        | `x / y`         |
| `%`      | Modulus: This returns the remainder of division operation.   | `x % y`         |
| `++`     | Increment: This increments the value of `x` by 1.            | `x++` or `++x`  |
| `--`     | Decrement: This decreases the value of `x` by 1.             | `x--` or `--x`  |
| `**`     | Exponentiation: This calculates `x` to the power of `y`.     | `x ** y`        |

```javascript
let x = 10;
let y = 5;

console.log("x + y =", x + y); // 15
console.log("x - y =", x - y); // 5
console.log("x * y =", x * y); // 50
console.log("x / y =", x / y); // 2
console.log("x % y =", x % y); // 0
console.log(x++); // 10
console.log("After x++ operation x =", x); // 11
console.log(x--); // 11
console.log("After x-- operation x =", x); // 10
console.log("x ** y =", x ** y); // 100000
```

One interesting caveat with increment and decrement operators is that they can be used as prefix or postfix operators. When used as a prefix operator (i.e. `++x` or `--x`), the value of the variable is incremented or decremented before the value is used in the expression. When used as a postfix operator (i.e. `x++` or `x--`), the value of the variable is incremented or decremented after the value is used in the expression. That is the reason, you see the value of `x` as 11 in the second `console.log` statement, but see 10 in the first statement where the code has `console.log(x++)`. In this case, it first outputs the value contained in variable `x` and then increments it. The same is true for `console.log(x--)`. These are both postfix operators.

### Comparison Operators

Comparison operators are used to compare two values. 

| Operator | Description                                                                                         | Example    |
|----------|-----------------------------------------------------------------------------------------------------|------------|
| `==`     | Equal to: This operator checks if two values are equal.                                             | `x == y`   |
| `===`    | Strict Equal to: This operator checks if two values are equal and of the same type.                 | `x === y`  |
| `!=`     | Not Equal to: This operator checks if two values are not equal.                                     | `x != y`   |
| `!==`    | Strict Not Equal to: This operator checks if two values are not equal and of the same type.         | `x !== y`  |
| `>`      | Greater than: This operator checks if the value of `x` is greater than `y`.                         | `x > y`    |
| `<`      | Less than: This operator checks if the value of `x` is less than `y`.                               | `x < y`    |
| `>=`     | Greater than or equal to: This operator checks if the value of `x` is greater than or equal to `y`. | `x >= y`   |
| `<=`     | Less than or equal to: This operator checks if the value of `x` is less than or equal to `y`.       | `x <= y`   |

```javascript
let x = 10;
let y = 5;
let z;

console.log("x == y =", x == y); // false
console.log("x === y =", x === y); // false
console.log("x != y =", x != y); // true
console.log("x !== y =", x !== y); // true
console.log("x > y =", x > y); // true
console.log("x < y =", x < y); // false
console.log("x >= y =", x >= y); // true
console.log("x <= y =", x <= y); // false
```

You might wonder what's the difference between equality (`==`) and strict equality (`===`). The difference is that the equality operator (`==`) only checks if the values are equal, but the strict equality operator (`===`) checks if the values are equal and of the same type. For example, `1 == '1'` will return `true` because the values are equal, but `1 === '1'` will return `false` because the values are not only equal but also of the same type.

### Logical Operators

These are operators used to make decision when there are more more than one boolean values. They return a boolean value based on the comparison result. These are very useful in making decisions in your code.

| Operator | Description                                                        | Example |
|----------|--------------------------------------------------------------------|---------|
| `&&`     | Logical AND: This operator returns true if both operands are true. | `x && y` |
| `||` | Logical OR: This operator returns true if either of the operands is true. | `x || y` |
| `!`      | Logical NOT: This operator returns true if the operand is false.   | `!x`    |

```javascript
console.log("true && true =", true && true); // true
console.log("true && false =", true && false); // false
console.log("true || true =", true || true); // true
console.log("true || false =", true || false); // true
console.log("!true =", !true); // false
console.log("!false =", !false); // true
```

### Assignment Operators

Assignment operators are used to assign values to variables. 

| Operator | Description                                                                 | Example |
|----------|-----------------------------------------------------------------------------|---------|
| `=`      | Assigns the value of the right operand to the left operand.                 | `x = y` |
| `+=`     | Adds the value of the right operand to the left operand and assigns it.     | `x += y` |
| `-=`     | Subtracts the value of the right operand from the left operand and assigns it. | `x -= y` |
| `*=`     | Multiplies the value of the right operand with the left operand and assigns it. | `x *= y` |
| `/=`     | Divides the value of the left operand by the right operand and assigns it.  | `x /= y` |
| `%=`     | Assigns the remainder of the division of the left operand by the right operand. | `x %= y` |

```javascript
let x = 10;

console.log("x =", x); // 10
x += 5;
console.log("After x += 5, x =", x); // 15
x -= 2;
console.log("After x -= 2, x =", x); // 13
x *= 2;
console.log("After x *= 2, x =", x); // 26
x /= 2;
console.log("After x /= 2, x =", x); // 13
x %= 3;
console.log("After x %= 3, x =", x); // 1
```

### `in` Operator

The `in` operator returns `true` if the specified property is in the specified object or its prototype chain.

```javascript
let person = { name: "John", age: 30 };

console.log("name" in person); // true
console.log("age" in person); // true
console.log("city" in person); // false

let cities = ["New York", "London", "Paris"];
"London" in cities; // false
```

### Bitwise Operators

Bitwise operators are used to perform bitwise operations on binary numbers. These operators are rarely used in JavaScript, but it's good to know about them.

| Operator | Description                                                                 | Example |
|----------|-----------------------------------------------------------------------------|---------|
| `&`      | Bitwise AND: This operator performs a bitwise AND operation on two numbers. | `x & y` |
| `|`      | Bitwise OR: This operator performs a bitwise OR operation on two numbers.   | `x | y` |
| `^`      | Bitwise XOR: This operator performs a bitwise XOR operation on two numbers. | `x ^ y` |
| `~`      | Bitwise NOT: This operator performs a bitwise NOT operation on a number.    | `~x`    |
| `<<`     | Bitwise Left Shift: This operator shifts the bits of a number to the left.  | `x << y` |
| `>>`     | Bitwise Right Shift: This operator shifts the bits of a number to the right. | `x >> y` |
| `>>>`    | Bitwise Zero-fill Right Shift: This operator shifts the bits of a number to the right and fills the empty bits with zeros. | `x >>> y` |

```javascript
let x = 5; // 101 in binary

console.log("x & 3 =", x & 3); // 1 (101 & 011 = 001)
console.log("x | 3 =", x | 3); // 7 (101 | 011 = 111)
console.log("x ^ 3 =", x ^ 3); // 6 (101 ^ 011 = 110)
console.log("~x =", ~x); // -6 (~101 = -110)
console.log("x << 1 =", x << 1); // 10 (101 << 1 = 1010)
console.log("x >> 1 =", x >> 1); // 2 (101 >> 1 = 10)
console.log("x >>> 1 =", x >>> 1); // 2 (101 >>> 1 = 10)
```

### Terinary Operator

The ternary operator is a shorthand way of writing an `if...else` statement. It takes three operands: a condition followed by a question mark (`?`), an expression to execute if the condition is true, followed by a colon (`:`), and an expression to execute if the condition is false.

```javascript
let x = 10;
let y = 5;

let result = x > y ? "x is greater than y" : "x is less than or equal to y";
console.log(result); // x is greater than y
```

### Unary Operators

Unary operators are operators that take a single operand and perform an operation. There are several unary operators in JavaScript.

| Operator | Description                                                                 | Example |
|----------|-----------------------------------------------------------------------------|---------|
| `++`     | Increment: This operator increments its operand by 1.                       | `++x`   |
| `--`     | Decrement: This operator decrements its operand by 1.                       | `--x`   |

```javascript
let x = 5;
x++;
console.log("After x++, x =", x); // 6
x--;
console.log("After x--, x =", x); // 5
```

### String Concatenation

The `+` operator can be used to concatenate strings in JavaScript. When you use the `+` operator with two strings, it concatenates them together. It simply joins two strings together.

```javascript
let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName + "!"); // John Doe!
```

## Operator Precedence

Operator precedence determines the order in which operators are evaluated in an expression. Operators with higher precedence are evaluated first. If two operators have the same precedence, they are evaluated from left to right.

Here is a list of operators in JavaScript in order of precedence. The parentheses `()` can be used to change the order of evaluation and has the highest precedence.

1. `()`: Parentheses
2. `++`, `--`: Postfix Increment/Decrement
3. `++`, `--`, `+`, `-`, `!`, `~`, `typeof`, `void`, `delete`: Unary Operators
4. `*`, `/`, `%`: Multiplication, Division, Modulus
5. `+`, `-`: Addition, Subtraction
6. `<<`, `>>`, `>>>`: Bitwise Shifts
7. `<`, `<=`, `>`, `>=`, 
8. `instanceof`, `in`: Comparison
9. `==`, `!=`, `===`, `!==`: Equality
10. `&`: Bitwise AND
11. `^`: Bitwise XOR
12. `|`: Bitwise OR
13. `&&`: Logical AND
14. `||`: Logical OR
15. `? :`: Ternary
16. Assignment Operators (`=`, `+=`, `-=`, `*=`, `/=`, `%=`, `<<=`, `>>=`, `>>>=`, `&=`, `^=`, `|=`)

Usually, it's better to use parentheses to make the code more readable and avoid confusion.
