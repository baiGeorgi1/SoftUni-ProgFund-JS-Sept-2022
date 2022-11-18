function matrix(input) {
    let number = input;
    let arr = [];
    for (let index = 1; index <= input; index++) {
        let line = ''
        for (let i = 1; i <= number; i++) {
            line += number + ' ';
        }
        arr.push(line.trim());
    }
    for (const element of arr) {
        console.log(element);
    }
}
matrix(2)