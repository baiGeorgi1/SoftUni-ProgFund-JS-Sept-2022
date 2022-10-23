function phoneShop(arr) {
    let phoneList = arr
        .shift()
        .split(', ');
    let command = arr.shift();
    while (command !== 'End') {
        let action = command.split(' - ');
        switch (action[0]) {
            case 'Add':
                if (!phoneList.includes(action[1])) {
                    phoneList.push(action[1]);
                }
                break;
            case 'Remove':
                if (phoneList.includes(action[1])) {
                    let removed = phoneList.indexOf(action[1]);
                    phoneList.splice(removed, 1);
                }
                break;
            case 'Bonus phone':
                let change = action[1].split(':')
                let oldPhone = change[0];
                let newPhone = change[1];
                if (phoneList.includes(oldPhone)) {
                    let phoneIndex = phoneList.indexOf(oldPhone) + 1;
                    phoneList.splice(phoneIndex, 0, newPhone)
                }
                break;
            case 'Last':
                if (phoneList.includes(action[1])) {
                    let item = phoneList.indexOf(action[1]);
                    phoneList.splice(item, 1);
                    phoneList.push(action[1]);
                }
                break;
        }
        command = arr.shift()
    } console.log(phoneList.join(', '));
}
phoneShop((["SamsungA50, MotorolaG5, HuaweiP10", "Last - SamsungA50", "Add - MotorolaG5", "End"]))