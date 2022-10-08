function maxElements(array) {
    let length = array.length;
    let longestEqual = 1;
    let count = 1;
    let result = '';

    for (let i = 0; i < length; i++) {
        let curentResult = array[i] + ' ';
        for (let j = i + 1; j < length; j++) {           
            if (array[j] === array[i]) {
                count++;
                curentResult += array[j] +' ';
            } else {
                count = 1;
                break;
            }
            if (count > longestEqual) {
                longestEqual = count;
                result = curentResult ;
            }
        }
    }console.log(result);
}
maxElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])