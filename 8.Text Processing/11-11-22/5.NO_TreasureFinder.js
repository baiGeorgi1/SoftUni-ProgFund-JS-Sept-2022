function tresureFinder(array) {
    let copyArr = array.slice();
    const key = copyArr.shift().split(' ');
    let model = key.slice();
    let line = copyArr.shift();
    const foundedWords = [];
    while (line !== 'find') {
        model = key.slice();
        line = line.split('');
        let found = [];
        for (const letter of line) {
            if (model.length < 1) {
                model = key.slice();
            }
            let elemOfModel = Number(model.shift());
            let numOfAscii = letter.charCodeAt();
            let result = numOfAscii - elemOfModel;
            if (result < 1) {
                result = elemOfModel;
            }
            let findLetter = String.fromCharCode(result);
            found.push(findLetter);
        }
        let words = found.join('');
        foundedWords.push(words)
        line = copyArr.shift();
    }
    const pattern = /&(?<treasure>[\w]+)&\s*\w*\s*<(?<coordinates>\w+)>/g;
    for (const line of foundedWords) {
        let type = line.matchAll(pattern);
        if (type !== null) {
            for (const index of type) {
                let treasure = index.groups.treasure;
                let coordinates = index.groups.coordinates;
                console.log(`Found ${treasure} at ${coordinates}`);
            }
        }
    }
}
tresureFinder(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]

)