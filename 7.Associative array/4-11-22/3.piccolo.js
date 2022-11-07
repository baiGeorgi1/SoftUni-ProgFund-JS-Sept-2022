function parking(listArray) {
    const parkingList = [];
    for (const line of listArray) {
        let [act, carNumber] = line.split(', ');
        if (act === 'IN') {
            parkingList.push(carNumber);
        } 
        if (act === 'OUT') {
            if (parkingList.includes(carNumber)) {
                parkingList.splice(parkingList.indexOf(carNumber), 1)
            }
        }
    }
    if (parkingList.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        parkingList.sort((a, b) => a.localeCompare(b));
        parkingList.forEach(car => console.log(car));
    }
}
parking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']

)