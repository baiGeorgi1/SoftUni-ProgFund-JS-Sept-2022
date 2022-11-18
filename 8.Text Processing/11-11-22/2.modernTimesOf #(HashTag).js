function modernTimes(text) {
    const textArray = text.split(' ');
    for (const word of textArray) {
        if (word.length > 1 && word.startsWith('#')) {
            let modifiedWord = word
                .substring(1, word.length)
                .toLowerCase();
            if (modifiedWord.charCodeAt() >= 97 && modifiedWord.charCodeAt() <= 122) {
                console.log(word.substring(1, word.length));
            }
        }
    }
}
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')