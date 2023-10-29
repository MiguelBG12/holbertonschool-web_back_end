// Define a function that creates a new ArrayBuffer with an Int8 value at a specific position.
function createInt8TypedArray(length, position, value) {
  // Check if adding the value at the specified position is possible.
  if (position >= 0 && position < length) {
    // Create a new ArrayBuffer with the specified length.
    const buffer = new ArrayBuffer(length);

    // Create a DataView to work with the ArrayBuffer.
    const dataView = new DataView(buffer);

    // Set the Int8 value at the specified position.
    dataView.setInt8(position, value);

    // Return the DataView containing the updated ArrayBuffer.
    return dataView;
  }
  // Throw an error if the position is outside the valid range.
  throw new Error('Position outside range');
}

export default createInt8TypedArray;
