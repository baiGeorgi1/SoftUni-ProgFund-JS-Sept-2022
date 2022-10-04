function maxNumber(arr) {
    let length = arr.length;
    let newArr = [];
    for (let i = 0; i < length; i++) {
        let isBigger = true;
        let current = arr[i];
        for (let j = i + 1; j < length; j++) {
            if (arr[j] >= current) {
                isBigger = false;
                break;
            }
        } if (isBigger) { newArr.push(arr[i]); }
    }
    console.log(newArr.join(' '));
}
maxNumber([5,8])