// Function to clean a Set by filtering and formatting its elements
const cleanSet = (set, startString) => {
  const str = []; // Array to store cleaned elements

  // Check if inputs are valid
  if (
    typeof set !== 'object'
      || typeof startString !== 'string'
      || startString.length === 0
  ) {
    return ''; // Return an empty string if inputs are invalid
  }

  // Loop through each item in the set
  for (const item of set) {
    // Check if the item exists and starts with the provided startString
    if (item && item.startsWith(startString)) {
      // Remove the startString and add the cleaned item to the array
      str.push(item.slice(startString.length));
    }
  }

  return str.join('-'); // Join the cleaned elements with '-' delimiter and return as a string
};

export default cleanSet; // Exporting the function
