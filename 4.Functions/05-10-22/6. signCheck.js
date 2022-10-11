function signCheck(firstNumber, secondNumber, thirdNumber) {
    let isPositive = true;
    let thirdNum = Number(thirdNumber);
    let result = firstNumber * secondNumber;
    if ((result == 0) || (thirdNum == 0)) {
        return;
    }
    function multyplyFirstAndSecond(digit) {
        if (digit < 0) {
            isPositive = false;
        } else if (digit > 0) {
            isPositive = true;
        }

        if (isPositive && thirdNum > 0) {
            return console.log('Positive');
        } else {
            return console.log('Negative');
        }
    }
    multyplyFirstAndSecond(result)
}
signCheck(1, -2, 1)