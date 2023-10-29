// Define a function updateUniqueItems that updates the quantity of items with an initial quantity
// of 1 in a given map.
function updateUniqueItems(map) {
  // Check if the argument is a Map.
  if (map instanceof Map) {
    // Iterate through the map and update the quantity of items with an initial quantity (1 to 100)
    for (const [item, quantity] of map) {
      if (quantity === 1) {
        map.set(item, 100);
      }
    }
  } else {
    // Throw an error if the argument is not a map.
    throw new Error('Cannot process');
  }
}

export default updateUniqueItems;
