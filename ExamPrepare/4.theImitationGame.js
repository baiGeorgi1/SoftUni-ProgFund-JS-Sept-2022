function imitationGame(input) {
    const copyOfInput = input.slice();
    let encryptedMessage = copyOfInput.shift();
    let instruction = copyOfInput.shift();


    while (instruction !== 'Decode') {
        let [command, ...arguments] = instruction.split('|');
        switch (command) {
            case 'ChangeAll':
                let letterToMove = arguments[0];
                let replacementLetter = arguments[1];
                while (encryptedMessage.includes(letterToMove)) {
                    let message = encryptedMessage.replace(letterToMove, replacementLetter);
                    encryptedMessage = message;
                }
                break;
            case 'Insert':
                let indexPosition = Number(arguments[0]);
                let letterToPush = arguments[1];
                let arr = encryptedMessage.split('')
                arr.splice(indexPosition, 0, letterToPush);
                encryptedMessage = arr.join('');
                break;
            case 'Move':
                let index = Number(arguments[0]);
                let substr = encryptedMessage.substring(0, index);
                let temp = encryptedMessage.replace(substr, '').concat(substr);
                encryptedMessage = temp;
                break;
        }
        instruction = copyOfInput.shift();
    }
    console.log(`The decrypted message is: ${encryptedMessage}`);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
)