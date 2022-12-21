function biggest(first, second, third) {
    let numberOne = first;
    let numberTwo = second;
    let numberThree = third;
    // let bigger = Math.max(first,second,third);
    // console.log(bigger);
    // ********* OR ********
    if (numberOne > numberTwo && numberOne > numberThree) {
        console.log(numberOne);
    } else if (numberTwo > numberThree) {
        console.log(numberTwo);
    } else {
        console.log(numberThree);
    }
}
biggest(12, 7, 333)
