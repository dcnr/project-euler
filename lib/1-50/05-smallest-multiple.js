'use strict';

function check(m) {
  const x = [2, 3, 4, 5, 6, 7, 8, 9, 10,
             11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  return x.every(v => {
    return m % v === 0;
  });
}


console.time('multiple');

for (let i = 2520;; ++i) {
  if (check(i)) {
    console.log(i);
    break;
  }
}

console.timeEnd('multiple');
