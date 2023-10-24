// Define a function called getFullResponseFromAPI
function getFullResponseFromAPI(success) {
    // Create and return a Promise within this function.
    return new Promise((resolve, reject) => {
      // Check if the 'success' parameter is true
      if (success) {
        // If 'success' is true, resolve the Promise with an object
        resolve({
          status: 200,
          body: 'Success',
        });
      } else {
        // If 'success' is false, reject the Promise with an error
        reject(new Error('The fake API is not working currently'));
      }
    });
  }
  
  // Export the getFullResponseFromAPI function as the default export
  export default getFullResponseFromAPI;
  