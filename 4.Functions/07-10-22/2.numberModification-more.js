function modifyNumber(number) {
    let mod = '' + number.toString();
    let sum = 0;
    while (sum < 5) {
        sum = 0;
        for (let i = 0; i < mod.length; i++) {
            sum += Number(mod[i]) / mod.length;
        }
        if (sum < 5) {
            mod += 9;
        }
    }
    console.log(mod);
}
modifyNumber(5835)