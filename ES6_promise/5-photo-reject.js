// Define and export a function named "uploadPhoto".
export default function uploadPhoto(fileName) {
  // Return a promise that is rejected with an error message.
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
