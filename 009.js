// Version 1.0

function pythagoreanTriplet(sum) {
  // a + b > c (triangle), a + b + c = sum -> narrow range of c
  for (let c = sum/2; c > sum/3; c--) {
    for (let b = sum/2; b > 0; b-- ) {
      // a + b > c (triangle) -> narrow range of a
      for (let a = sum/2; a > c - b; a--) {
        if ((c ** 2 === b ** 2 + a ** 2) && (a + b + c === sum)) {
          return console.log(a * b * c);
        }
      }
    }
  }
}

pythagoreanTriplet(1000); //returns 31875000 [Finished in 0.424s]
