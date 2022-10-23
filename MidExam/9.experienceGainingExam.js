function experienceGaining(arr) {
    let goal = Number(arr.shift());
    let gamesPlayed = Number(arr.shift());

    let experience = 0;
    let battleCount = 0;
    let neededExp = 0;

    for (let i = 0; i < gamesPlayed; i++) {
        battleCount++;
        if (battleCount % 3 === 0) {
            experience += Number(arr[i] * 1.15);
        } else if (battleCount % 5 === 0) {
            experience += Number(arr[i] * 0.9);
        } else if (battleCount % 15 === 0) {
            experience += Number(arr[i] * 1.05)
        }
        else {
            experience += arr[i];
        }
        if (experience >= goal) {
            console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
            break;
        }
    }
    if (goal > experience) {
        neededExp = goal - experience;
        console.log(`Player was not able to collect the needed experience, ${neededExp.toFixed(2)} more needed.`)
    }
}
experienceGaining([500, 5, 50, 100, 200, 100, 20])

