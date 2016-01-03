'use strict';

const isPrime = require('my-utils').isPrime;

console.time('prime');

let prime = 0;
let count = 0;

while(count !== 10001) {
  for (let i = 1;; i += 2) {
    if (isPrime(i)) {
      prime = i;
      count++;
    }

    if (count === 10001) {
      break;
    }
  }
}

console.log(prime);
console.timeEnd('prime');
