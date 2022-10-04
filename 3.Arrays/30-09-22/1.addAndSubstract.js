function addOrSubstract(arr) {
    let newArr = [];
    let oldArrSum = 0;
    let newArrSum = 0;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
       oldArrSum += arr[i];
        if (arr[i] % 2 === 0) {
            let evenDigit = arr[i]+i;
            newArr.push (evenDigit);
            newArrSum += evenDigit;
        }else{
            let oddDigit = arr[i]-i;
            newArr.push (oddDigit);
            newArrSum +=oddDigit;
        }
    }
    console.log(newArr);
    console.log(oldArrSum);
    console.log(newArrSum);
}
addOrSubstract([5, 15, 23, 56, 35])