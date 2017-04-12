// Version 1.0

let sumOfSquare = Array.apply(0, Array(100)).map(function(a, b) {return (b + 1) ** 2;}).reduce(function(a,b) {return a + b;});
let squareOfSum = Array.apply(0, Array(100)).map(function(a, b) {return b + 1;}).reduce(function(a,b) {return a + b;}) ** 2;

let answer = squareOfSum - sumOfSquare;

console.log(answer);
// returns 25164150 [Finished in 0.083s]
