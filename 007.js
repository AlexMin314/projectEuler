// Version 1.0
/*
function makePrimeArray(num) {
  let arr = Array.apply(0, Array(num)).map(function(a, b) {
    return b + 1;
  }).filter(
    function(e) {
      let count = 0;
      for (let i = 1; i <= e; i++) {
        if (e % i === 0) {
          count++;
        }
      }
      return count === 2;
    }
  );
  return arr;
}

console.log(makePrimeArray(110000)[10000]);
// returns 104743 [Finished in 22.759s]
*/


// Version 2.0
function makePrimeArray(num) {
  let answer = [];
  for (let i = 1; i < num; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      answer.push(i);
    }
  }
  return answer;
}

console.log(makePrimeArray(110000)[10000]);
// returns 104743 [Finished in 22.365s]
