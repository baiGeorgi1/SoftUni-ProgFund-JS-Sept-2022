function subtraction(array) {
    let evenSum = 0;
    let oddSum = 0;
    for (let digit of array) {
        if (digit % 2 === 0) {
            evenSum += Number(digit);
        } else {
            oddSum += Number(digit);
        }
    }
    let totalSum = evenSum - oddSum;
    console.log(totalSum);
}
subtraction([3, 5, 7, 9])