function blackFlag(arr) {
    let days = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let plunderTarget = Number(arr[2]);

    let totalPlunder = 0;

    for (let index = 1; index <= days; index++) {
        totalPlunder += dailyPlunder
        if (index % 3 === 0) {
            totalPlunder += dailyPlunder * 0.5;
        }
        if (index % 5 === 0) {
            totalPlunder *= 0.7;
        }
    }
    if (totalPlunder >= plunderTarget) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (totalPlunder / plunderTarget) * 100;

        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag((["10", "20", "380"])) 