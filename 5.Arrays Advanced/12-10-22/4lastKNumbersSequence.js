function lastKSum(n, k) {
    let length = n;
    let kElementsSum = k;
    let arr = [1];

    for (let i = 1; i < length; i++) {
        let index = Math.max(arr.length - kElementsSum, 0);
        let tempArr = arr.slice(index);
        let sum = 0;
        
        for (let k = 0; k < tempArr.length; k++) {
            sum += tempArr[k];
        }
        arr.push(sum);
    }
    console.log(arr.join(' '));
}
lastKSum(6, 3)