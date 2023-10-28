// Import the signUpUser function from '4-user-promise.js'.
import signUpUser from './4-user-promise';

// Import the uploadPhoto function from '5-photo-reject.js'.
import uploadPhoto from './5-photo-reject';

// Define and export the handleProfileSignup function.
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Create a promise for user signup.
  const userPromise = signUpUser(firstName, lastName);

  // Create a promise for photo upload.
  const photoPromise = uploadPhoto(fileName);

  // Wait for both promises to settle and process the results.
  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => results.map((result) => [{
      // Store the status of the promise (fulfilled or rejected).
      status: result.status,
      // Store the value or reason of the promise.
      value: (result.status === 'fulfilled') ? result.value : result.reason,
    }]));
}
