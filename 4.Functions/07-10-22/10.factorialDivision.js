function factorialDivision(num1, num2) {
    let sum1 = 1;
    let sum2 = 1;

    for (let int = num1; int >= 1; int--) {
        sum1 *= int;
    }
    for (let int = num2; int >= 1; int--) {
        sum2 *= int;
    }
    let total = sum1/sum2;
    console.log(total.toFixed(2));
}
factorialDivision(6, 2)                                                                            