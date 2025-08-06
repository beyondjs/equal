# @beyond-js/equal

A flexible deep equality comparison utility for JavaScript objects and arrays.

## Installation

```bash
npm install @beyond-js/equal
```

## Usage

```javascript
// Compare objects
console.log(equal({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
console.log(equal({ a: 1, b: 2 }, { a: 1, b: 3 })); // false

// Compare nested structures
console.log(equal({ a: [1, { b: 2 }] }, { a: [1, { b: 2 }] })); // true

const equal = require('@beyond-js/equal');

// Compare primitive values
console.log(equal(1, 1)); // true
console.log(equal('a', 'b')); // false

// Compare arrays
console.log(equal([1, 2, 3], [1, 2, 3])); // true
console.log(equal([1, 2, 3], [3, 2, 1])); // true
```

## API

### `equal(value1, value2)`

Compares two values for deep equality.

-   `value1`, `value2`: The values to compare. Can be primitives, arrays, or objects.
-   Returns: `boolean` - `true` if the values are deeply equal, `false` otherwise.

### `equal.generate(value)`

Generates a comparable string representation of a value.

-   `value`: The value to generate a comparable representation for.
-   Returns: `string` - A JSON string representation of the value, with arrays and object properties sorted.

## Features

-   Deep equality comparison for nested objects and arrays
-   Order-insensitive comparison for object properties and array elements
-   Handles circular references
-   Lightweight with no external dependencies

## License

MIT © [[BeyondJS](https://beyondjs)]
