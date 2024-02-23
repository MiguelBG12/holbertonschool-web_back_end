// Function to handle user profile signup process
// Utilizes createUser and uploadPhoto functions from utils
import { createUser, uploadPhoto } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => { // Promise.all resolves when all promises are settled
      const { body } = values[0]; // Extracting photo upload response
      const { firstName, lastName } = values[1]; // Extracting user creation response

      console.log(`${body} ${firstName} ${lastName}`); // Logging user information
    })
    .catch(() => { // Handling errors
      console.log('Signup system offline'); // Logging error message
    });
}

export default handleProfileSignup; // Exporting the function
