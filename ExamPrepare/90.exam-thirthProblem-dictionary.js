function dictionary(inputArr) {
    let dicWords = inputArr.shift();
    const myDictionary = {};
    const dict = dicWords.split(' | ');
    for (const line of dict) {
        let [word, meaning] = line.split(': ');
        if (!myDictionary.hasOwnProperty(word)) {
            myDictionary[word] = [meaning];
        } else {
            myDictionary[word].push(meaning);
        }
    }
    const words = inputArr.shift().split(' | ');
    let command = inputArr.shift();

    if (command === 'Test') {
        for (const word of words) {
            if (myDictionary.hasOwnProperty(word)) {
                console.log(`${word}:`);
                let descr = (Object.values(myDictionary[word]));
                for (const describtion of descr) {
                    console.log(` -${describtion}`);
                }
            }
        }
    } else if (command === 'Hand Over') {
        let wordsInDictionary = Object.keys(myDictionary)
        console.log(wordsInDictionary.join(' '));
    }
}
dictionary(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
    "care | kitchen | flower",
    "Test"])
