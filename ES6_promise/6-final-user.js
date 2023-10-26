import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Define the 'handleProfileSignup' function to accept three arguments.
export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName); // Call the signUpUser function.
  const photoPromise = uploadPhoto(fileName); // Call the uploadPhoto function.

  // Use Promise.allSettled to wait for both promises to settle, then map the results.
  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => results.map((result) => ({
      status: result.status, // Include the status of the promise (fulfilled or rejected).
      // Include the value or reason of the promise.
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}
