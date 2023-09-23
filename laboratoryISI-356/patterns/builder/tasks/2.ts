/*class Vehicle {
    type: string;
    engine: string;
    wheels: number;
    color: string;
    brand: string;
    fuel: string;

    constructor(type: string, engine: string, wheels: number, color: string, brand: string, fuel: string) {
        this.type = type;
        this.engine = engine;
        this.wheels = wheels;
        this.color = color;
        this.brand = brand;
        this.fuel = fuel;
    }
}

const myCar = new Vehicle('car', 'V8', 4, 'red', 'Ford', 'gasoline');

*/

class VehicleBuilder {
    private type: string = '';
    private engine: string = '';
    private wheels: number = 0;
    private color: string = '';
    private brand: string = '';
    private fuel: string = '';

    constructor() {}

    setType(type: string): VehicleBuilder {
        this.type = type;
        return this;
    }

    setEngine(engine: string): VehicleBuilder {
        this.engine = engine;
        return this;
    }

    setWheels(wheels: number): VehicleBuilder {
        this.wheels = wheels;
        return this;
    }

    setColor(color: string): VehicleBuilder {
        this.color = color;
        return this;
    }

    setBrand(brand: string): VehicleBuilder {
        this.brand = brand;
        return this;
    }

    setFuel(fuel: string): VehicleBuilder {
        this.fuel = fuel;
        return this;
    }

    build(): Vehicle {
        return new Vehicle(this.type, this.engine, this.wheels, this.color, this.brand, this.fuel);
    }
}

class Vehicle {
    type: string;
    engine: string;
    wheels: number;
    color: string;
    brand: string;
    fuel: string;

    constructor(type: string, engine: string, wheels: number, color: string, brand: string, fuel: string) {
        this.type = type;
        this.engine = engine;
        this.wheels = wheels;
        this.color = color;
        this.brand = brand;
        this.fuel = fuel;
    }
}

// Uso del builder para crear un vehículo
const myCar = new VehicleBuilder()
    .setType('car')
    .setEngine('V8')
    .setWheels(4)
    .setColor('red')
    .setBrand('Ford')
    .setFuel('gasoline')
    .build();
