# Javascript Object Notation (JSON)

JSON is a light-weight data interchange format. Sometimes objects need to be stored or transferred over the network. For this we need a mechanism to serialize and deserialize objects. JSON is a popular choice for this purpose. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others.

## Overview

JOSN is a text format that is easy to read and write. It's heavily used when exchanging information between a client and the server or a browser and a server. Javascript objects are converted into JSON text and are sent to the server. This is also known as serialization of data. The server then converts the JSON back into Javascript objects. This is also called deserialization.

## JSON Syntax

JSON syntax is derived from JavaScript object notation syntax. JSON in general uses key-value pairs similar to Javascript objects. The JSON keys and values are separated by a colon. Each key-value pairs are separated by a comma. The JSON object is enclosed in curly braces `{}`. The key and value are enclosed in double quotes `""`. Any number values do not need to be enclosed in double quotes.

```json
{
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "isMarried": false,
  "children": ["Alice", "Bob"],
  "spouse": null
}
```

In this case, the JSON object reprensents a single person. This person also has an array of children. Arrays are denoted using square brackets `[]`.

In JSON, the absense of a value is represented by `null`. JSON supports following data types which look very similar to Javascript data types.

- String
- Number
- Object
- Array
- Boolean
- Null

## Array of Objects

You could also define multiple values in an array. Here is a simple example of two person information stored in an array.

```json
[
  {
    "name": "John Doe",
    "age": 30,
    "city": "New York"
  },
  {
    "name": "Jane Doe",
    "age": 28,
    "city": "Los Angeles"
  }
]
```

## Parsing JSON

In Javascript, you have convenient methods to parse JSON strings. The `JSON.parse()` method is used to parse a JSON string and convert it into a Javascript object.

```javascript
const inputString = `{
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "isMarried": false,
  "children": ["Alice", "Bob"],
  "spouse": null
}`;

const person = JSON.parse(inputString);
console.log(person.name) // John Doe
console.log(person.children) // ['Alice', 'Bob']
console.log(typeof person) // object
```

## Converting Javascript objects to JSON

For converting Javascript objects to JSON, you can use the `JSON.stringify()` method. This method converts a Javascript object into a JSON string.

```javascript
const person = {
  name: "John Doe",
  age: 30
};

const jsonString = JSON.stringify(person);
console.log(jsonString) // {"name":"John Doe","age":30}
console.log(typeof jsonString) // string
```

You would use JSON related methods quite extensively when working with web APIs. The data is sent and received in JSON format. Javascript `fetch` API is used to make network requests and the data is sent and received in JSON format.