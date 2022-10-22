function sorting(array) {
    let sortArr = array.sort((a, b) => a - b);
    let mixedArray = [];

    for (let index of sortArr) {
        let firstDigit = sortArr.shift();
        let lastDigit = sortArr.pop();
        mixedArray.push(lastDigit, firstDigit)
    }
    console.log((mixedArray.concat(sortArr.reverse())).join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])