function enigma(inputArr) {

    const messages = Number(inputArr.shift())
    const keyPattern = /[STARstar]/g
    for (const text of inputArr) {
        const translated = [];
        const key = text.match(keyPattern).length;
        let length = text.length
        for (let index = 0; index < length; index++) {
            let decodedSymbol = text.charCodeAt(index) - key;
            let symbol = String.fromCharCode(decodedSymbol)
            translated.push(symbol);
        }
        console.log(translated.join(''));
    }

}
enigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']

)