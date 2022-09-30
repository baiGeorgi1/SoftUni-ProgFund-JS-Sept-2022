function reverse(num, array) {
    let mainArray = array;
    let element = num - 1;
    let newArray = [];
    let result = '';
    for (let index = element; index >= 0; index--) {
        newArray.push(mainArray[index]);
        result += newArray[element - index] + ' ';
    }
    console.log(result);
}

reverse(5, [10, 20, 30, 40, 50])