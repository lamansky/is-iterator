# is-iterator

Returns true if an object is an iterator.

Remember that iterators are not the same thing as iterables! This module only checks for the former.

The ECMAScript standard [defines an iterator](https://tc39.github.io/ecma262/#sec-iterator-interface) to be an object with a `next()` method. To avoid false-positives from objects with `next()` methods, this module additionally checks to make sure that the iterator is an iterable that points to itself, since this is a characteristic of built-in iterators.

## Installation

```bash
npm install is-iterator --save
```

## Usage Example

```javascript
const isIterator = require('is-iterator')

const array = [] // An array is an iterable, but not by itself an iterator

isIterator(array) // false
isIterator(array[Symbol.iterator]()) // true
```
