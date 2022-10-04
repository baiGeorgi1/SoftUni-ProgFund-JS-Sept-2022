function dungeonesDark(arr) {
    let arrString = arr.toString();
    let newArray = arrString.split('|');
    let health = 100;
    let coins = 0;
    let rooms = 0;
    for (let i = 0; i < newArray.length; i++) {
        let innerString = newArray[i].toString();
        let innerArray = innerString.split(' ');
        switch (innerArray[0]) {
            case 'chest':
                console.log(`You found ${innerArray[1]} coins.`);
                coins += Number(innerArray[1]);
                rooms++;
                break;
            case 'potion':
                let currentHealth = health;
                health += Number(innerArray[1]);
                rooms++;
                if (health >= 100) {
                    let diferense = 100 - currentHealth;
                    health = 100;
                    console.log(`You healed for ${diferense} hp.`);
                    console.log(`Current health: ${health} hp.`);
                } else {
                    console.log(`You healed for ${innerArray[1]} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }
                break;
            default:
                rooms++;
                health -= innerArray[1];
                if (health <= 0) {
                    console.log(`You died! Killed by ${innerArray[0]}.`);
                    console.log(`Best room: ${rooms}`);
                    return;
                } else {
                    console.log(`You slayed ${innerArray[0]}.`);
                }
                break;
        }

    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
dungeonesDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])