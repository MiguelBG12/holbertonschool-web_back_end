// Define a class named ClassRoom.
export default class ClassRoom {
  // Constructor for the ClassRoom class.
  // It accepts one parameter, maxStudentsSize, which represents the maximum number of students.
  constructor(maxStudentsSize) {
    // If maxStudentsSize is not a number, throw a TypeError with an error message.
    if (typeof maxStudentsSize !== 'number') throw TypeError('Length must be a number');
    // If maxStudentsSize is a valid number, assign it to the instance variable _maxStudentsSize.
    this._maxStudentsSize = maxStudentsSize;
  }
}
