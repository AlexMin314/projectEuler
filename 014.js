// Version 1.0


let arr = [];
let arrTemp = [];
let num = 4;
let temp;

for (let i = 2; i < num; i++) {
  temp = i;
  arrTemp = [];
  while (temp > 1) {
    arrTemp.push(temp);
    if (temp % 2 === 0) {
      temp /= 2;
    } else {
      temp = (temp * 3) + 1;
    }
  }
  arrTemp.push(1);
  arr.push(arrTemp);
}

console.log(arr);

////////////////////////
function memo(f) {
  return function (x) {
      f.memo = f.memo || {};
      return (x in f.memo)? f.memo[x] : f.memo[x] = f(x);
  };
}


function fib(x) {
    if(x < 2) return 1; else return fib(x-1) + fib(x-2);
}


var memo_fib = memo(fib);
console.log(memo_fib(5));


1. 기본 함수가 있고 자주 재활용 된다면...
function square(num){
    return num*num;
}
square(10) //100


 2. 함수를 처리시 객체에 값으로 저장하도록 변경한다. 함수가 계속 호출된다면 객체에 저장되어 있다면 기존 저장값을 리턴하여 더 이상 처리하지 않도록 한다.

function square(num){
  var result = '';
  if(!square.cache[num]){
     console.log("Computing value...");
     result = num*num;
     square.cache[num] = result;
  }
  return square.cache[num];
}

// 함수 멤버변수로 객체 생성
square.cache = {}


square(10) // 계산
square(10) // 동일한 값이므로 기존 결과 리턴.
square(20) //  새로 계산

[출처] Javascript Memoization 간단한 활용법|작성자 달님

/*
// making target range array
let num = 13;
let rangeArr = [];
for (let i = num; i > 0; i--) {
  rangeArr.push(i);
}

// find Collatz qesuence
let temp;
let tempArr = [];
let answer = [];
for (let i = 0; i < rangeArr.length; i) {
  temp = rangeArr[0];
  while (temp !== 1) {
    tempArr.push(temp);
    if (temp % 2 === 0) {
      temp /= 2;
    } else {
      temp = (temp * 3) + 1;
    }
  }
  tempArr.push(1);
  //checker
  for (let j = 0; j < tempArr.length; j++) {
    if (tempArr[j] <= num) {
      while (rangeArr.indexOf(tempArr[j]) !== -1) {
        rangeArr.splice(rangeArr.indexOf(tempArr[j]), 1);
      }
    }
  }
  answer.push(tempArr);
  tempArr = [];
}

//console.log(answer.length);
console.log(answer);
*/
