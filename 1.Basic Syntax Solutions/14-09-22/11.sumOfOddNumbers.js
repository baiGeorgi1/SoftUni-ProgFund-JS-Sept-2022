function sumOfOddNumbers(num) {
    let a = 1;
    let sum = 0;
    for (i = 1; i <= num; i++) {
        console.log(a);
        sum += a;
        a += 2;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(3)