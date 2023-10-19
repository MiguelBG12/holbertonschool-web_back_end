// Define a function to append a string to each element of an array using ES6's for...of loop.
export default function appendToEachArrayValue(array, appendString) {
  // Use a for...of loop to iterate through the elements of the array.
  for (let value of array) {
    // Append the specified string (appendString) to each element.
    value = appendString + value;
  }

  // Return the modified array with the appended strings.
  return array;
}
