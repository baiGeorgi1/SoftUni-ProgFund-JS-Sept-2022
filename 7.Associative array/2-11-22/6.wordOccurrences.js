function wordCount(arr) {
    const wordCounter = {};

    for (const word of arr) {
        if (!wordCounter.hasOwnProperty(word)) {
            wordCounter[word] = 1;
        } else {
            wordCounter[word]++;
        }
    }
    let sortedWords = Object.entries(wordCounter)
        .sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);
    let sortedWordCounter = Object.fromEntries(sortedWords);

    for (const word in sortedWordCounter) {
        console.log(`${word} -> ${sortedWordCounter[word]} times`);
    }
}
wordCount(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])