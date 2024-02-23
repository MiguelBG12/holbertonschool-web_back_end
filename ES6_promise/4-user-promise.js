// Function to sign up a user with first name and last name
function signUpUser(firstName, lastName) {
  return Promise.resolve( // Resolving a promise with user information
    {
      firstName,
      lastName,
    },
  );
}

export default signUpUser; // Exporting the function
