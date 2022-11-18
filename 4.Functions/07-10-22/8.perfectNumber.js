function perfectNum(integer) {
    let half = integer / 2;
    let allGoodNum = '';
    let sum = 0;

    for (let digit = 1; digit <= half; digit++) {
        if (integer % digit === 0) {
            sum += digit;
        }
    }
    if (sum === integer) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}
perfectNum(1236498)
perfectNum(28)