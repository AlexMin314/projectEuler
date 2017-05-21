// version 1.0
var oneToEleven = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4, 3, 6, 6, 8, 8, 7, 7, 9, 8, 8];
var tenDigits = [0, 0, 6, 6, 5, 5, 5, 7, 6, 6];
var hundredAnd = 10;
var result = 11;
var i, temp1, temp2;

for (var i = 1; i < 1000; i++) {
  temp1 = i % 100;
  if (temp1 < 20) {
    result += oneToEleven[temp1];
  } else {
    temp2 = temp1 % 10;
    result += oneToEleven[temp2];
    result += tenDigits[Math.floor(temp1 / 10)];
  }
  if (i > 99) {
    temp1 = Math.floor(i / 100);
    result += hundredAnd + oneToEleven[temp1];
    if (i % 100 === 0) {
      result -= 3;
    }
  }
}

console.log(result);
// 21124 [Finished in 0.084s]
