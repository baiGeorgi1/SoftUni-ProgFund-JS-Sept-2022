function ASCIISimulator(array) {
    let firstSymbol = array[0].charCodeAt();
    let secondSymbol = array[1].charCodeAt();
    let smallInteger = Math.min(firstSymbol, secondSymbol);
    let biggerInteger = Math.max(firstSymbol, secondSymbol);
    let line = array[2].split('');
    let sum = 0;
    for (const token of line) {
        let digit = token.charCodeAt();
        if (digit > smallInteger && digit < biggerInteger) {
            sum += digit;
        }
    }
    console.log(sum);
}
ASCIISimulator(
    ['?',
        'E',
        '@ABCEF']



)