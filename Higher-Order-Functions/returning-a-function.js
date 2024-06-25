// Higher-order function that returns a function
function createMultiplier(multiplier) {
    return function (number) {
      return number * multiplier;
    };
  }
  
  // Using the higher-order function
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  
  console.log(double(5)); // Output: 10
  console.log(triple(5)); // Output: 15
  