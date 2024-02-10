import Car from "./10-car.js";

// Defines a subclass TestCar that extends the Car class.
class TestCar extends Car {}

// Creates an instance of TestCar with the specified values.
const tc1 = new TestCar("Nissan", "Turbo", "Pink");

// Clone the TestCar instance using the cloneCar method.
const tc2 = tc1.cloneCar();

// Print the first instance of TestCar and check if it's an instance of TestCar.
console.log(tc1);
console.log(tc1 instanceof TestCar);

// Print the second instance of TestCar and check if it's an instance of TestCar.
console.log(tc2);
console.log(tc2 instanceof TestCar);

// Check if the two instances are equal (same object in memory).
console.log(tc1 === tc2);
