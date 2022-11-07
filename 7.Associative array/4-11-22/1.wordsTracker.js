function tracker(array) {
    const trackinkWords = {};

    let words = array.shift()
        .split(' ');
    for (const word of words) {
        trackinkWords[word] = 0;
    }
    for (const word of array) {
        if (trackinkWords.hasOwnProperty(word)) {
            trackinkWords[word]++;
        }
    }
    let sorted = Object.entries(trackinkWords)
        .sort((kvpA, kvpB) => kvpB[1] - (kvpA[1]));
    let sortedObj = Object.fromEntries(sorted);

    for (const word in sortedObj) {
        console.log(`${word} - ${sortedObj[word]}`);
    }
}
tracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences',
    'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your',
    'task'
]
)