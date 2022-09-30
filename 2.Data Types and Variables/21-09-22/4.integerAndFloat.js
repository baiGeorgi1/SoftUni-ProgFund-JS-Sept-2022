function integerAndFloat (number1,number2,number3){
    let sum = number1 + number2 + number3 ;
    let type = Number.isInteger (sum) ? 'Integer' : 'Float';
    console.log(`${sum} - ${type}`);;
}
integerAndFloat(9, 100, 1)

