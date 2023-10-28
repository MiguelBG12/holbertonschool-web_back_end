// Import the signUpUser function from '4-user-promise' module.
import signUpUser from './4-user-promise';

// Import the uploadPhoto function from '5-photo-reject' module.
import uploadPhoto from './5-photo-reject';

// Define an asynchronous function named 'handleProfileSignup' with parameters:
const handleProfileSignup = async (
  firstName,
  lastName,
  fileName,
) => {
  // Initialize an empty array to store results.
  const result = [];

  try {
    // Call 'signUpUser' with 'firstName' and 'lastName' and await the result.
    const user = await signUpUser(firstName, lastName);
    // Push a fulfilled result to the 'result' array.
    result.push({ status: 'fulfilled', value: user });

    // Call 'uploadPhoto' with 'fileName' and await the result.
    await uploadPhoto(fileName);
  } catch (error) {
    // Push a rejected status.
    result.push({
      // Store the error message as a string in the 'value' property.
      status: 'rejected',
      value: error.toString(),
    });
  }

  // Return the 'result' array containing the results.
  return result;
};

// Export the 'handleProfileSignup' function as the default export.
export default handleProfileSignup;
