// Define a class 'HolbertonClass' to represent a Holberton class with a year and location.
export class HolbertonClass {
  // Constructor to initialize 'year' and 'location' properties.Constructor to initialize 'year' and 'location' properties.
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  // Getter for 'year'.
  get year() {
    return this._year;
  }

  // Getter for 'location'.
  get location() {
    return this._location;
  }
}

// Create instances of 'HolbertonClass' for different years and locations.
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');