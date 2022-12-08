function generator(array) {
    let first = array[0];
    let second = array[1];
    const keyWord = array[2].toUpperCase().split('');
    let text = first.concat(second).toLowerCase().split('');
    const vowels = ['a', 'e', 'i', 'u', 'o'];
    let change = keyWord.slice();
    for (let i = 0; i < text.length; i++) {
        if (change.length < 1) {
            change = keyWord;
        }
        for (const letter of vowels) {
            if (text[i].match(letter)) {
                text[i] = change.shift();
                break;
            }
        }
    }
    console.log(`Your generated password is ${text.reverse().join('')}`);
}
generator([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
    ]
    
)