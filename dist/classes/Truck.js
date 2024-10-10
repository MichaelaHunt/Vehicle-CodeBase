// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
    // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.towingCapacity = towingCapacity;
        if (wheels.length != 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
    }
    // TODO: Implement the tow method from the AbleToTow interface
    tow(vehicle) {
        // TODO: Get the make an model of the vehicle if it exists
        // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
        // TODO: If it is, log that the vehicle is being towed
        // TODO: If it is not, log that the vehicle is too heavy to be towed
        // if (vehicle.weight <= this.towingCapacity) {
        //   console.log("The vehicle is being towed.");
        // } else {
        //   console.log("The vehicle is to heavy to be towed.");
        // }
        //so why do we need the make and model? 
        //motorbike doesn't have weight property... can it not be towed? 
    }
    // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    printDetails() {
        super.printDetails();
        console.log(`Truck vin: ${this.vin}`);
        console.log(`Truck make: ${this.make}`);
        console.log(`Truck model: ${this.model}`);
        console.log(`Truck year: ${this.year}`);
        console.log(`Truck weight: ${this.weight} lbs`);
        console.log(`Truck top speed: ${this.topSpeed} mph`);
        console.log(`Truck color: ${this.color}`);
        console.log(`Truck towing capacity: ${this.towingCapacity} lbs`);
        console.log(`Truck wheels: ${this.wheels}`); //TODO: check that this works
    }
}
// Export the Truck class as the default export
export default Truck;
