// Function to simulate fetching data asynchronously
function fetchDataFromAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data from API 1');
    }, 1500);
  });
}

// Function to simulate fetching data asynchronously
function fetchDataFromAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data from API 2');
    }, 2000);
  });
}

// Using Promise.all() to fetch data from multiple APIs
Promise.all([fetchDataFromAPI1(), fetchDataFromAPI2()])
  .then((results) => {
    const [result1, result2] = results;
    console.log(result1); // Output: Data from API 1
    console.log(result2); // Output: Data from API 2
    // Additional processing with the results
  })
  .catch((error) => {
    console.error(error); // Handle any errors in fetching data
  });
