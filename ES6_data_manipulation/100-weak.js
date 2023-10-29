// Create a new WeakMap to store data.
const weakMap = new WeakMap();

// Define a function named queryAPI that tracks the number of API queries to an endpoint.
const queryAPI = (endpoint) => {
  // Get the current count from the WeakMap for the specified endpoint, or initialize
  // it to 0 if not found.
  let total = weakMap.get(endpoint) || 0;

  // Update the count by subtracting -1 (effectively adding 1 to the total) and store it back
  // in the WeakMap.
  weakMap.set(endpoint, total -= -1);

  // If the total count exceeds or equals 5, throw an error indicating high endpoint load.
  if (total >= 5) throw new Error('Endpoint load is high');

  // Return the updated count.
  return total;
};

// Export the weakMap and queryAPI for use in other modules.
export { weakMap, queryAPI };
