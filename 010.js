// Version 2.0 - narrow down the range of j using Math.sqrt()
function primeSum(num) {
  let arr = [], primeChk;
  for (let i = 2; i <= num; i++) {
    primeChk = true;
    for (let j = 0; j < arr.length && arr[j] < Math.sqrt(i); j++) {
      if (i % arr[j] === 0) {
        primeChk = false;
        break;
      }
    }
    if (primeChk === true) {
      arr.push(i);
    }
  }
  return arr.reduce(function(a, b) {return a + b;});
}
console.log(primeSum(2000000));
// returns 143042032116 [Finished in 0.368s]

/*
//Verson 1.5
function primeSum(num) {
  let arr = [];
  let sum = 0;
  for (let i = 2; i < Math.sqrt(num); i++) {
    // assign false if not prime number like [ , , false, , false, ...]
    if (arr[i] !== false) {
      for (let j = 2; j < num/i; j++) {
        arr[i * j] = false;
      }
    }
  }
  for (let k = 2; k < num; k++) {
    if (arr[k] !== false) {
      sum += k;
    }
  }
  return console.log(sum);
}
primeSum(2000000);
// returns 142913828922 [Finished in 0.474s]


// Version 1.0 - tooks so long time.
function primeSum (num) {
  let arr = [], primeChk;
  for (let i = 2; i <= num; i++) {
    primeChk = true;
    for (let j = 0; j < arr.length; j++) {
      if (i % arr[j] === 0) {
          primeChk = false;
          break;
      }
    }
    if (primeChk === true) {
      arr.push(i);
    }
  }
  return arr.reduce(function(a, b) {return a + b;});
}
console.log(primeSum(2000000));
//returns 142913828922 [Finished in 60.046s]
*/
