// Creating a WeakMap instance
const weakMap = new WeakMap();

// Function to query an API endpoint
const queryAPI = (endpoint) => {
  let times = weakMap.get(endpoint) || 0; // Get the number of times the endpoint has been queried

  times += 1; // Increment the count

  weakMap.set(endpoint, times); // Update the count in the WeakMap

  if (times >= 5) { // If the endpoint has been queried more than 5 times
    throw new Error('Endpoint load is high'); // Throw an error indicating high endpoint load
  }

  return times; // Return the number of times the endpoint has been queried
};

export { weakMap, queryAPI }; // Exporting the WeakMap and queryAPI function
