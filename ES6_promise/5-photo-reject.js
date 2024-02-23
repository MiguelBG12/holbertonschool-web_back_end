// Function to upload a photo
export default function uploadPhoto(filename) {
  return Promise.reject( // Rejecting a promise with an error message
    new Error(`${filename} cannot be processed`),
  );
}
