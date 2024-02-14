// Function to return a string indicating preference for const
export function taskFirst() {
  const task = 'I prefer const when I can.'; // Declare a constant variable
  return task; // Return the constant variable
}

// Function to return a string indicating something is okay
export function getLast() {
  return ' is okay'; // Return a string indicating something is okay
}

// Function to combine two strings and return the result
export function taskNext() {
  let combination = 'But sometimes let'; // Declare a variable with let
  combination += getLast(); // Concatenate the result of getLast() function
  return combination; // Return the combined string
}
