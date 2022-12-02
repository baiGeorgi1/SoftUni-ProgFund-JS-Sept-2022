function pirates(input) {
    let info = input.slice();
    let cities = {};
    let townInfo = [];
    let line = info.shift();

    while (line !== 'Sail') {
        const information = line.split('||');
        let town = information[0];
        let population = Number(information[1]);
        let gold = Number(information[2]);

        let searchForTown = townInfo.find((x) => x.town === town);
        let index = townInfo.indexOf(searchForTown);
        if (searchForTown) {
            townInfo[index].population += population;
            townInfo[index].gold += gold;
        } else {
            cities = { town, population, gold };
            townInfo.push(cities)
        }
        line = info.shift();
    }
    line = info.shift();
    while (line !== 'End') {
        let [command, ...arguments] = line.split('=>');
        switch (command) {
            case 'Plunder':
                let town = arguments[0];
                let people = Number(arguments[1]);
                let gold = Number(arguments[2]);
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                let city = townInfo.find((x) => x.town === town);
                let index = townInfo.indexOf(city);
                if (city) {
                    townInfo[index].population -= people;
                    townInfo[index].gold -= gold;
                }
                if (townInfo[index].population <= 0 || townInfo[index].gold <= 0) {
                    console.log(`${town} has been wiped off the map!`);
                    townInfo.splice(index, 1);
                }
                break;
            case 'Prosper':
                let townName = arguments[0];
                let income = Number(arguments[1]);
                if (income < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                } else {
                    let findCity = townInfo.find((x) => x.town === townName);
                    let foundCityIndex = townInfo.indexOf(findCity);
                    townInfo[foundCityIndex].gold += income;
                    console.log(`${income} gold added to the city treasury. ${townName} now has ${townInfo[foundCityIndex].gold} gold.`);
                }
                break;
        }


        line = info.shift();
    }
    if (townInfo.length === 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        console.log(`Ahoy, Captain! There are ${townInfo.length} wealthy settlements to go to:`);
        for (const cityObj of townInfo) {
            console.log(`${cityObj.town} -> Population: ${cityObj.population} citizens, Gold: ${cityObj.gold} kg`);
        }
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
