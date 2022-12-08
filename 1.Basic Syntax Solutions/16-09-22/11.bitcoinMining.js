function mining(array) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    let money = 0;
    let firstBitcoinBuy = 0;
    let bitcoins = 0;
    let days = 0;
    for (let diggedGold of array) {
        days++;
        if (days % 3 === 0) {
            diggedGold *= 0.7;
        }
        money += diggedGold * goldPrice;
        if (money >= bitcoinPrice) {
            let buyBitcoins = Math.floor(money / bitcoinPrice);
            money -= bitcoinPrice * buyBitcoins;
            bitcoins += buyBitcoins;
            if (bitcoins !== 0) {
                if (firstBitcoinBuy === 0)
                    firstBitcoinBuy = days;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinBuy}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
mining([3124.15,
    504.212,
    2511.124])