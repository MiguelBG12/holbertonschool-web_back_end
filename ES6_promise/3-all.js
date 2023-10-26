// Import the necessary functions from "utils.js"
import { uploadPhoto, createUser } from './utils';

// Define a function named 'handleProfileSignup' that resolves both promises and logs the result.
function handleProfileSignup() {
  // Use Promise.all to collectively resolve both promises and handle the result or error.
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      // Extract the data from the resolved promises and log it to the console.
      const [photoResult, userResult] = results;
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch(() => {
      // Log an error message in case of any errors.
      console.log('Signup system offline');
    });
}

// Export the function for use in other modules.
export default handleProfileSignup;
