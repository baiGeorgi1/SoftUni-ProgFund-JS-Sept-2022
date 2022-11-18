function repeatingChars(input) {
    const text = input;
    let notRepeating = [];
    for (let index = 0; index < text.length; index++) {
        if (text[index] !== text[index - 1]) {
            notRepeating.push(text[index])
        }
    }
    console.log(notRepeating.join(''));
}
repeatingChars('aaaaabbbbbcdddeeeedssaa')