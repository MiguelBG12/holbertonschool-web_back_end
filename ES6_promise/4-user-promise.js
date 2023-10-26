// Define a function named 'signUpUser' that takes two parameters: 'firstName' and 'lastName'.
function signUpUser(firstName, lastName) {
  // Return a resolved promise with an object containing the provided 'firstName' and 'lastName'.
  return Promise.resolve({ firstName, lastName });
}

// Export the 'signUpUser' function as the default export of this module.
export default signUpUser;
