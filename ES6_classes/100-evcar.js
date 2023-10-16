// Import the 'Car' class from the '10-car' module
import Car from './10-car';

// Define a new class 'EVCar' that extends the 'Car' class
export default class EVCar extends Car {
  // Constructor for 'EVCar' that accepts 4 parameters: brand, motor, color, and range
  constructor(brand, motor, color, range) {
    // Call the constructor of the base class 'Car' with the first 3 parameters
    super(brand, motor, color);
    // Assign the value of the 'range' parameter to the '_range' property
    this._range = range;
  }

  // 'cloneCar' method to create a copy of the current instance
  cloneCar() {
    // Create a new instance using the constructor of the current class
    const clone = new (Object.getPrototypeOf(this.constructor))(
      this._brand, this._motor, this._color
    );
    // Assign the value of the '_range' property of the current instance to the cloned instance
    clone._range = this._range;
    // Return the cloned instance
    return clone;
  }
}
