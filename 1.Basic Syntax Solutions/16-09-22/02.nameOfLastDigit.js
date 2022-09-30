function nameOfLastDigit(number) {
    let stringDigit = number.toString();
    let result = stringDigit[stringDigit.length - 1];
    let answer = ''
    switch (result) {
        case '1':
            answer = 'one';
            break;
        case '2':
            answer = 'two';
            break;
        case '3':
            answer = 'three';
            break;
        case '4':
            answer = 'four';
            break;
        case '5':
            answer = 'five';
            break;
        case '6':
            answer = 'six';
            break;
        case '7':
            answer = 'seven';
            break;
        case '8':
            answer = 'eight';
            break;
        case '9':
            answer = 'nine';
            break;
        case '0':
            answer = 'zero';
            break;
    }
    console.log(answer);
}
nameOfLastDigit(15344)