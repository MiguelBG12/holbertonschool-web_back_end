// Define a function called getResponseFromAPI
function getResponseFromAPI() {
  // Create and return a new Promise
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation, like an API request
    setTimeout(() => {
      const success = true; // Simulate the success of the operation

      if (success) {
        // If the operation is successful, call resolve with some value
        resolve('Successful operation');
      } else {
        // If there is an error, call reject with an error object
        reject(new Error('There was an error in the operation'));
      }
    }, 2000); // Simulate a 2-second delay
  });
}

export default getResponseFromAPI; // Export the function
