function inventory(array) {
    let heroList = [];

    for (const line of array) {
        let [name, level, items] = line.split(' / ');
        let hero = {
            name,
            level,
            items
        }
        heroList.push(hero);
    }
    
    heroList.sort((a, b) => a.level - b.level);
    
    for (const hero of heroList) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)