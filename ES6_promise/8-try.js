// Export a function named divideFunction.
export default function divideFunction(numerator, denominator) {
  // Check if the denominator is equal to 0.
  if (denominator === 0) {
    // If the denominator is 0, throw a new error with the message "Cannot divide by 0".
    throw new Error('Cannot divide by 0');
  } else {
    // If the denominator is not 0, perform the division and return the result.
    return numerator / denominator;
  }
}
