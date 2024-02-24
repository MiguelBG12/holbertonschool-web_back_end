// Function to check if all values from an array are present in a set
const hasValuesFromArray = (set, array) => {
  for (const item of array) { // Loop through each item in the array
    if (!set.has(item)) { // Check if the set does not have the current item
      return false; // If any item is not found in the set, return false
    }
  }

  return true; // If all items are found in the set, return true
};

export default hasValuesFromArray; // Exporting the function
