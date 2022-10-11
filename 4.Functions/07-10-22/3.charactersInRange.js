function charInRange(char1, char2) {
    let asciiChar1Code = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let asciiChar2Code = Math.max(char1.charCodeAt(), char2.charCodeAt());
    let result = '';

    for (let i = asciiChar1Code + 1; i < asciiChar2Code; i++) {
        result += String.fromCharCode(i) + ' ';
    }
    console.log(result);
}
charInRange('a', 'd')