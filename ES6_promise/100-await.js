// Importing necessary functions from external modules
import { uploadPhoto, createUser } from './utils';

// Asynchronous function to upload photo and create user
const asyncUploadUser = async () => {
  let photo;
  let user;

  try {
    photo = await uploadPhoto(); // Upload photo asynchronously
    user = await createUser(); // Create user asynchronously
  } catch (e) {
    // If there's an error, set photo and user to null
    photo = null;
    user = null;
  }

  return ({ photo, user }); // Return an object containing photo and user
};

export default asyncUploadUser; // Exporting the function
