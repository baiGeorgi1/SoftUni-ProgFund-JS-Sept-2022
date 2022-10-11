function sumOddAndEven(singleNum) {
    let numberToString = singleNum.toString();
    let mainArrayNum = numberToString.split('');
    let mainArrayNumLength = mainArrayNum.length;
    let oddSum = 0;
    let evenSum = 0

    for (let index = 0; index < mainArrayNumLength; index++) {
        if (mainArrayNum[index] % 2 === 0) {
            evenSum += Number(mainArrayNum[index]);
        } else {
            oddSum += Number(mainArrayNum[index]);
        }
    } console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
sumOddAndEven(1000435)