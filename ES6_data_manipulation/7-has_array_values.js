// Define a function hasValuesFromArray that checks if all elements in the array exist in the set.
function hasValuesFromArray(set, array) {
  // Use the every method to check if all elements in the array are present in the set.
  return array.every((element) => set.has(element));
}

export default hasValuesFromArray;
