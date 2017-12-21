# is-iterator

Returns true if an object is an iterator.

The ECMA standard [defines an iterator](https://tc39.github.io/ecma262/#sec-iterator-interface) to be an object with a `next()` method.

Remember that iterators are not the same thing as iterables! This module only checks for the former.

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
