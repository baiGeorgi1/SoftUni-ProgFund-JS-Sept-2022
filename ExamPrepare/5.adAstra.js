function adAstra(input) {
    const pattern = /(?<spliter>[#\||])(?<food>[A-Za-z\s]+)\1(?<expDate>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<kCall>[0-9]*)\1/g

    let calloriesSum = 0;
    let days = 0;
    let foods = input.join('').matchAll(pattern);
    const foodFound = [];
    for (const food of foods) {
        calloriesSum += Number(food.groups.kCall);
        let foodName = food.groups.food;
        let expDate = food.groups.expDate;
        let callories = food.groups.kCall;
        let text = `Item: ${foodName}, Best before: ${expDate}, Nutrition: ${callories}`;
        foodFound.push(text);
    }
    days = Math.floor(calloriesSum / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    for (const text of foodFound) {
        console.log(text);
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )