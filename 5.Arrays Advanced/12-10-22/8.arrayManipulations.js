function manipulArr(massArr) {
    let manipulatedArr = massArr
        .shift()
        .split(" ")
        .map(Number);
    let massCopy = manipulatedArr
        .slice()
        .map(Number);

    for (let index = 0; index < massArr.length; index++) {
        let string = massArr[index];
        let tempArr = string.split(" ");
        let command = tempArr[0];
        let firstNum = Number(tempArr[1]);
        let secondNum = Number(tempArr[2]);

        switch (command) {
            case 'Add':
                massCopy.push(firstNum);
                break;
            case 'Remove':
                massCopy.splice(firstNum, 1);
                break;
            case 'RemoveAt':
                massCopy.splice(firstNum, 1);
                break;
            case 'Insert':
                massCopy.splice(secondNum, 0, firstNum);
                break;
        }
    } console.log(massCopy.join(' '));
}
manipulArr(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)