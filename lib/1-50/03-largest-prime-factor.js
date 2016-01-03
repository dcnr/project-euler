'use strict';

/* Largest prime factor
 * Problem 3
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */

const isPrime = require('my-utils').isPrime;

const target = 600851475143;
const max = Math.sqrt(target); // Shouldn't check over the sqrt of num

console.time('start');
for (let i = 0; i < max; i++) {
  if (isPrime(i)) {
    if (target % i === 0) {
      console.log("Prime Factor:", i);
    }
  }
}
console.timeEnd('start');
