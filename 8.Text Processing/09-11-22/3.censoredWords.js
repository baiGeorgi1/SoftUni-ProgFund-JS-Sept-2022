function censored(text, word) {
    let censoredWord = '*';
    while (text.includes(word)) {
        const match = censoredWord.repeat(word.length);
        text = text.replace(word, match);
    }
    console.log(text);
}
censored('A small sentence with some words', 'small')