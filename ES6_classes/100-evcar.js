import Car from './10-car';

// Defines a subclass EVCar that extends the Car class.
class EVCar extends Car {
  // Constructor to initialize brand, motor, color, and range properties.
  constructor(brand, motor, color, range) {
    // Calls the superclass constructor with brand, motor, and color.
    super(brand, motor, color);
    // Initializes the range property specific to EVCar.
    this._range = range;
  }

  // Method to create a clone of EVCar instance.
  cloneCar() {
    // Destructure properties for cloning.
    const { _brand, _motor, _color } = this;
    // Returns a new instance of Car with same properties as EVCar.
    return new Car(_brand, _motor, _color);
  }
}

// Exports the EVCar class for use in other modules.
export default EVCar;
