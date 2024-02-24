// Function to update student grades based on city
const updateStudentGradeByCity = (students, city, newGrades) => {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) { // Check if inputs are arrays
    return []; // Return an empty array if either input is not an array
  }

  const studentByCity = students // Filter students by city
    .filter((student) => student.location === city)
    .map((student) => {
      // Find grades for the student
      const grades = newGrades.filter((note) => student.id === note.studentId);
      let grade = 'N/A'; // Default grade

      if (grades[0]) { // If there's a grade found
        grade = grades[0].grade; // Set the grade
      }

      return { ...student, grade }; // Return updated student object with grade
    });

  return studentByCity; // Return students with updated grades for the specified city
};

export default updateStudentGradeByCity; // Exporting the function
