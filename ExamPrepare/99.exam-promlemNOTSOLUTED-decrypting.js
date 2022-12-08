function decrypting(input) {
    let message = input.shift();
    let line = input.shift();
    while (line !== "Finish") {
        let [command, ...others] = line.split(' ');
        switch (command) {
            case 'Replace':
                let oldChar = others[0];
                let newChar = others[1];
                while (message.includes(oldChar)) {
                    message = message.replace(oldChar, newChar);
                }
                console.log(message);
                break;
            case 'Cut':
                let startIndex = Number(others[0]);
                let endIndex = Number(others[1]);
                if (message[startIndex] && message[endIndex]) {
                    let arr = message.split('')
                    arr.splice(startIndex, endIndex);
                    message = arr.join('');
                    console.log(message);
                } else {
                    console.log('Invalid indices!');
                }

                break;
            case 'Make':
                let toDo = others[0];
                if (toDo === 'Upper') {
                    message = message.toUpperCase();
                }else if (toDo === 'Lower') {
                    message = message.toLowerCase();
                } console.log(message);
                break;
            case 'Check':
                let string = others[0];
                if (message.includes(string)) {
                    console.log(`Message contains ${string}`);
                } else {
                    console.log(`Message doesn't contain ${string}`);
                }

                break;
            case 'Sum':
                let startI = Number(others[0]);
                let endI = Number(others[1]);
                if (startI >= 0 && endI > startI && endI < message.length) {
                    let cutted = message.split('').splice(startI,endI);
                    let sum = 0;
                    for (const letter of cutted) {
                        sum += letter.charCodeAt();
                    }
                    console.log(sum);
                } else {
                    console.log('Invalid indices!');
                }
                break;
        }
        line = input.shift()
    }
}
decrypting(["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"])


