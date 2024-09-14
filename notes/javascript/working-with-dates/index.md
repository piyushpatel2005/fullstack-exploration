# Working with Date and Time

Javascript `Date` object is used to work with dates and times. It provides methods to get and set date and time and provides convenient methods to work with dates and times.

`Date` object encasulates an integer value that represents the number of milliseconds since January 1, 1970, 00:00:00 UTC. This value is called a epoch time. This time is also known as Unix time or POSIX time.

## Creating a Date Object

There are multiple ways to create a `Date` object in Javascript. 

### Using constructor

You can create a new `Date` object using the `new` keyword and the `Date` constructor. There are five different ways of using constructor.

1. Without any arguments
2. With a date string
3. With a timestamp number
4. With a Date object
5. With a year, month, day, hour, minute, second, and millisecond

> **Note:** The `Date` object also depends on time zone of the user. Therefore, your output may vary compared to the output shown in this tutorial.

### Without any arguments

If you create a `Date` object without any arguments, it will create a new `Date` object with the current date and time.

```javascript
let date = new Date();
console.log(date); // 2024-09-10T07:37:30.000Z
console.log(typeof date); // object
```

### With a date string

You can create a `Date` object by passing a date string as an argument to the constructor. The date string should be in the format `YYYY-MM-DDTHH:MM:SS`.

```javascript
let date = new Date('2024-09-10T07:37:30');
console.log(date); // 2024-09-10T07:37:30.000Z
console.log(typeof date); // object
```

### With a timestamp number

In this case, you can pass the number of milliseconds since January 1, 1970, 00:00:00 UTC as an argument to the constructor.

```javascript
let date = new Date(1631258250000);
console.log(date); // 2024-09-10T07:37:30.000Z
```

### With a Date object

You can also create a `Date` object by passing another `Date` object as an argument to the constructor.

```javascript
let date1 = new Date();
let date2 = new Date(date1);
```

### With a year, month, day, hour, minute, second, and millisecond

You can also create a `Date` object by passing year, month, day, hour, minute, second, and millisecond as arguments to the constructor. You need to at least pass the year and month as arguments. If other fields are not passed, it will take the minimum value for that field. That is if you pass only the year, it will take the month as January, day as 1, hour as 0, minute as 0, second as 0, and millisecond as 0.

The syntax for this constructor is `new Date(year, month, day, hour, minute, second, millisecond)` and it is widely used to create a `Date` object.
The values for `month` are 0-based. That is January is 0, February is 1, and so on.

```javascript
let date1 = new Date(2024, 8);
let date2 = new Date(2024, 8, 10);
let date3 = new Date(2024, 8, 10, 12);
let date4 = new Date(2024, 8, 10, 12, 23);
let date5 = new Date(2024, 8, 10, 12, 23, 45);
let date6 = new Date(2024, 8, 10, 12, 23, 45, 234);
console.log(date1); // 2024-09-01T00:00:00.000Z
console.log(date2); // 2024-09-10T00:00:00.000Z
console.log(date3); // 2024-09-10T12:00:00.000Z
console.log(date4); // 2024-09-10T12:23:00.000Z
console.log(date5); // 2024-09-10T12:23:45.000Z
console.log(date6); // 2024-09-10T12:23:45.234Z
```

This code is executed with the timezone set to UTC. If you run this code in a different timezone, the output will be offset by local time offset. The timezone offset is a complex topic which will be discussed in a separate section.

#### Passing invalid values

If you pass invalid values to the constructor, it will adjust the values to the nearest valid value. For example, if you pass a month value greater than 11, it will adjust the date object to the next year depending on the value of the month.

```javascript
let date = new Date(2024, 12, 31, 23, 0, 0);
console.log(date); // 2025-01-31T23:00:00.000Z
```

In above example, I've passed the `month` value as 12 which is invalid. The `Date` object adjusts the date to the next year and sets the month to January.

If you pass invalid value in the `Date` constructor, it will return `Invalid Date`. Interestingly, for `null` value, it returns epoch date time.

```javascript
let date = new Date(undefined);
let date2 = new Date(null);
let date3 = new Date(NaN);
console.log(date); // Invalid Date
console.log(date2); // 1970-01-01T00:00:00.000Z
console.log(date3); // Invalid Date
```

#### String representation of Date

You can also get string representation of the date by using convenient method `Date()`. This gives string representation of the current date and time.

```javascript
let date = Date();
console.log(date); // Tue Sep 10 2024 03:37:30 GMT-0400 (Eastern Daylight Time)
console.log(typeof date); // string
console.log(new Date().toString()) // Tue Sep 10 2024 03:37:30 GMT-0400 (Eastern Daylight Time)
```

This is same as calling `new Date().toString()`.

## Date static methods

`Date` object provides static methods to work with dates. These methods are called on the `Date` object itself and not on the instance of the `Date` object. That is the syntax looks like `Date.methodName()`.

### Date.now()

`Date.now()` method returns the number of milliseconds since January 1, 1970, 00:00:00 UTC. This is same as the value returned by the `Date` constructor when called without any arguments.

```javascript
let now = Date.now();
console.log(now); // 1725956296845
```

### Date.parse()

`Date.parse()` method parses a date string and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC. The date string should be in the format `YYYY-MM-DDTHH:MM:SS`.

```javascript
const date = Date.parse('2024-09-10');
console.log(date);
const date2 = Date.parse('2024-09-10T00:00:00');
console.log(date2);
const date3 = Date.parse('2024-09-10T00:00:00Z');
console.log(date3);
```

### Date.UTC()

`Date.UTC()` method returns the number of milliseconds since January 1, 1970, 00:00:00 UTC for a specified date and time. The syntax for this method is `Date.UTC(year, month, day, hour, minute, second, millisecond)`.

```javascript
const time1 = Date.UTC(2024, 9, 10);
const time2 = Date.UTC(2024, 9, 10, 0, 0, 0);
console.log(time1); // 1728518400000
console.log(time2); // 1728518400000
```

## Date instance methods

`Date` object provides instance methods to work with dates. These methods are called on the instance of the `Date` object. That is the syntax looks as below.

```javascript
const date = new Date();
date.methodName();
```

When working with `Date` object, you can get individual components of the date and time using the following methods.

| Method | Description |
| --- | --- |
| `getDate()` | Returns the day of the month (1-31) |
| `getDay()` | Returns the day of the week (0-6) |
| `getFullYear()` | Returns the year |
| `getHours()` | Returns the hour (0-23) |
| `getMilliseconds()` | Returns the milliseconds (0-999) |
| `getMinutes()` | Returns the minutes (0-59) |
| `getMonth()` | Returns the month (0-11) |
| `getSeconds()` | Returns the seconds (0-59) |
| `getTime()` | Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC |
| `getTimezoneOffset()` | Returns the time difference between UTC time and local time, in minutes |
| `getUTCDate()` | Returns the day of the month, according to universal time (1-31) |
| `getUTCDay()` | Returns the day of the week, according to universal time (0-6) |
| `getUTCFullYear()` | Returns the year, according to universal time |
| `getUTCHours()` | Returns the hour, according to universal time (0-23) |
| `getUTCMilliseconds()` | Returns the milliseconds, according to universal time (0-999) |
| `getUTCMinutes()` | Returns the minutes, according to universal time (0-59) |
| `getUTCMonth()` | Returns the month, according to universal time (0-11) |
| `getUTCSeconds()` | Returns the seconds, according to universal time (0-59) |

### Example

I am running this code from Eastern Daylight Time (EDT) timezone. So, the outputs are offset by 4 hours to UTC. Your output will be adjusted according to the timezone offset.

```javascript
const date = new Date();
console.log(date); // date: Tue Sep 10 2024 04:38:37 GMT-0400 (Eastern Daylight Time)
console.log(`date.getDate(): ${date.getDate()}`); // date.getDate(): 10
console.log(`date.getDay(): ${date.getDay()}`); // date.getDay(): 2
console.log(`date.getFullYear(): ${date.getFullYear()}`); // date.getFullYear(): 2024
console.log(`date.getHours(): ${date.getHours()}`); // date.getHours(): 4
console.log(`date.getMilliseconds(): ${date.getMilliseconds()}`); // date.getMilliseconds(): 0
console.log(`date.getMinutes(): ${date.getMinutes()}`); // date.getMinutes(): 38
console.log(`date.getMonth(): ${date.getMonth()}`); // date.getMonth(): 8
console.log(`date.getSeconds(): ${date.getSeconds()}`); // date.getSeconds(): 37
console.log(`date.getTime(): ${date.getTime()}`); // date.getTime(): 1725956317000
console.log(`date.getTimezoneOffset(): ${date.getTimezoneOffset()}`); // date.getTimezoneOffset(): 240
console.log(`date.getUTCDate(): ${date.getUTCDate()}`); // date.getUTCDate(): 10
console.log(`date.getUTCDay(): ${date.getUTCDay()}`); // date.getUTCDay(): 2
console.log(`date.getUTCFullYear(): ${date.getUTCFullYear()}`); // date.getUTCFullYear(): 2024
console.log(`date.getUTCHours(): ${date.getUTCHours()}`); // date.getUTCHours(): 8
console.log(`date.getUTCMilliseconds(): ${date.getUTCMilliseconds()}`); // date.getUTCMilliseconds(): 0
console.log(`date.getUTCMinutes(): ${date.getUTCMinutes()}`); // date.getUTCMinutes(): 38
console.log(`date.getUTCMonth(): ${date.getUTCMonth()}`); // date.getUTCMonth(): 8
console.log(`date.getUTCSeconds(): ${date.getUTCSeconds()}`); // date.getUTCSeconds(): 37
```

You can also set individual components of the date and time using the following methods.

| Method | Description |
| --- | --- |
| `setDate()` | Sets the day of the month (1-31) |
| `setFullYear()` | Sets the year |
| `setHours()` | Sets the hour (0-23) |
| `setMilliseconds()` | Sets the milliseconds (0-999) |
| `setMinutes()` | Sets the minutes (0-59) |
| `setMonth()` | Sets the month (0-11) |
| `setSeconds()` | Sets the seconds (0-59) |
| `setTime()` | Sets the number of milliseconds since January 1, 1970, 00:00:00 UTC |
| `setUTCDate()` | Sets the day of the month, according to universal time (1-31) |
| `setUTCFullYear()` | Sets the year, according to universal time |
| `setUTCHours()` | Sets the hour, according to universal time (0-23) |
| `setUTCMilliseconds()` | Sets the milliseconds, according to universal time (0-999) |
| `setUTCMinutes()` | Sets the minutes, according to universal time (0-59) |
| `setUTCMonth()` | Sets the month, according to universal time (0-11) |
| `setUTCSeconds()` | Sets the seconds, according to universal time (0-59) |

### Example

```javascript
const date = new Date();
console.log(date); 
date.setFullYear(2025);
date.setMonth(9);
date.setDate(10);
date.setHours(12);
date.setMinutes(30);
date.setSeconds(45);
date.setMilliseconds(234);
console.log(date); 
```

There are few convenience methods to represent the date and time in a human-readable format.

| Method | Description |
| --- | --- |
| `toDateString()` | Returns the date portion of the date as a human-readable string |
| `toTimeString()` | Returns the time portion of the date as a human-readable string |
| `toLocaleDateString()` | Returns the date portion of the date as a human-readable string, using the locale of the user |
| `toLocaleTimeString()` | Returns the time portion of the date as a human-readable string, using the locale of the user |
| `toString()` | Returns the date and time as a human-readable string |
| `toLocaleString()` | Returns the date and time as a human-readable string, using the locale of the user |
| `toUTCString()` | Returns the date and time as a human-readable string, in UTC timezone |
| `toISOString()` | Returns the date and time as a string in ISO format |
| `toJSON()` | Returns the date and time as a string in JSON format |

### Example

Depending on your locale, the output of the following code may vary.

```javascript
const date = new Date();
console.log(`date: ${date}`);
// date: Tue Sep 10 2024 04:51:17 GMT-0400 (Eastern Daylight Time)
console.log(`date.toDateString(): ${date.toDateString()}`);
// date.toDateString(): Tue Sep 10 2024
console.log(`date.toTimeString(): ${date.toTimeString()}`);
// date.toTimeString(): 04:51:17 GMT-0400 (Eastern Daylight Time)
console.log(`date.toLocaleDateString(): ${date.toLocaleDateString()}`);
// date.toLocaleDateString(): 9/10/2024
console.log(`date.toLocaleString('en-GB'): ${date.toLocaleString('en-GB')}`);
// date.toLocaleString('en-GB'): 10/09/2024, 04:51:17
console.log(`date.toLocaleTimeString(): ${date.toLocaleTimeString()}`);
// date.toLocaleTimeString(): 4:51:17 AM
console.log(`date.toString(): ${date.toString()}`);
// date.toString(): Tue Sep 10 2024 04:51:17 GMT-0400 (Eastern Daylight Time)
console.log(`date.toLocaleString(): ${date.toLocaleString()}`);
// date.toLocaleString(): 9/10/2024, 4:51:17 AM
console.log(`date.toUTCString(): ${date.toUTCString()}`);
// date.toUTCString(): Tue, 10 Sep 2024 08:51:17 GMT
console.log(`date.toISOString(): ${date.toISOString()}`);
// date.toISOString(): 2024-09-10T08:51:17.000Z
console.log(`date.toJSON(): ${date.toJSON()}`);
// date.toJSON(): 2024-09-10T08:51:17.000Z
```

## Date comparison

You can compare two `Date` objects using comparison operators. The comparison is done based on the number of milliseconds since January 1, 1970, 00:00:00 UTC.

```javascript
const date1 = new Date(2024, 8, 10, 12, 30, 45, 234);
const date2 = new Date(2024, 8, 10, 12, 30, 45, 234);
console.log(date1 === date2); // false
console.log(date1 == date2); // false
console.log(date1.getTime() === date2.getTime()); // true
console.log(date1.getTime() == date2.getTime()); // true
console.log(date1 > date2); // false
console.log(date1 < date2); // false
console.log(date1 >= date2); // true
console.log(date1 <= date2); // true
```

## Date arithmetic

You can perform arithmetic operations on `Date` objects. You can add or subtract milliseconds, seconds, minutes, hours, days, months, and years to a `Date` object.
    
### Adding and subtracting Time

You can add or subtract milliseconds to a `Date` object using the setter methods.

```javascript
const date = new Date(2024, 8, 10, 12, 30, 45, 234);
console.log(date); // 2024-09-10T16:30:45.234Z
date.setMilliseconds(date.getMilliseconds() + 1000);
console.log(date); // 2024-09-10T16:30:46.234Z

const date2 = new Date(2024, 8, 10, 12, 30, 45, 234);
date2.setMilliseconds(date2.getMilliseconds() - 1000);
console.log(date2); // 2024-09-10T16:30:44.234Z
```

