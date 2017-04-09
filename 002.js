// Version 1.0

function fibonacci(num) {
  let arr = [1, 2, ];
  for (let i = 0; arr[i] < num; i += 1) {
      arr.push(arr[i]+arr[i + 1]);
  }
  arr = arr.filter(function(e) {return e % 2 === 0;});
  console.log(arr.reduce(function (a,b) {return a + b;}));
}

fibonacci(4000000);
