'use strict';

function whatype(val) {
  const typeOf = typeof val;

  if (['function', 'undefined', 'string', 'boolean'].indexOf(typeOf) > -1) return typeOf;
  if (val === null) return 'null';


  // primitive type wrappers
  if (val instanceof String) return 'string';
  if (val instanceof Boolean) return 'boolean';
  if (val instanceof Number) return 'number';


  // other native types
  const strType = Object.prototype.toString.call(val);
  if (strType === '[object RegExp]') return 'regexp';
  if (strType === '[object Date]') return 'date';
  if (strType === '[object Error]') return 'error';
  if (strType === '[object Map]') return 'map';
  if (strType === '[object WeakMap]') return 'weak-map';
  if (strType === '[object Set]') return 'set';
  if (strType === '[object WeakSet]') return 'weak-set';
  if (strType === '[object ArrayBuffer]') return 'array-buffer';
  if (strType === '[object Promise]') return 'promise';
  if (strType === '[object DataView]') return 'data-view';
  if (strType === '[object Arguments]') return 'arguments';


  // Typed arrays
  const typedArrayTypes = ['Float32Array', 'Float64Array', 'Int16Array', 'Int32Array',
    'Int8Array', 'Uint16Array', 'Uint32Array', 'Uint8Array', 'UInt8ClampedArray'];
  if (typedArrayTypes.some(t => strType.indexOf(t) > -1)) return 'typed-array';


  if (val.constructor === Array) return 'array';
  if (val === Object(val)) return 'object';
  if (isNaN(val)) return 'not-a-number';
  if (!isNaN(parseFloat(val)) && isFinite(val)) return 'number';
  if (val === Infinity) return 'infinity';
  if (val === -Infinity) return '-infinity';
}

module.exports = whatype;
