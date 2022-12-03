function needForSpeed(input) {
    let array = input.slice()
    const myCars = Number(array.shift());
    let car = {};
    let carsInfo = [];
    for (let i = 0; i < myCars; i++) {
        let line = array[0].split('|');
        let model = line[0];
        let miles = Number(line[1]);
        let fuel = Number(line[2]);
        car = { model, miles, fuel };
        carsInfo.push(car);
        array.shift()
    }
    let nextLine = array.shift();
    while (nextLine !== 'Stop') {
        let [command, ...others] = nextLine.split(' : ');
        switch (command) {
            case 'Drive':
                let drivenCar = others[0];
                let drivedDistance = Number(others[1]);
                let consumedFuel = Number(others[2]);
                let targetCar = carsInfo.find((car) => car.model === drivenCar);
                let index = carsInfo.indexOf(targetCar);
                if (targetCar) {
                    if (carsInfo[index].fuel < consumedFuel) {
                        console.log(`Not enough fuel to make that ride`);
                    } else {
                        carsInfo[index].miles += drivedDistance;
                        carsInfo[index].fuel -= consumedFuel;
                        console.log(`${drivenCar} driven for ${drivedDistance} kilometers. ${consumedFuel} liters of fuel consumed.`);
                    }
                    if (carsInfo[index].miles >= 100000) {
                        console.log(`Time to sell the ${drivenCar}!`);
                        carsInfo.splice(index, 1);
                    }
                }


                break;
            case 'Refuel': {
                let carToRefuel = others[0];
                let refil = Number(others[1]);
                let carRefuel = carsInfo.find((c) => c.model === carToRefuel);
                let index = carsInfo.indexOf(carRefuel);
                let tank = carsInfo[index].fuel + refil;
                if (tank > 75) {
                    let total = 75 - carsInfo[index].fuel;
                    console.log(`${carToRefuel} refueled with ${total} liters`);
                    carsInfo[index].fuel = 75;
                } else {
                    carsInfo[index].fuel = tank
                    console.log(`${carToRefuel} refueled with ${refil} liters`);
                }
            }
                break;
            case 'Revert': {
                let car = others[0];
                let revKm = Number(others[1]);
                let carRev = carsInfo.find((c) => c.model === car);
                let index = carsInfo.indexOf(carRev);
                carsInfo[index].miles -= revKm;
                if (carsInfo[index].miles < 10000) {
                    carsInfo[index].miles = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${revKm} kilometers`);
                }
            }
                break;
        }
        nextLine = array.shift();
    }
    carsInfo.forEach(car => {
        console.log(`${car.model} -> Mileage: ${car.miles} kms, Fuel in the tank: ${car.fuel} lt.`);
    });
}
needForSpeed(
    [
        '3',
        'Audi A6|38000|62',
        'Mercedes CLS|11000|35',
        'Volkswagen Passat CC|45678|5',
        'Drive : Audi A6 : 543 : 47',
        'Drive : Mercedes CLS : 94 : 11',
        'Drive : Volkswagen Passat CC : 69 : 8',
        'Refuel : Audi A6 : 50',
        'Revert : Mercedes CLS : 500',
        'Revert : Audi A6 : 30000',
        'Stop'
    ]


)