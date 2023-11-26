// print name
function printHello(name){
    return console.log(`Hello ${name}!\n`)
}
let myName = "Saqib"
printHello(myName)

// while passing by value, argument's value do not change globally
function square(n){
    return n*n
}
let number = 5
console.log(square(number))
// outputs 25 i.e changes arguments value only inside function
console.log(number)
// outputs 5 i.e changes inside function did not take effect outside

// but assing an object or array will change actuall values
function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(mycar.make); // "Honda"
  myFunc(mycar);
  console.log(mycar.make); // "Toyota"

  // similarly an array will change actuall values
  function myFunc(theArr) {
    theArr[0] = 30;
  }
  
  const arr = [45];
  
  console.log(arr[0]); // 45
  myFunc(arr);
  console.log(arr[0]); // 30
  
// Anonymous function can be created by a function expression. | without a name 
  const cube = function (number) {
    return number * number * number;
  };
  
  console.log(cube(4));

  // function hoisting Consider the example below:

console.log(square(5)); // 25

function square(n) {
  return n * n;
}

// This code runs without any error, despite the square() function being called before it's declared. 
// JavaScript interpreter hoists the entire function declaration to the 
//top of the current scope, so the code above is equivalent to:

// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25


// Closure | JavaScript feature in which the inner function has access to the outer function variable.

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();


// Currying | returning enclosed function immidiately  
function sum(a) {
  return function (b) {
    return function (c) {
      return a+b+c
    }
  }
}

let ans = sum(4)(5)(8)
console.log(ans) // 17