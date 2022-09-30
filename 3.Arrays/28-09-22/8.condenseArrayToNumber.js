function condenseArrayToNumber(arr) {
    let newArr = arr;
    while (newArr.length > 1) {
        let condensed = []
        for (let i = 0; i < newArr.length - 1; i++) {
            let sum = 0;
            sum += Number(newArr[i]) + Number(newArr[i + 1]);
            condensed.push(sum);
        }
        newArr = condensed;
    } console.log(Number(newArr));
}
condenseArrayToNumber([5, 0, 4, 1, 2])