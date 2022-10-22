function searchNumber(arr1, arr2) {
    let numberToCut = arr2[0];
    let numberToDelete = arr2[1];
    let searchingNumber = arr2[2];

    let cutedArr = arr1.splice(0, numberToCut)
    cutedArr.splice(0, numberToDelete);

    let count = 0;
    for (const index of cutedArr) {
        if (index === searchingNumber) {
            count++;
        }
    } console.log(`Number ${searchingNumber} occurs ${count} times.`);
}
searchNumber([5, 2, 3, 3, 1, 6], [5, 2, 3])