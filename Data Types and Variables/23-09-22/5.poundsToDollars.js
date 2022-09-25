function poundsToDollars(value) {
    let pounds = value;
    const USDrate = 1.31;
    let dollarExchange = pounds * USDrate;
    console.log(dollarExchange.toFixed(3));
}
poundsToDollars(80)