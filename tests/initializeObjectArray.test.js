'use strict';

const test = require('tape');
const initializeObjectArray = require('../src');

test('It can map a function with arity zero', t => {
  const objArray = initializeObjectArray(1, (() => ({})));
  t.deepEqual(objArray, [{}]);
  t.end();
});

test('It can map a function with arity one', t => {
  const objArray = initializeObjectArray(1, (number => ({ number })));
  t.deepEqual(objArray, [{ number: 0 }]);
  t.end();
});

test('It can map a function with arity two', t => {
  const objArray = initializeObjectArray(1, ((index, number) => ({ index, number })));
  t.deepEqual(objArray, [{ index: 0, number: 0 }]);
  t.end();
});

