// Function to simulate fetching data asynchronously
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Simulating success/failure condition
        if (success) {
          resolve('Data fetched successfully');
        } else {
          reject('Error fetching data');
        }
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  // Function to simulate processing data asynchronously
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Processed ${data}`);
      }, 1000);
    });
  }
  
  // Using promise chaining
  fetchData()
    .then((data) => {
      console.log(data); // Output: Data fetched successfully
      return processData(data);
    })
    .then((processedData) => {
      console.log(processedData); // Output: Processed Data
    })
    .catch((error) => {
      console.error(error); // Output: Error fetching data or processing
    });
  