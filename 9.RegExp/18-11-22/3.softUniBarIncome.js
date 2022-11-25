function barIncome(inputArr) {
    const pattern = /%(?<name>[A-Z][a-z]+)%[^$|%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<count>\d+)\|[^0-9|$%.]*(?<price>[0-9|\.]+)\$/g
    let command = inputArr.shift();
    let income = 0;

    while (command !== 'end of shift') {
        let validCommand = command.matchAll(pattern);
        for (const info of validCommand) {
            let price = Number(info.groups.count) * Number(info.groups.price);
            income += price;
            console.log(`${info.groups.name}: ${(info.groups.product)} - ${price.toFixed(2)}`);
        }


        command = inputArr.shift();
    }
    console.log(`Total income: ${income.toFixed(2)}`);

}
barIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']


)