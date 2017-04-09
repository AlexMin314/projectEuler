// Version 2.0
function smallestMultiple(num) {
  let arr = [];
  for (let i = 2; i <= num; i += 1) {
    arr.push(i); // arr.length returns 19
  }
  for (let k = 0; k < num - 1; k += 1) {
    let smallestMultipleArr = [];
    let arrNum = arr[k];
    for (let j = 0; j < num; j += 1) {
      if (arr[j] % arrNum === 0) {
        arr[j] = arr[j] / arrNum;
      }
    }
    smallestMultipleArr.push(arrNum);
  }
  let answer = smallestMultipleArr.reduce(function(a, b) {
    return a * b;
  });
  console.log(answer);
}

smallestMultiple(20); // returns 232792560 [Finished in 0.086s]



/* Version 1.0 - it took so long time..
function smallestMultiple(num) {
  let checker = false;
  for (let i = num;; i += 1) {
    for (let j = 2; j <= num; j += 1) {
      if (i % j !== 0)
        break;
      else if (j === num) {
        console.log(i);
        checker = true;
        break;
      }
    }
    if (checker)
      break;
  }
}

smallestMultiple(20); // returns 232792560, [Finished in 9.55s]
*/
