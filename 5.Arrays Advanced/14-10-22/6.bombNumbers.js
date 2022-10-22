function bombNumbers(arr1, arr2) {
    let bomb = arr2[0];
    let bombPower = arr2[1];
    let sum = 0;

    for (i = 0; i < arr1.length; i++) {
        let index = Number(arr1.indexOf(bomb));
        if (i === index) {
            arr1.splice(Math.max((index - bombPower), 0), ((bombPower * 2) + 1));
            i = -1;
        }
    }
    for (const index of arr1) {
        sum += index;
    }
    console.log(sum);
}
bombNumbers([4, 2, 2, 2, 4, 2, 2, 3, 2, 4],
    [4, 2]


)