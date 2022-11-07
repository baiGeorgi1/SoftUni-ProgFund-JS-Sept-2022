function party(listArr) {
    const vipList = [];
    const regularList = [];
    let command = listArr.shift();
    while (command !== 'PARTY') {
        const firstLetter = command[0];
        if (isNaN(firstLetter)) {
            regularList.push(command);
            command = listArr.shift();
        } else {
            vipList.push(command);
            command = listArr.shift();
        }
        if (command === 'PARTY') {
            break;
        }
    }
    let guestList = vipList.concat(regularList)
    let counter = 0;
    for (const guest of listArr) {
        if (guestList.includes(guest)) {
            let commingGuest = guestList.indexOf(guest);
            guestList.splice(commingGuest, 1);
        }
    }
    for (const guest of guestList) {
        counter++;
    }
    console.log(counter);
    console.log(guestList.join(`\n`));
}
party(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]

)