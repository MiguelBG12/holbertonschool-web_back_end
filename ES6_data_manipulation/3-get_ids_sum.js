// Function to calculate the sum of student IDs
const getStudentIdsSum = (students) => {
  const all = students // Array of students
    .map((student) => student.id) // Extracting IDs
    .reduce((studentPrev, studentCurrent) => studentPrev + studentCurrent); // Summing IDs

  return all; // Return the sum of student IDs
};

export default getStudentIdsSum; // Exporting the function
