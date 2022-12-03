function mirrorW(input) {
    const pattern = /(?<border>@|#)(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;
    const mirrorWord = [];
    let allMatches = 0;
    let allWords = input.join('').matchAll(pattern);
    for (const word of allWords) {
        allMatches++;
        let firstWord = word.groups.wordOne;
        let secondWord = word.groups.wordTwo;
        let reversedTwo = secondWord
            .split('')
            .reverse()
            .join('')
        if (firstWord === reversedTwo) {
            mirrorWord.push(`${firstWord} <=> ${secondWord}`)
        }
    }
    if (allMatches === 0) {
        console.log('No word pairs found!');
        console.log('No mirror words!');
    } else {
        console.log(`${allMatches} word pairs found!`);
        if (mirrorWord.length === 0) {
            console.log('No mirror words!');
        } else {
            console.log('The mirror words are:');
            console.log(mirrorWord.join(', '));
        }
    }
}
mirrorW([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
)