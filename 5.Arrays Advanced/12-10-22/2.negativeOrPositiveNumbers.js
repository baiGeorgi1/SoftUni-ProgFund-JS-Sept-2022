function positiveOrNot(arr) {
    let newArr = [];
    for (const index of arr) {
        if (index < 0) {
            newArr.unshift(index);
        } else {
            newArr.push(index);
        }
    }
    console.log(newArr.join('\n'));
}
positiveOrNot(['3', '-2', '0', '-1'])