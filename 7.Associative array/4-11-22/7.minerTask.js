function miner(input) {
    const resources = {};

    for (let i = 0; i < input.length; i += 2) {
        let name = input[i];
        if (!resources.hasOwnProperty(name)) {
            resources[name] = 0;
        } resources[name] += Number(input[i + 1]);
    }
    for (const resource in resources) {
        console.log(`${resource} -> ${resources[resource]}`);
    }
}
miner([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
)