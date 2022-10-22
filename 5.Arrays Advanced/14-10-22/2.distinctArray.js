function distinctArr(arr) {
    let length = arr.length;
    let newArr = [];

    for (let i = 0; i < length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '));
}
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2])