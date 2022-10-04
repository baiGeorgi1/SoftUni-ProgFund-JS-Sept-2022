function commonElements(arr1, arr2) {
    let length = arr1.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            let result = '';
            if (arr1[i] === arr2[j]) {
                result += arr2[j]
                console.log(result);
            }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])