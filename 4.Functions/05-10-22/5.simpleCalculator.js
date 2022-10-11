function simpleCalculator(numberOne, NumberTwo, operator) {
    let result = 0;
    function calculate(calculatingType) {
        switch (calculatingType) {
            case 'multiply':
                result = numberOne * NumberTwo;
                break;
            case 'divide':
                result = numberOne / NumberTwo;
                break;
            case 'add':
                result = numberOne + NumberTwo;
                break;
            case 'subtract':
                result = numberOne - NumberTwo;
                break;
        } return result;
    }
    calculate(operator)
    console.log(result);
}
simpleCalculator(12,    19,    'add')