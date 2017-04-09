// Version 1.0

let arr = [];

for (let i = 999; i > 99; i -= 1) {
  for (let j = 999; j > 99; j -= 1) {
    let result = i * j;
    let front = Math.floor(result / 1000).toString();
    let near = (result % 1000).toString();
    if ( front[0] === near[2] && front[1] === near[1] && front[2] === near[0] ) {
        arr.push(result);
        break;
    }
  }
}

arr = arr.sort().reverse();
console.log(arr[0]);
