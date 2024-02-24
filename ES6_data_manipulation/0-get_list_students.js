// Function to get a list of students
const getListStudents = () => {
  const students = [ // Array of student objects
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  return students; // Return the list of students
};

export default getListStudents; // Exporting the function
