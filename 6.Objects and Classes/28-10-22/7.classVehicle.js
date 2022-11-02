class Vehicle {
    constructor(type,model,parts,fuel){
        this.type = type;
        this.model = model;
        this.parts = parts;
            this.engine = parts.engine;
            this.power = parts.power;
            this.quality = this.engine*this.power;
        this.fuel = fuel;


    }
    drive(input){
        this.fuel -=input;
        this.parts.quality;
    }
}




let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
