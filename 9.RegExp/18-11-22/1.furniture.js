function furnitureShop(listArr) {
    console.log('Bought furniture:');
    const pattern = /(>{2})(?<name>[A-Za-z]+)(<{2})(?<price>\d+\.?\d+)(!)(?<quantity>\d+)/g
    let command = listArr.shift();
    let totalSum = 0;

    while (command !== 'Purchase') {
        let itemInfo = command.matchAll(pattern);
        for (const info of itemInfo) {
            if (info !== null) {
                const sum = Number(info.groups.price) * Number(info.groups.quantity);
                totalSum += Number(sum);
                console.log(info.groups.name);
            }
        }
        command = listArr.shift()
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furnitureShop(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']

)
