function loading(number) {
    let symbol = '%';
    let dots = '.';
    let scale = 10;
    const repeatedSymbol = number / 10;

    if (number === 100) {
        console.log('100% Complete!');
        console.log(`[%%%%%%%%%%]`);
    } else {
        let result = symbol.repeat(repeatedSymbol) + dots.repeat(scale - repeatedSymbol);
        console.log(`${number}% [${result}]`);
        console.log('Still loading...');
    }
}
loading(10)