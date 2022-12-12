function serializeString(array) {
    const arrayStr = array[0].split('');
    const letters = {};
    for (let index = 0; index < arrayStr.length; index++) {
        if (!letters.hasOwnProperty(arrayStr[index])) {
            letters[arrayStr[index]] = [index];
        } else {
            letters[arrayStr[index]].push(index);
        }
    }
    for (const letter in letters) {
        console.log(`${letter}:${letters[letter].join('/')}`);
    }
}

serializeString(["avjavamsdmcalsdm"])