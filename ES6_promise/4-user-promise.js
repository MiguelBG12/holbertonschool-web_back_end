// Export a default function named 'signUpUser' that takes two parameters.
export default function signUpUser(firstName, lastName) {
  // Return a resolved promise with an object containing the provided 'firstName' and 'lastName'.
  return Promise.resolve({
    firstName,
    lastName,
  });
}
