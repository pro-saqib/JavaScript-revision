const numbers = [1, 2, 3, 4, 5];

// Using map() higher-order function
const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
