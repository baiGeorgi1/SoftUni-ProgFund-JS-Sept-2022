function emojiDecoder(text) {
    const allDigits = /(?<digits>[\d+])/g
    let gotDigits = text.join().match(allDigits);
    let coolThreshold = 1;
    const coolEmojies = [];
    for (const digit of gotDigits) {
        coolThreshold *= digit[0];
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    const emojiPatern = /(?<obtain>[\:]{2}|[\*]{2})[A-Z][a-z]{2,}\1/g;
    let foundedEmojies = text.join().match(emojiPatern);

    for (const emoji of foundedEmojies) {
        let target = emoji.substring(2, emoji.length - 2);
        let sum = 0;
        for (const letter of target) {
            sum += letter.charCodeAt();
        }
        if (sum >= coolThreshold) {
            coolEmojies.push(emoji);
        }
    }
    console.log(`${foundedEmojies.length} emojis found in the text. The cool ones are:`);
    coolEmojies.forEach(emoji => {
        console.log(`${emoji}`);
    });
}
emojiDecoder(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])