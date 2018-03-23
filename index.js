'use strict';

function whatype(val) {
  const typeOf = typeof val;

  if (['function', 'undefined', 'string', 'boolean'].indexOf(typeOf) > -1) return typeOf;
  if (val === null) return 'null';
  if (val.constructor === Array) return 'array';
  if (val === Object(val)) return 'object';
  if (isNaN(val)) return 'not-a-number';
  if (!isNaN(parseFloat(val)) && isFinite(val)) return 'number';
  if (val === Infinity) return 'infinity';
  if (val === -Infinity) return '-infinity';
}

module.exports = whatype;
