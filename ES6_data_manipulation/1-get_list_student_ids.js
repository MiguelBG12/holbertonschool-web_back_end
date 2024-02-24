// Function to extract student IDs from an array of objects
const getListStudentIds = (ids) => {
  if (!Array.isArray(ids)) { // Check if input is an array
    return []; // Return an empty array if input is not an array
  }
  const studentIds = ids.map((item) => item.id); // Extract IDs using map

  return studentIds; // Return the array of student IDs
};

export default getListStudentIds; // Exporting the function
