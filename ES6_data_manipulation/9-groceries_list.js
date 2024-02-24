// Function to create a groceries list using a Map
const groceriesList = () => {
  const fruits = new Map([ // Creating a Map of groceries
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  return fruits; // Returning the groceries list as a Map
};

export default groceriesList; // Exporting the function
