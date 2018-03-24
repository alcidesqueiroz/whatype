# whatype [![Build status](https://travis-ci.org/alcidesqueiroz/whatype.svg?branch=master)](https://travis-ci.org/alcidesqueiroz/whatype)

> 🕵 No more headaches to find the type of a value in JavaScript. Whatype is a tiny module that saves you from some annoying type-related WTFJS's.

![whatype!](https://gist.githubusercontent.com/alcidesqueiroz/c3d6c6edc559194bc37a2c464a21768d/raw/10b3f54010355c3bedfa3dbe7a1fb30ab0709c11/whatype.png)

What is a type? Well, this is surely one of the most debated topics in computer science. This four-letter word means one thing in static type systems and something else, completely different, in dynamic type systems. **I won't dwell on that.** This module focus on the **practical/mundane/non-academic meaning of "type"**, with what we deal with everyday at work, more specifically in JavaScript (which isn't an example when it comes to type systems).

## Install

With npm:
```
$ npm install --save whatype
```

With Yarn:

```
$ yarn add whatype
```

## Usage
Whatype has two possible usages:
1. By calling the `whatype` function itself, which returns a string with the detected type.
2. By calling the `whatype.is` method, which checks if a value is of a specific type. For some needs, this form is a way more versatile, since it allows checking for things like "pure-object", "literal-object",  "empty-array", "empty-object", "falsy", "truthy" and other possibilities.

### whatype(value)

Returns a string with the type of the passed value.

```
// String primitives
whatype(''); //=> 'string'
whatype('whatever'); //=> 'string'

// String objects are different from string primitives, their typeof is "object".
// Whatype will normalize this, treating them in the same way as primitives
whatype(new String('foo')); //=> 'string'

// No more typeof null === "object"... =)
whatype(null); //=> 'null'
whatype(undefined); //=> 'undefined'

// No more typeof NaN === "number"... =)
whatype(NaN); //=> 'not-a-number'

// Number primitives
whatype(0); //=> 'number'
whatype(42); //=> 'number'
whatype(30.5); //=> 'number'
whatype(-17); //=> 'number'

// Number objects are different from number primitives, their typeof is "object".
// Whatype will normalize this, treating them in the same way as primitives
whatype(new Number('12')); //=> 'number'

// Boolean primitives
whatype(true); //=> 'boolean'
whatype(false); //=> 'boolean'

// Boolean objects are different from boolean primitives, their typeof is "object".
// Whatype will normalize this, treating them in the same way as primitives
whatype(new Boolean(1)); //=> 'boolean'
whatype(function() { return arguments; }()); //=> 'arguments'
whatype(Infinity); //=> 'infinity'
whatype(-Infinity); //=> '-infinity'
whatype({}); //=> 'object'
whatype({ a: 123 }); //=> 'object'
whatype(/\d/); //=> 'regexp'

// No more typeof [] === "object"... =)
whatype([]); //=> 'array'
whatype([ 11, 22 ]); //=> 'array'
whatype(function(){}); //=> 'function'
whatype(async function(){}); //=> 'async-function'
whatype(function *(){}); //=> 'generator-function'
whatype(() => {}); //=> 'function'
whatype(Symbol('foo')); //=> 'symbol'
whatype(new Date()); //=> 'date'

// The returned type for every kind of error is simply "error", not "object"
whatype(new Error()); //=> 'error'
whatype(new ReferenceError()); //=> 'error'
whatype(new EvalError()); //=> 'error'
whatype(new TypeError()); //=> 'error'
whatype(new URIError()); //=> 'error'
whatype(new RangeError()); //=> 'error'
whatype(new SyntaxError()); //=> 'error'

whatype(new Promise(() => {})); //=> 'promise'
whatype(new Map()); //=> 'map'
whatype(new WeakMap()); //=> 'weak-map'
whatype(new Set()); //=> 'set'
whatype(new WeakSet()); //=> 'weak-set'

// The returned type for every kind of typed array is simply "typed-array", not "object"
whatype(new Float32Array()); //=> 'typed-array'
whatype(new Float64Array()); //=> 'typed-array'
whatype(new Int16Array()); //=> 'typed-array'
whatype(new Int32Array()); //=> 'typed-array'
whatype(new Int8Array()); //=> 'typed-array'
whatype(new Uint16Array()); //=> 'typed-array'
whatype(new Uint32Array()); //=> 'typed-array'
whatype(new Uint8Array()); //=> 'typed-array'
whatype(new ArrayBuffer(10)); //=> 'array-buffer'

whatype(new DataView(new ArrayBuffer())); //=> 'data-view'
```

## Author

Alcides Queiroz Aguiar

- Twitter: [alcidesqueiroz](https://twitter.com/alcidesqueiroz)
- Medium: [@alcidesqueiroz](https://medium.com/@alcidesqueiroz)
- Stack Overflow: [http://is.gd/aqanso](http://stackoverflow.com/users/1295666/alcides-queiroz-aguiar)
- E-mail: alcidesqueiroz <at> gmail

## License

This code is free to use under the terms of the [MIT License](LICENSE.md).
