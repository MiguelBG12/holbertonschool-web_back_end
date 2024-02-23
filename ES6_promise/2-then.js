// Define a function called `handleResponseFromAPI`
function handleResponseFromAPI(promise) {
  // Return a Promise chain
  return promise
  // If the input promise resolves, return a success response object
    .then(() => ({
      status: 200,
      body: 'success',
    }))
  // If the input promise rejects, return an Error object
    .catch(() => Error())
  // Log a message indicating that a response was received from the API, regardless of the outcome
    .finally(() => console.log('Got a response from the API'));
}

// Export the `handleResponseFromAPI` function as the default export
export default handleResponseFromAPI;
