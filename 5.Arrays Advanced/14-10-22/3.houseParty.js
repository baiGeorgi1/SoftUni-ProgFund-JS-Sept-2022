function party(listOfGuests) {
    let guests = [];

    for (let elements of listOfGuests) {
        let listLine = elements.split(' ');
        let name = listLine[0];
        if (listLine.length < 4) {
            if (!guests.includes(name)) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (guests.includes(name)) {
                let repeatedName = guests.indexOf(name);
                guests.splice(repeatedName, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guests.join('\n'));
}
party(['Tom is going!',

    'George is going!',
    'John is not going!',
    'George is not going!']


)