function cutAndReverse(text) {
    const length = text.length / 2;
    let firstSentence = text
        .substring(0, length)
        .split('')
        .reverse();
    let secondSentence = text
        .substring(length)
        .split('')
        .reverse();

    console.log(firstSentence.join(''));
    console.log(secondSentence.join(''));
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')