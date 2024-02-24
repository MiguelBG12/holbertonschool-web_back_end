// Function to create an Int8TypedArray with specified length, position, and value
const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length); // Creating a buffer with specified length
  const data = new DataView(buffer); // Creating a DataView to manipulate the buffer

  if (position > length - 1) { // Checking if position is outside the range of the buffer
    throw new Error('Position outside range'); // Throwing an error if position is invalid
  }

  data.setInt8(position, value); // Setting the value at the specified position

  return data; // Returning the Int8TypedArray
};

export default createInt8TypedArray; // Exporting the function
