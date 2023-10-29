// Define a function that returns an array of students in a specific city with their new grades.
function updateStudentGradeByCity(studentList, city, newGrades) {
  // Use filter and map to create a new array of students, updating their grades if available,
  // or setting them as "N/A" if not.
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
      const grade = matchingGrade ? matchingGrade.grade : 'N/A';
      return { ...student, grade };
    });
}

export default updateStudentGradeByCity;
