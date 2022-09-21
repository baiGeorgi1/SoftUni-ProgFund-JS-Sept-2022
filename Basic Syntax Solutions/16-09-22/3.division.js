function division(number) {
    if (number % 10 === 0) {
        console.log(`The number is divisible by 10`);
    } else if (number % 7 === 0) {
        console.log(`The number is divisible by 7`);
    }
    else if (number % 6 === 0) {
        console.log(`The number is divisible by 6`);
    }
    else if (number % 3 === 0) {
        console.log(`The number is divisible by 3`);
    }
    else if (number % 2 === 0) {
        console.log(`The number is divisible by 2`);
    } else {
        console.log(`Not divisible`);
    }

}
division(1643)


// You will be given a number and you have to check whether that number is divisible by any
// of the following numbers: 2, 3, 6, 7, and 10. You should always take the bigger division.
//If the number is divisible by both 2 and 3 it is also divisible by 6 and you should print
//only the division by 6. If a number is divisible by 2 it is sometimes also divisible by 10
//and you should print the division by 10.
//If the number is not divisible by any of the given numbers print: "Not divisible".
//Otherwise, print: "The number is divisible by {number}".
