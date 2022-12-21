function binaryToDec(number) {
    let binary = number.toString().split('');
    let sum = 0;
    let pow = 0
    for (let i = binary.length - 1; i >= 0; i--) {
        let current = (Math.pow(2, pow)) * binary[i]
        sum += current
        pow++;
    }
    console.log(sum);
}
binaryToDec(00001001)
