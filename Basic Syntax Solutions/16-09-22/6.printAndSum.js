function printAndSum(start, end) {
    let sum = 0;
    let numbers = '';
    for (let i = start; i <= end; i++) {
        numbers += ' ' + i;
        sum += i;
    }
    console.log(numbers)
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)

// Write a function that displays numbers from given start to given end and their sum.
//The input comes as two number parameters. Print the result like the examples below: