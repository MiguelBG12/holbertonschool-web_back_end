// Define a function named getFullResponseFromAPI
function getFullResponseFromAPI(success) {
  // Return a Promise object
  return new Promise((resolve, reject) => {
    // Check if the operation is successful
    if (success) {
      // If successful, resolve the Promise with a success response object
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // If unsuccessful, reject the Promise with an error indicating the failure
      reject(new Error('The fake API is not working currently'));
    }
  });
}

// Export the getFullResponseFromAPI function as the default export
export default getFullResponseFromAPI;
