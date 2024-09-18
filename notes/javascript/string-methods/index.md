# String Properties and Methods

Javascript strings have a lot of built-in methods that allow you to manipulate strings in various ways. Remember that strings are immutable, so everytime you perform some string manipulation, it returns a brand new string. Methods are just like functions which can be invoked on a string value. They are called using dot notation on a string value.

## String Length

The `length` property of a string returns the number of characters in the string.

```javascript
let message = "Good Day";
console.log(message.length); // 8
```

## Accessing Characters

You can access individual characters of a string using the bracket notation `[]`. The index of string characters starts from 0.

```javascript
let message = "Hello World";
console.log(message[0]); // H
console.log(message[6]); // W
```

## `at()` Method

You could alternatively use the `at()` method to access characters of a string. The `at()` method takes an index as an argument and returns the character at that index.

```javascript
let message = "Hello World";
console.log(message.at(0)); // H
console.log(message.at(6)); // W
```

If you try to access a character at an index that is out of bounds, the `at()` method returns `undefined`.

```javascript
let message = "Hello World";
console.log(message.at(20)); // undefined
```

## `charAt()` Method

The `charAt()` method is similar to the bracket notation `[]`. It takes an index as an argument and returns the character at that index.

```javascript
let message = "Hello World";
console.log(message.charAt(0)); // H
console.log(message.charAt(6)); // W
```

The difference compared to `at()` method is that `charAt()` returns an empty string if the index is out of bounds.

```javascript
let message = "Hello World";
console.log(message.charAt(20)); // ""
```

## `concat()` Method

The `concat()` method is used to concatenate two or more strings and return a new string. You can also concatenate multiple strings by passing them as arguments to the `concat()` method.

```javascript
let message = "Hello";
let name = "John";
let greeting = message.concat(" ", name);
console.log(greeting); // Hello John
```

## `includes()` Method

The `includes()` method checks if a string contains another string. It returns `true` if the string contains the specified string, otherwise it returns `false`.

```javascript
let message = "Hello World";
console.log(message.includes("World")); // true
console.log(message.includes("John")); // false
```

## `indexOf()` Method

The `indexOf()` method returns the index of the first occurrence of a specified value in a string. If the value is not found in the input string, it returns `-1`.

```javascript
let message = "Hello World";
console.log(message.indexOf("World")); // 6
console.log(message.indexOf("John")); // -1
```

## `lastIndexOf()` Method

The `lastIndexOf()` method returns the index of the last occurrence of a specified value in a string. If the value is not found in the input string, it returns `-1`.

```javascript
let message = "Hello World";
console.log(message.lastIndexOf("o")); // 7
console.log(message.lastIndexOf("John")); // -1
```

## `startsWith()` and `endsWith()` Methods

The `startsWith()` method checks if a string starts with a specified string. It returns `true` if the string starts with the specified string, otherwise it returns `false`. Conversely, the `endsWith()` method checks if a string ends with a specified string.

```javascript
let message = "This is your message";
console.log(message.startsWith("This")); // true
console.log(message.endsWith("message")); // true
```

## `repeat()` Method

The `repeat()` method returns a new string with a specified number of copies of the original string.

```javascript
let message = "Hello";
console.log(message.repeat(3)); // HelloHelloHello
```

## `replace()` and `replaceAll()` Methods

The `replace()` method replaces a specified value with another value in a string. It replaces only the first occurrence of the specified value. The `replaceAll()` method replaces all occurrences of a specified value with another value in a string.

```javascript
let message = "Hello World";
console.log(message.replace("World", "John")); // Hello John
console.log(message.replaceAll("o", "0")); // Hell0 W0rld
console.log(message); // Hello World
console.log(message.replace("o", "0")); // Hell0 World
```

Notice that even after `replace()` and `replaceAll()` the original `message` is still the same. This is because strings are immutable.

## `slice()` Method

The `slice()` method extracts a part of a string and returns a new string **without modifying the original string**. It takes two arguments: the start index and the end index. The end index is optional and if not provided it will be length of the string.

```javascript
let message = "Good evening everyone";
console.log(message.slice(5, 12)); // evening
console.log(message.slice(5)); // evening everyone
```

## `substring()` and `substr()` Methods

The `substring()` method extracts the characters from a string between two specified indices and returns a new string. The `substr()` method is similar to `substring()` but it takes the length of the characters to extract from the original string.

```javascript
let message = "Good evening everyone";
console.log(message.substring(5, 12)); // evening
console.log(message.substr(5, 7)); // evening
```

## `split()` Method

The `split()` method splits a string into an array of substrings based on a specified separator. The separator can be a string or a regular expression. If the separator is an empty string, the string is split between each character, that is it will return all  characters of the string as an array.

```javascript
let message = "Hello World";
console.log(message.split(" ")); // ["Hello", "World"]
console.log(message.split("")); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
console.log(message.split("o")); // ["Hell", " W", "rld"]

message = "Do or die, but never cry";
console.log(message.split(/[^A-Za-z0-9]+/gi)); // [ 'Do', 'or', 'die', 'but', 'never', 'cry' ]
```

In the last example, I have used regex (Regular expression) to split the string based on non-alphanumeric characters. You will learn about Regex in a later lesson.

This method is also opposite to `join()` method which joins the elements of an array into a string, but this method can be used to split a string into an array.

## `toLowerCase()` and `toUpperCase()` Methods

These methods are self-explanatory. `toLowerCase()` converts all characters of a string to lowercase and `toUpperCase()` converts all characters of a string to uppercase.

```javascript
let message = "Hello World";
console.log(message.toLowerCase()); // hello world
console.log(message.toUpperCase()); // HELLO WORLD
```

## `trim()` Method

The `trim()` method removes whitespace from both ends of a string. Here, whitespace is all whitespace characters (space, tab, no-break space, etc.) and all line terminator characters (LF, CR, etc.).

```javascript
let message = "   Hello World   ";
console.log(message.length); // 17
console.log(message.trim()); // 'Hello World'
console.log(message.trim().length); // 11
```

There are also `trimStart()` and `trimEnd()` methods which remove whitespace from the start and end of a string respectively.

```javascript
let message = "   Hello World   ";
console.log(message.trimStart()); // 'Hello World   '
console.log(message.trimEnd()); // '   Hello World'
```

## `padStart()` and `padEnd()` Methods

The `padStart()` method pads the current string with another string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the start of the current string. On the other hand, the `padEnd()` method pads the current string with another string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

```javascript
let message = "Hello";
console.log(message.padStart(10, "123")); // 123123Hello
console.log(message.padEnd(10, "123")); // Hello12312
```
