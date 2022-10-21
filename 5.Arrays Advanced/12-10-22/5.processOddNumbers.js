function oddNumbers(array) {
    let length = array.length;
    let oddArr = [];
    for (let i = 0; i < length; i++) {
        if (i % 2 !== 0) {
            let elementOfIndex = array[i] * 2
            oddArr.push(elementOfIndex)
        }
    }
    console.log(oddArr.reverse().join(' '));
}
oddNumbers([3,0,10,4,7,3])