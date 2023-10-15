// Define a class named HolbertonCourse.
export default class HolbertonCourse {
  // Constructor for the HolbertonCourse class.
  // It accepts three parameters: name (string), length (number), and students (array).
  constructor(name, length, students) {
    // Check if 'name' is a string, and if not, throw a TypeError.
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    // Check if 'length' is a number, and if not, throw a TypeError.
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    // Check if 'students' is an array, and if not, throw a TypeError.
    if (!Array.isArray(students)) throw TypeError('Students must be an array');

    // Assign the 'name', 'length', and 'students' values to instance variables.
    this._name = name;
    this._length = length;
    this._students = students;
  }

}