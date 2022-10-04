function magicSum(array, sum) {
    let length = array.length;
    let magicSum = sum;

    for (let firstNum = 0; firstNum < length; firstNum++) {
        let firstNumber = array[firstNum];
        for (let secNum = firstNum + 1; secNum < length; secNum++) {
            let secondNumber = array[secNum];
            if ((firstNumber + secondNumber) === magicSum) {
                console.log(`${firstNumber} ${secondNumber}`);
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8],
    27

)