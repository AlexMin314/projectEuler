// Version 1.0
function primeFactor(num) {
  for (let i = 2; i < num;i += 1) {
    while (num % i === 0) {
      num = num / i;
    }
  }
  console.log(num);
}

primeFactor(600851475143);
