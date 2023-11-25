function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(3)); // 6

// second method | function express and using ternary operator

//const factorial = function fac(n) {
  //  return n < 2 ? 1 : n * fac(n - 1);
  //};
  
  //console.log(factorial(3)); // 6