function race(input) {
    const racers = input
        .shift()
        .split(', ');
    const players = {};
    for (const name of racers) {
        players[name] = 0;
    }

    const playerNamePattern = /(?<name>[A-Za-z])/g;
    const playerDistancePattern = /(?<distance>\d)/g;
    let line = input.shift();

    while (line !== 'end of race') {
        let name = line.match(playerNamePattern).join('');
        let distance = line.match(playerDistancePattern);
        let finalDistance = 0;

        if (players.hasOwnProperty(name)) {
            for (const elements of distance) {
                finalDistance += Number(elements);
            }
            players[name] += finalDistance;
        }
        line = input.shift();
    }
    let sorted = Object.entries(players).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']

)