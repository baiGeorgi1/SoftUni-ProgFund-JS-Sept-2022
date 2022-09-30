function sumDigits(number) {
    let sum = number.toString();
    let sumDigit = 0;
    for (let index = 0; index < sum.length; index++) {
        sumDigit += Number(sum[index]);
    } console.log(sumDigit);
}
sumDigits(543)