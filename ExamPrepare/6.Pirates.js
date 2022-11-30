function pirates(input) {
    let info = input.slice();
    let townInfo = [];
    let line = info.shift();

    while (line !== 'Sail') {
        const cities = line.split('||');
        townInfo.push(cities);
        line = info.shift();
    }
    line = info.shift();
    while (line !== 'End'){

    }


}
pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])

