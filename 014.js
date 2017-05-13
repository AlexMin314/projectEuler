// Version 1.0
function collatzCounter(n) {
  let count = 1;
  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = n * 3 + 1;
    }
    count++;
  }
  return count;
}

function maxChecker(value) {
  let max = {'count' : 0, 'index' : 0}
  let i, count;
  for(i = 1; i <= value; i++) {
    count = collatzCounter(i)
    if (count > max.count) {
        max.count = count;
        max.index = i;
    }
  }
  return max;
}

console.log(maxChecker(1000000));
// { count: 525, index: 837799 } [Finished in 2.103s]
