function towns(array) {
    let towns = {};
    for (const infoLine of array) {
        let [name, x, y] = infoLine.split(' | ');
        towns.town = name;
        towns.latitude = Number(x).toFixed(2);
        towns.longitude = Number(y).toFixed(2);
        console.log(towns);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)