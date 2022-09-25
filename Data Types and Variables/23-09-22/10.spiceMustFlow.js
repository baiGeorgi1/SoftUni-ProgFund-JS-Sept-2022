function spiceMustFlow(number) {
    let spices = number;
    let workersEat = 26;
    let yield = 0;
    let day = 0;
    if (spices < workersEat) {
        yield = 0;
    } for (day = 0; spices >= 100; day++) {
        yield += spices - workersEat;
        spices -= 10;
        if (spices < 100 && spices > 26) {
            yield -= workersEat;
        }
    }
    console.log(day);
    console.log(yield);
}
spiceMustFlow(450)