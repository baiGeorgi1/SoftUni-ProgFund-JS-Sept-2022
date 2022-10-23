function loveCoffee(arr) {
    let coffeeList = arr
        .shift()
        .split(' ');
    let commandCount = Number(arr.shift());
    let commands = arr.shift()
    for (let i = 1; i <= commandCount; i++) {
        let toDo = commands.split(' ')
        switch (toDo[0]) {
            case 'Include':
                coffeeList.push(toDo[1]);
                commands = arr.shift()
                break;
            case 'Remove':
                if (Number(toDo[2]) > coffeeList.length) {
                    commands = arr.shift()
                    break;
                }
                if (toDo[1] === 'first') {
                    coffeeList.splice(0, Number(toDo[2]));
                } else if (toDo[1] === 'last') {
                    coffeeList.splice((coffeeList.length - Number(toDo[2])), Number(toDo[2]));
                }
                commands = arr.shift();
                break;
            case 'Prefer':
                let firstCoffee = coffeeList[Number(toDo[1])];
                let secondCoffee = coffeeList[Number(toDo[2])];
                if (coffeeList.includes(firstCoffee) && coffeeList.includes(secondCoffee)) {
                    let swapPosition = coffeeList.splice(Number(toDo[1]), 1, secondCoffee);
                    coffeeList.splice((Number(toDo[2])), 1, firstCoffee);
                }
                commands = arr.shift()
                break;
            case 'Reverse':
                let reversedList = coffeeList.reverse().join(' ')
                break;
        }
    } console.log(`Coffees:\n${coffeeList.join(' ')}`);
}

loveCoffee((["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"])






)