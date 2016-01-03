'use strict';

/* Multiples of 3 and 5
 * Problem 1
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 * we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */


const multiples = require('my-utils')
  .multiples;

const mults_3_5 = multiples(3, 5)(1000);
let answer = 0;

for (const multiple of mults_3_5) {
  answer += multiple;
}

console.log(answer);
