function vacantion(people, groupType, day) {
    let totalPrice = 0;
    switch (groupType) {
        case 'Students':
            if (day === 'Friday') {
                totalPrice = people * 8.45;
            } else if (day === 'Saturday') {
                totalPrice = people * 9.8;
            } else if (day === 'Sunday') {
                totalPrice = people * 10.46;
            }
            if (people >= 30) {
                totalPrice *= 0.85;
            }
            break;
        case 'Business':
            if (people >= 100) {
                people -= 10;
            }
            if (day === 'Friday') {
                totalPrice = people * 10.90;
            } else if (day === 'Saturday') {
                totalPrice = people * 15.60;
            } else if (day === 'Sunday') {
                totalPrice = people * 16;
            }
            break;
        case 'Regular':
            if (day === 'Friday') {
                totalPrice = people * 15;
            } else if (day === 'Saturday') {
                totalPrice = people * 20;
            } else if (day === 'Sunday') {
                totalPrice = people * 22.5;
            }
            if (people >= 10 && people <= 20) {
                totalPrice *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacantion(40,"Regular","Saturday")
// You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on that information calculate
// how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person.
// The output should look like that: `Total price: {price}`.The price should be formatted to the second decimal point
// There are also discounts based on some conditions:
// •	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
// •	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
// •	Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
// Note: You should reduce the prices in that EXACT order.


