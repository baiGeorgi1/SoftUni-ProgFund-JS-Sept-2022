function activationKey(input) {
    let inputArr = input.slice();
    let activationKey = inputArr.shift();
    let line = inputArr.shift()
    while (line !== 'Generate') {
        let instruction = line.split('>>>')
        switch (instruction[0]) {
            case 'Contains':
                let contains = instruction[1];
                if (activationKey.includes(contains)) {
                    console.log(`${activationKey} contains ${contains}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
            case 'Flip':
                let caseInsensitive = instruction[1];
                let startIndex = instruction[2];
                let endIndex = instruction[3];
                let modify = activationKey.slice(startIndex, endIndex);
                let modified = '';
                if (caseInsensitive === 'Upper') {
                    modified = modify.toUpperCase();
                } else {
                    modified = modify.toLowerCase();
                }
                activationKey = activationKey.replace(modify, modified);
                console.log(activationKey);
                break;
            case 'Slice':
                let sliced = activationKey.slice(instruction[1], instruction[2]);
                activationKey = activationKey.replace(sliced, '');
                console.log(activationKey);
                break;
        }
        line = inputArr.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}
activationKey([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
