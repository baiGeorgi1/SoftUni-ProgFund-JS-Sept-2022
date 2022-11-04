function storage(list) {
    const summaryItems = {};

    list.forEach(line => {
        const [item, quantity] = line.split(' ');
        if (summaryItems.hasOwnProperty(item)) {
            summaryItems[item] += Number(quantity);
        } else { summaryItems[item] = Number(quantity); }
    });
    for (const key in summaryItems) {
        console.log(`${key} -> ${summaryItems[key]}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40', 'apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'
]
)