function listOfProducts(arr) {
    let sortedArr = arr.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < sortedArr.length; i++) {
        console.log(`${i + 1}.${sortedArr[i]}`);
    }
}
listOfProducts(['Watermelon', 'Banana', 'Apples'])