function addAndSubtract(int1, int2, int3) {
    function add(num1, num2) {
        let sum = num1 + num2;
        return sum;
    }
    add(int1, int2)
    let sumOfTwo = add(int1, int2);
    function subttract(sum, num3) {
        let totalResult = sum - num3;
        return console.log(totalResult);
    }
    subttract(sumOfTwo, int3)    
}
addAndSubtract(23, 6, 10)