// Function to filter students by location
const getStudentsByLocation = (students, city) => {
  const studentsLocation = students.filter( // Filter students based on city
    (student) => student.location === city,
  );

  return studentsLocation; // Return filtered students
};

export default getStudentsByLocation; // Exporting the function
