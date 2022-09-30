function reverseInPlace(array) {
    let length = array.length;
    let result = '';
    for (let i = 0; i < length; i++) {
        result += (array[array.length - 1 - i]) + ' ';
    }
    console.log(result);
}
reverseInPlace(['33', '123', '0', 'dd'])