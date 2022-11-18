function revalWord(words, text) {
    let wordArr = words.split(', ');
    for (const word of wordArr) {
        const match = `${'*'.repeat(word.length)}`;
        text = text.replace(match, word);
    }
    // wordArr.forEach(word => {
    //     const match = `${'*'.repeat(word.length)}`;
    //     text = text.replace(match, word)
    // });
    console.log(text);
}
revalWord('great, learning',
    'softuni is ***** place for ******** new programming languages'
)