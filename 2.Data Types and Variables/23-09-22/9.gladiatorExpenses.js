function gladiatorExpenses(fights, helmet, sword, shield, armor) {
    let lostBattels = fights;
    let helmetPrice = helmet;
    let swordPrice = sword;
    let shieldPrice = shield;
    let armorPrice = armor;

    let brokenShield = 0;
    let expenses = 0;
    for (let losts = 1; losts <= lostBattels; losts++) {
        if (losts % 2 === 0) {
            expenses += helmetPrice;
        }
        if (losts % 3 === 0) {
            expenses += swordPrice;
        }
        if (losts % 2 === 0 && losts % 3 === 0) {
            expenses += shieldPrice;
            brokenShield++;
            if (brokenShield % 2 === 0) {
                expenses += armorPrice;
            }
        }
    } console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5)
