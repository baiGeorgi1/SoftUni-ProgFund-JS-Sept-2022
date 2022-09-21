function rounding(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    let result = number.toFixed(precision)
    console.log(parseFloat(result));
}
rounding(3.500000000, 2)

//The input comes as two numbers. The first value is the number to be rounded and the
//second is the precision (significant decimal places). If the passed precision is more
//than 15, it should automatically be reduced to 15.
//Remove trailing zeroes, if any (you can use parseFloat (number))
//The output should be printed to the console. Do not print insignificant decimals
