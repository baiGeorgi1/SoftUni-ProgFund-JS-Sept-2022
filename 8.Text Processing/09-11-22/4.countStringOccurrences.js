function countString(text, searching) {
    let counter = 0;
    let wordArray = text.split(' ');
    wordArray.forEach(word => {
        if (word === searching) {
            counter += 1;
        }
    });
    console.log(counter);
}
countString('This is a word and it also is a sentence',
    'is'
)