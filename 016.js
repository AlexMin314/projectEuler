// wrong answer
// Javascript decimal problem.

function powerSum(n) {
  let result = Math.pow(2, n),
    max = 100000000000000;
  arr = [];
  let sum = 0;

  // making split array for big Number.
  while (result) {
    if (result > max) {
      arr.unshift(result % max);
      result = Math.floor(result / max);
    }
    if (result < max) {
      arr.unshift(result);
      result = null;
    }
  }
  // sum
  for(let i = 0; i < arr.length; i++) {
    let target = arr[i].toString().split('');
    for(let j = 0; j < target.length; j++) {
      sum += Number(target[j]);
    }
  }

  return console.log(sum, arr);
}

powerSum(1000);
