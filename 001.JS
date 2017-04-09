
// Version 1.0
function sortAndSum(num) {
  let arr = [];
  for (i = 1; i < num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0)
      arr.push(i);
  }
  let sum = arr.reduce(function(a,b) {return a + b;});
  console.log(sum);
}

sortAndSum(1000);
