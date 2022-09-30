function amazingNumber(number) {
    let num = number.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    let result = sum.toString().includes('9');
    console.log(result ? `${number} Amazing? True` : `${number} Amazing? False`);
}
amazingNumber(7856)

