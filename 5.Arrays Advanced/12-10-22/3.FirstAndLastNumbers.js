function firstAndLastKNumbers(arr) {
    let cuttingNumber = arr.shift();
    let firstArr = [];
    let secondArr = [];
    let length = arr.length;

    for (let i = 0; i < cuttingNumber; i++) {
        firstArr.push(arr[i]);
    }

    for (let i = length - cuttingNumber; i < length; i++) {
        secondArr.push(arr[i]);
    }
    console.log(firstArr.join(' '));
    console.log(secondArr.join(' '));
}
firstAndLastKNumbers([3, 6, 7, 8, 9])
