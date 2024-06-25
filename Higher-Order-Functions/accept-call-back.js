// Higher-order function that takes a callback
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  // Callback function
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  
  // Using the higher-order function
  greet('Alice', sayGoodbye);
  