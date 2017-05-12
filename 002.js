// Version 1.0

function fibonacci(num) {
  // making fibo array.
  let arr = [1, 2, ];
  for (let i = 0; arr[i] < num; i += 1) {
    arr.push(arr[i] + arr[i + 1]);
  }
  // filter even element and sum.
  arr = arr.filter(function(e) {
    return e % 2 === 0;
  }).reduce(function(a, b) {
    return a + b;
  });
  return arr;
}

console.log(fibonacci(4000000));
// 4613732 [Finished in 0.074s]
