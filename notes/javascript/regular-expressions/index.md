# Regular Expressions

In Javascript, you can use regular expressions to match character combinations in a string. Regular expressions are used to search, replace, and extract information from strings. Regular expressions are also objects in Javascript. It can be created using the `RegExp` constructor or using the literal syntax.

## Creating Regular Expressions

You can create a regular expression using the `RegExp` constructor or using the literal syntax. The literal syntax is enclosed in forward slashes `/`.

```javascript
const re = /pattern/flags;
const re = new Regexp('pattern', 'flags');
```

## Regular Expression Methods

Regular expressions have several methods that can be used to search, replace, and extract information from strings.

| Method          | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| `test()`        | Tests for a match in a string. Returns `true` or `false`                    |
| `exec()`        | Executes a search for a match in a string. Returns an array of information   |
| `match()`       | Returns an array of all matches in a string                                 |
| `search()`      | Searches a string for a specified value. Returns the position of the match  |
| `replace()`     | Replaces a specified value with another value in a string                   |
| `replaceAll()`  | Replaces all occurrences of a specified value with another value in a string|
| `split()`       | Splits a string into an array of substrings based on a specified separator  |

## Character Classes

Character classes are used to match a single character from a list of characters. You can use square brackets `[]` to define a character class. Let's see few commonly used character classes.

| Character Class | Description                                                                                   |
|-----------------|-----------------------------------------------------------------------------------------------|
| `[abc]`         | Match any character `a`, `b`, or `c`                                                          |
| `[a-z]`         | Match any character from `a` to `z`                                                           |
| `[A-Z]`         | Match any character from `A` to `Z`                                                           |
| `[0-9]`         | Match any digit from `0` to `9`                                                               |
| `[^abc]`        | Match any character except `a`, `b`, or `c`                                                   |
| `\d`            | Match any digit. For example, `/\d/` matches the number `9` in `ABC9`.                        |
| `\D`            | Match any non-digit character. This is equivalent to `[^0-9]`                                 |
| `\w`            | Match any word character                                                                      |
| `\W`            | Match any non-word character                                                                  |
| `\s`            | Match any whitespace character. This includes space, tab, line feed and other unicode spaces. |
| `\S`            | Match any non-whitespace character                                                            |
| `.`             | Match any character except newline                                                            |
| `\b`            | Match a word boundary                                                                         |
| `\B`            | Match a non-word boundary                                                                     |
| `\n`            | Match a newline character                                                                     |
| `\t`            | Match a tab character                                                                         |
| `A|B`          | Match either `A` or `B`                                                                      |

Let's see few examples to better understand these classes.

```javascript
const input = "There are so many numbers in 1 to 100 and you can't count them.";
let regex = /\d+/g;

const numbers = input.match(regex);
console.log(numbers); // ["1", "100"]

regex = new RegExp("[1]", "g");
const numbers2 = input.match(regex);
console.log(numbers2.length); // 2

regex = new RegExp("[1-9]", "g");
const numbers3 = input.match(regex);
console.log(numbers3.length); // 2

regex = /[^There]/g;
const words = input.match(regex);
console.log(words); // Matche everything other than 'There'

regex = /[^a-zA-Z0-9]/g;
const specialChars = input.match(regex);
console.log(specialChars); // [" ", " ", " ", " ", " ", " ", " ", " ", "'", " ", " ", "."]

regex = /[aeiou]/g;
const vowels = input.match(regex);
console.log(vowels.length); // 17
```

## Grouping and Capturing

You can use parentheses `()` to group and capture characters. This is useful when you want to apply a quantifier to a group of characters. You can also use the `|` operator to match either of the characters.

| Character | Description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| `(x)`     | Match `x` and capture it. You can refer to this captured group using `$1`   |
| `x(?=y)`  | Match `x` only if it is followed by `y`                                    |
| `x(?!y)`  | Match `x` only if it is not followed by `y`                                |
| `x|y`     | Match either `x` or `y`                                                    |

Let's see few examples to better understand these groups.

```javascript
const input = "There are so many numbers in 1 to 100 and you can't count them.";
const regex = /([1-9])/g;
const result = input.matchAll(regex);
for (let match of result) {
    console.log(match.index); // 29, 34
}

const input2 = "{first: 'John', last: 'Doe'}";
const regex2 = /'([\w]+)'/g;
const result2 = input2.matchAll(regex2);
for (let match of result2) {
    console.log(match[1]); // John, Doe
}

const input3 = "john.doe@example.com";
const regex3 = /([a-z]+)\.([a-z]+)@([a-z]+)\.com/;
const result3 = input3.match(regex3);
console.log(result3[1]); // john
console.log(result3[2]); // doe
console.log(result3[3]); // example

```

## Quantifiers

Quantifiers are used to specify the number of occurrences of a character or group of characters. You can use quantifiers like `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}` to specify the number of occurrences.

| Quantifier | Description                                                               |
|------------|---------------------------------------------------------------------------|
| `x*`       | Match zero or more occurrences of the preceding character (`x`) or group  |
| `x+`       | Match one or more occurrences of the preceding character (`x`) or group         |
| `x?`       | Match zero or one occurrence of the preceding character (`x`) or group          |
| `x{n}`     | Match exactly `n` occurrences of the preceding character (`x`) or group         |
| `x{n,}`    | Match `n` or more occurrences of the preceding character (`x`) or group         |
| `x{n,m}`   | Match between `n` and `m` occurrences of the preceding character (`x`) or group |


```javascript
const input = 'Hello World';
const regex = /l+/;
console.log(input.match(regex)[0]); // Output: 'll'
console.log(input.match(/l{2,}/)[0]); // Output: 'll'
console.log(input.match(/l{2,4}/)[0]); // Output: 'll'
```

### Flags

Flags are optional parameters that can be used to modify the behavior of the regular expression. These are flags like case-insensitive, global search, and multiline search.

| Flag | Description                            |
|------|----------------------------------------|
| `i`  | Case-insensitive search                |
| `g`  | Global search                          |
| `m`  | Multiline search                       |
| `u`  | Unicode search                         |
| `d`  | Generate indices for substring matches |

```javascript
const input = 'Hello World';
const regex = /l+/g;
console.log(input.match(regex)); // Output: ['ll', 'l']
console.log(input.search(/h/i)); // Output: 0
console.log("Hello WORLD".match(/l+/gi)); // Output: ['ll', 'L']
```

If you need to use one of the special characters as a literal, you can escape it using a backslash `\`.

```javascript
const input = 'Hello World';
const regex = /l\+/;
console.log(input.match(regex)); // Output: null
```