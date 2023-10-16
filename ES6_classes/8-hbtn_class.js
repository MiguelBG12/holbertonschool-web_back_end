// Define a 'HolbertonClass' class representing a class with size and location.
export default class HolbertonClass {
  // Constructor that initializes the 'size' and 'location' properties.
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // The 'valueOf' method returns the 'size' property when the object is coerced to a primitive value.
  valueOf() {
    return this._size;
  }

  
}