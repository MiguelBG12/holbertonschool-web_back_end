// Define a function 'guardrail' that takes a 'mathFunction' as a parameter.
const guardrail = (mathFunction) => {
  // Create an empty array 'queue' to store the results and messages.
  const queue = [];

  try {
    // Attempt to execute the 'mathFunction' and push its result into 'queue'.
    queue.push(mathFunction());
  } catch (error) {
    // If an error occurs during the execution, push the error message into 'queue'.
    queue.push(error.toString());
  } finally {
    // In the 'finally' block, always push a message indicating that the guardrail was processed.
    queue.push('Guardrail was processed');
  }

  // Return the 'queue' array containing the results and messages.
  return queue;
};

// Export the 'guardrail' function as the default export of this module.
export default guardrail;
