// Function to divide two numbers
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) { // Check if denominator is 0
    throw Error('cannot divide by 0'); // Throw an error if attempting to divide by 0
  }

  const result = numerator / denominator; // Perform division

  return result; // Return the result
}
