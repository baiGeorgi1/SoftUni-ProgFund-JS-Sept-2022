function oddOccurences(string) {
    const array = string.toLowerCase().split(' ');
    const objCounter = {};

    for (const word of array) {
        if (!objCounter.hasOwnProperty(word)) {
            objCounter[word] = 0;
        }
        objCounter[word]++;
    }
    let sortedArray = [];

    for (const word in objCounter) {
        sortedArray = Object.entries(objCounter).sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);
    }
    const oddArr = [];
    
    for (const line of sortedArray) {
        if (line[1] % 2 === 1) {
            oddArr.push(line[0])
        }
    }
    console.log(oddArr.join(' '));
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')