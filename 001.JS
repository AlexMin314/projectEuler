// Version 1.0  ------------------
(function sortAndSum(num) {
  const arr = [];
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  return console.log(arr.reduce(function(a,b) {return a + b;}));
}(1000));
// returns 233168 [Finished in 0.078s]


// Version 2.0  ------------------
// expression in one sentence
console.log(Array.apply(this, Array(999)).map(function(value,i){return i+1;})
.filter(function(e){return e % 3 === 0 || e % 5 === 0;})
.reduce(function(a, b){return a+b;}, 0));

// returns 233168 [Finished in 0.076s]
