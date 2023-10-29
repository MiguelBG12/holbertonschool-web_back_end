// Define a function named getStudentIdsSum that calculates and returns the sum of all student IDs.
function getStudentIdsSum(studentList) {
  // Use the reduce function to iterate through the studentList and accumulate the sum of IDs
  // The initial value of 0 is provided to start the accumulation.
  return studentList.reduce((total, student) => total + student.id, 0);
}

// Export the getStudentIdsSum function for use in other modules.
export default getStudentIdsSum;
