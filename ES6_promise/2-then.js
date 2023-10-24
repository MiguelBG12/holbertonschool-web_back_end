// Define a function called handleResponseFromAPI
function handleResponseFromAPI(promise) {
  // Attach three handlers to the promise:
  return promise
    .then(() => {
      // When the promise resolves, log a message and return an object
      console.log('Got a response from the API');
      return { status: '200', body: 'success' };
    })
    .catch(() => new Error()); // When the promise rejects, return an empty error object
}

// Export the handleResponseFromAPI function as the default export of the module
export default handleResponseFromAPI;
