function calculator(firstNum, operator, secondNum) {
    let sum = 0;
    switch (operator) {
        case '+': sum = firstNum + secondNum;
            console.log(sum.toFixed(2));
            break;
        case '-': sum = firstNum - secondNum;
            console.log(sum.toFixed(2));
            break;
        case '*': sum = firstNum * secondNum;
            console.log(sum.toFixed(2));
            break; case '/': sum = firstNum / secondNum;
            console.log(sum.toFixed(2));
            break;
    }

}
calculator(5, '+', 10)