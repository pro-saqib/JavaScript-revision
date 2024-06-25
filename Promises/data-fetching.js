// Function to simulate fetching data asynchronously
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (e.g., fetching data from an API)
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
  
  // Using the fetchData function with promises
  fetchData()
    .then((data) => {
      console.log(data); // Output: Data fetched successfully
    })
    .catch((error) => {
      console.error(error); // Output: Error fetching data
    });
  