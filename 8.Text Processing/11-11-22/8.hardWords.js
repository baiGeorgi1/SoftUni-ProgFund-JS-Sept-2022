function hardWords(array) {
    let letter = array.shift();
    let words = array[0];
    const pattern = /(?<missing>_{1,})/g;
    let missingWords = letter.match(pattern);
    const foundWord = [];
    for (let empty of missingWords) {
        let length = empty.length;
        for (let index = 0; index < words.length; index++) {
            let wordLength = words[index].length;
            if (length === wordLength) {
                empty = words[index]
                foundWord.push(words[index]);
            }
        }
    }
    for (const word of foundWord) {
        const noWord = `${'_'.repeat(word.length)}`;
        letter = letter.replace(noWord, word)
    }
    console.log(letter);
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)