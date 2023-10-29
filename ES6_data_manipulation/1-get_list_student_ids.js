// Define a function named getListStudentIds that extracts and returns an array of student IDs.
function getListStudentIds(studentList) {
  // Check if the input is an array.
  if (!Array.isArray(studentList)) {
    // If the input is not an array, return an empty array.
    return [];
  }

  // Use the map function to extract and return an array of student IDs.
  return studentList.map((student) => student.id);
}

// Export the getListStudentIds function for use in other modules.
export default getListStudentIds;
