function splitter(input) {
    let splited = [];
    let word = input[0];
    for (let i = 1; i < input.length; i++) {
        if (!(input[i].charCodeAt() >= 97 && input[i].charCodeAt() <= 122)) {
            splited.push(word);
            word = input[i];
        } else {
            word += input[i];
        }
    }
    splited.push(word);
    console.log(splited.join(', '));
}
splitter('SplitMeIfYouI1CanHaHaYouCantOrYouCan')