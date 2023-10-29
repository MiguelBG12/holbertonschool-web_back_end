// Define a function named getListStudents that returns an array of objects.
function getListStudents() {
  // Create an array called students that contains information about students.
  const students = [
    // Each object represents a student with id, first name, and location attributes.
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  // Return the array of student objects.
  return students;
}

// Export the getListStudents function for use in other modules.
export default getListStudents;
