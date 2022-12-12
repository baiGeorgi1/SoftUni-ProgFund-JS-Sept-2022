function valueOfString(array) {
    const string = array[0];
    const task = array[1];
    let sum = 0;
    switch (task) {
        case 'UPPERCASE':
            for (const letter of string) {
                if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
                    sum += letter.charCodeAt();
                }
            }
            break;
        case 'LOWERCASE':
            for (const letter of string) {
                if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
                    sum += letter.charCodeAt();
                }
            }
            break;
    }
    console.log(`The total sum is: ${sum}`);
}

valueOfString(['AC/DC',
    'UPPERCASE']

)