function smallestTwo(arr) {
    let sortedArr = arr
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ')
    console.log(sortedArr);
}
smallestTwo([30, 15, 50, 5])