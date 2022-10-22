function train(array) {
    let wagon = array
        .shift()
        .split(' ')
        .map(Number);
    let maxCapacity = Number(array.shift());    

    for (let commandLine = 0; commandLine < array.length; commandLine++) {
        let commandArr = array[commandLine].split(' ');

        function checking(arr) {
            let length = wagon.length;
            for (let index = 0; index < length; index++) {
                if (arr[0] === 'Add') {
                    wagon.push(Number(arr[1]));
                    break;
                }
                if (arr[0] !== 'Add') {
                    let passengers = Number(arr);
                    for (let i = 0; i < length; i++) {
                        if (passengers + wagon[i] <= maxCapacity) {
                            wagon[i] += passengers; return;
                        }
                    }
                }
            }
        } checking(commandArr)
    }
    console.log(wagon.join(' '));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']
)