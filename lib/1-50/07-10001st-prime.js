'use strict';

function isPrime(n) {
  //
  // IN THIS FUNCTION:
  // HORRIBLE TRIAL DIVISION
  //

  let max = Math.sqrt(n);

  for (let i = 2; i <= max; ++i) {
    if (i % 2 === 0) {
      continue;
    }

    let x = n / i;

    if (parseInt(x, 10) === x) {
      return false;
    }
  }

  return true;
}

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
