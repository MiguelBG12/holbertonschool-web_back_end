// Function to update unique items in a Map
const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) { // Check if the input is a Map
    throw new Error('Cannot process'); // Throw an error if the input is not a Map
  }

  for (const [key, value] of map) { // Loop through each key-value pair in the Map
    if (value === 1) { // Check if the value is 1 (unique)
      map.set(key, 100); // Update the value to 100
    }
  }

  return map; // Return the updated Map
};

export default updateUniqueItems; // Exporting the function
