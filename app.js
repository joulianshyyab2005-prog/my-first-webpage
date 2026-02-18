// Importing everything we built
import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

// Part 4 & 5: Testing Math and Strings
console.log('Add: ', add(5, 3));
console.log('Uppercase: ', toUpperCase('hello'));
console.log('Multiply (Default Export): ', multiply(4, 5));

// Part 6: Testing Arrays
console.log('Max: ', findMax([1, 2, 3, 4, 5]));
console.log('Reversed: ', reverseArray([1, 2, 3]));

// Part 7: Testing Combined Functions
addAndLogUpper(10, 20);

// Part 8: Final Challenge
const numbers = [10, 5, 20, 15];
const maxNum = findMax(numbers);
const multiplied = multiply(maxNum, 2);
console.log('Final Challenge Result:', toUpperCase(multiplied.toString()));