function letterMath(line) {
    const alphabet = 'ABCDEFGHIJKLNMOPQRSTYUVWXWZ';
    const bigLetters = alphabet
    const smallLetters = alphabet
        .toLowerCase()
        .split('')
        .sort();
    const upperCasePoss = {};
    const lowerCasePoss = {};
    for (const letter of smallLetters) {
        let smallPoss = letter.charCodeAt() - 96;
        lowerCasePoss[letter] = smallPoss;
    }
    for (const letter of bigLetters) {
        let uppPoss = letter.charCodeAt() - 64;
        upperCasePoss[letter] = uppPoss;
    }
    const pattern = /(?<first>[A-Za-z]{1})(?<number>[\d]+)(?<second>[A-Za-z]{1})/g;
    let items = line.split(' ');
    let sum = 0;
    const results = [];
    for (const item of items) {
        let token = item.matchAll(pattern);
        if (token !== null) {
            for (const data of token) {
                let result = 0;
                let firstLetter = data.groups.first;
                let digit = Number(data.groups.number);
                let secondLetter = data.groups.second;
                if (firstLetter.charCodeAt() >= 65 && firstLetter.charCodeAt() <= 90) {
                    if (upperCasePoss.hasOwnProperty(firstLetter)) {
                        result = digit / upperCasePoss[firstLetter];
                    }
                } else if (firstLetter.charCodeAt() >= 97 && firstLetter.charCodeAt() <= 122) {
                    if (lowerCasePoss.hasOwnProperty(firstLetter)) {
                        result = digit * lowerCasePoss[firstLetter];
                    }
                }
                if (secondLetter.charCodeAt() >= 65 && secondLetter.charCodeAt() <= 90) {
                    if (upperCasePoss.hasOwnProperty(secondLetter)) {
                        result -=  upperCasePoss[secondLetter];
                    }
                } else if (secondLetter.charCodeAt() >= 97 && secondLetter.charCodeAt() <= 122) {
                    if (lowerCasePoss.hasOwnProperty(secondLetter)) {
                        result += lowerCasePoss[secondLetter];
                    }
                }
                results.push(result);
            }
        }
    }
    for (const total of results) {
        sum+=total;       
    }
   console.log(sum.toFixed(2));
}
letterMath(
    'P34562Z q2576f   H456z'
)