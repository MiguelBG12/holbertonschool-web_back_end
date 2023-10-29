// Define a function to return a string of set values starting with a specific string (startString)
function cleanSet(set, startString) {
  // Use the spread operator (...) to convert the Set to an array, then filter and map the
  // values based on the startString.
  return [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}

export default cleanSet;
