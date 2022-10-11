function validPass(password) {
    let passwordLength = password.length;
    let digitCount = 0;
    let letters = 0;
    let isStrong = true;
    if (passwordLength < 6 || passwordLength > 10) {
        console.log(`Password must be between 6 and 10 characters`);
        isStrong = false;
    }
    for (let i = 0; i < passwordLength; i++) {
        let ASCIISymbol = password[i].charCodeAt()
        if (ASCIISymbol > 47 && ASCIISymbol < 72) {
            digitCount++;
        } else if ((ASCIISymbol > 64 && ASCIISymbol < 90) || (ASCIISymbol > 96 && ASCIISymbol < 123)) {
            letters++;
        }
    }
    let sumOfSymbols = letters + digitCount;
    if ((sumOfSymbols === passwordLength) && isStrong && digitCount>1) {
        console.log(`Password is valid`);
    }
    if (sumOfSymbols !== passwordLength) {
        console.log(`Password must consist only of letters and digits`);
    }
    if (digitCount <= 1) {
        console.log(`Password must have at least 2 digits`);
    }
}
validPass('logIn1')