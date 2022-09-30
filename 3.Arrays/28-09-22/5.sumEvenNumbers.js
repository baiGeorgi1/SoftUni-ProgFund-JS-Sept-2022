function sumEvenNumbers(array) {
    let sum = 0;
    for (let evenDigit of array) {
        if (evenDigit % 2 === 0) {
            sum += Number(evenDigit);
        }
    }
    console.log(sum);
}
// ALTERNATIVE
//    let sum = 0;
//    for (let i = 0; i < array.length; i++) {
//        if (Number(array[i]) % 2 === 0) {
//            sum += Number(array[i]);
//        }
//    } console.log(sum);

sumEvenNumbers(['2', '4', '6', '8', '10'])