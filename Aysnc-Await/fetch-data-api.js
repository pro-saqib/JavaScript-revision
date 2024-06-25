// Function to fetch data asynchronously
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throwing error for further handling
    }
  }
  
  // Using the async function
  async function fetchDataExample() {
    try {
      const data = await fetchData();
      console.log('Fetched Data:', data);
    } catch (error) {
      console.error('Error in fetchDataExample:', error);
    }
  }
  
  fetchDataExample();
  