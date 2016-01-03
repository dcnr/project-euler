'use strict';

const isPalindrome = require('my-utils')
  .isPalindrome;

let largest = {
  p: 0,
  m1: 0,
  m2: 0
};

console.time('Palindrome');

for (let m1 = 100; m1 < 1000; ++m1) {
  for (let m2 = 100; m2 < 1000; ++m2) {
    let p = m1 * m2;

    if (isPalindrome(p) && p > largest.p) {
      largest.p = p;
      largest.m1 = m1;
      largest.m2 = m2;
    }
  }
}

console.timeEnd('Palindrome');

console.log(largest);
