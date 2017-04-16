// Version 1.0

function numOfDivisors(num) {
  let arr = [];
  let triangular = (num + 1) * num / 2; // making num_th triangular number
  for (let i = 2; i <= triangular; i++) {
    let count = 0;
    while (triangular % i === 0) { // prime factorization
      triangular /= i;
      count++;
    }
    if (count !== 0) {
      arr.push(count + 1); // +1 to exponents of prime factors
    }
  }
  return arr.reduce(function(a, b) {return a * b;});
}

function findAnswer(target) {
  for (let j = 3; j < Math.pow(target, 2); j++) {
    if (numOfDivisors(j) >= target) {
      return console.log((j + 1) * j / 2);
    }
  }
}

findAnswer(500); // returns 76576500 [Finished in 0.624s]
