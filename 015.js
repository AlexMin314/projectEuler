// Version 1.0
let casesOf20 = 1;
let casesOf40 = 1;

for (let i = 1; i <= 20; i++) {
  casesOf20 *= i;
}

for (let i = 1; i <= 40; i++) {
  casesOf40 *= i;
}

let answer = casesOf40 / Math.pow(casesOf20, 2);

console.log(answer);
// returns 137846528820 [Finished in 0.071s]
