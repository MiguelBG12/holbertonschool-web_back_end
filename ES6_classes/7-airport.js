// Define an 'Airport' class representing an airport with a name and code.
export default class Airport {
  // Constructor that initializes the 'name' and 'code' properties.
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter method for 'name'.
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    this._name = newName;
  }

  
}