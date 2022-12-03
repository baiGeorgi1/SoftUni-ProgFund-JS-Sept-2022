function secretChat(input) {
    let codeMessage = input.shift();
    let line = input.shift();
    while (line !== 'Reveal') {
        let [command, ...others] = line.split(':|:');
        switch (command) {
            case 'InsertSpace':
                let index = others[0];
                let array = codeMessage
                    .split('');
                array.splice(index, 0, ' ');
                codeMessage = array
                    .join('');
                console.log(codeMessage);
                break;
            case 'ChangeAll':
                let oldLetter = others[0];
                let newLetter = others[1];
                let encoded = codeMessage
                    .split(oldLetter)
                    .join(newLetter);
                codeMessage = encoded;
                console.log(codeMessage);
                break;
            case 'Reverse':
                let part = others[0];
                if (codeMessage.includes(part)) {
                    let cut = codeMessage.indexOf(part);
                    let endCut = cut + part.length;
                    let subs = codeMessage.slice(cut, endCut)
                        .split('')
                        .reverse()
                        .join('');
                    codeMessage = codeMessage.split(part).join(subs)
                    console.log(codeMessage);
                } else {
                    console.log('error');
                }
                break;
        }
        line = input.shift();
    }
    console.log(`You have a new text message: ${codeMessage}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]


)