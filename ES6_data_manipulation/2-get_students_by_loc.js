// Define a function that filters and returns an array of student objects in a specific city.
function getStudentsByLocation(studentList, city) {
  // Use the filter function to iterate through the studentList array and return an array of
  // student objects where the location matches the specified city.
  return studentList.filter((student) => student.location === city);
}

// Export the getStudentsByLocation function for use in other modules.
export default getStudentsByLocation;
