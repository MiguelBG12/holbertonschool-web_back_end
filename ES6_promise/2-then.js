// Define a function called handleResponseFromAPI
function handleResponseFromAPI(promise) {
  // Always return a resolved Promise with status '200' and body 'success'
  return promise
    .then(() => {
      // Log a message when the promise resolves
      console.log('Got a response from the API');
      // Return an object with status '200' and body 'success'
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      // Return an empty Error object when the promise rejects
      console.log('Got a response from the API'); // Log the message for rejection as well
      return new Error();
    });
}

// Export the handleResponseFromAPI function as the default export of the module
export default handleResponseFromAPI;
