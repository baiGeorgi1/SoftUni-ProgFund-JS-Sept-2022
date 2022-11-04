class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.engine = Number(parts.engine);
        this.power = Number(parts.power);
        this.quality = this.engine * this.power;
        this.fuel = fuel;
    }
    drive(input) {
        this.fuel -= input;
        this.quality;
    }
}
let Vehicle = result;

let parts = {engine: 9, power: 500};
let vehicle = new Vehicle('l', 'k', parts, 840);
vehicle.drive(20);

expect(typeof(vehicle.fuel)).to.equal('number');
