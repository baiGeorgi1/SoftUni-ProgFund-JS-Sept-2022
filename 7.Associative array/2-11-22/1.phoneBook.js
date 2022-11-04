function phoneBook(list) {
    let phoneList = {};
    for (const line of list) {
        let [name, phoneNumber] = line.split(' ');
        phoneList[name] = phoneNumber;
    }
    for (const name in phoneList) {
        console.log(`${name} -> ${phoneList[name]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)