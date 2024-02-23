// Function to execute a math function with error handling
function guardrail(mathFunction) {
  const queue = []; // Array to store results and processing message
  let result;

  try {
    result = mathFunction(); // Execute the math function
  } catch (e) {
    result = e.toString(); // Handle any errors
  }

  queue.push(result); // Add result to queue
  queue.push('Guardrail was processed'); // Add processing message to queue

  return queue; // Return the queue
}

export default guardrail; // Exporting the function
