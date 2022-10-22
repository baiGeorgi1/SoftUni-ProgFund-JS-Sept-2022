function sortArrByTwoCriteria(stringArr) {
    let sortedArr = stringArr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    });
    sortedArr.forEach(element => {
        console.log(element);
    });
}
sortArrByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])