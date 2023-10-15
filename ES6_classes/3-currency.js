// Define a class named Currency.
export default class Currency {
    // Constructor for the Currency class.
    // It accepts two parameters: 'code' (string) and 'name' (string).
    constructor(code, name) {
      // Check if 'code' is a string, and if not, throw a TypeError.
      if (typeof code !== 'string') throw TypeError('Code must be a string');
      // Check if 'name' is a string, and if not, throw a TypeError.
      if (typeof name !== 'string') throw TypeError('Name must be a string');
  
      // Assign the 'code' and 'name' values to instance variables.
      this._code = code;
      this._name = name;
    }
}
  