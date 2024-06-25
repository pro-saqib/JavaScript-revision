// Function to fetch data from different APIs asynchronously
async function fetchMultipleData() {
    try {
      const [userData, postComments] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users/1'),
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      ]);
  
      const userDataJson = await userData.json();
      const postCommentsJson = await postComments.json();
  
      return { userData: userDataJson, postComments: postCommentsJson };
    } catch (error) {
      console.error('Error fetching multiple data:', error);
      throw error; // Re-throwing error for further handling
    }
  }
  
  // Using the async function
  async function fetchMultipleDataExample() {
    try {
      const { userData, postComments } = await fetchMultipleData();
      console.log('User Data:', userData);
      console.log('Post Comments:', postComments);
    } catch (error) {
      console.error('Error in fetchMultipleDataExample:', error);
    }
  }
  
  fetchMultipleDataExample();
  