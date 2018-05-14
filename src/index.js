'use strict';

const initializeObjectArray = (size, factory) =>
  [...Array(size).keys()].map(factory);

module.exports = initializeObjectArray;
