'use strict';


console.time('square');
const multiples = require('my-utils')
  .multiples;


let result = {
  sum_of_squares: 0,
  square_of_sum: 0,
  difference: 0
};


let range = multiples(1)(101);

for (const n of range) {
  result.sum_of_squares += Math.pow(n, 2);
}


range = multiples(1)(101);

let sum = 0;
for (const n of range) {
  sum += n;
}

result.square_of_sum = Math.pow(sum, 2);

result.difference = result.square_of_sum - result.sum_of_squares;

console.log(result);
console.timeEnd('square');
