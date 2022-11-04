function addressBook(list) {
    const listBook = {};
    
    list.forEach(line => {
        let [name, strAddress] = line.split(':')
        listBook[name] = strAddress;
    });
    const listBookArr = Object.entries(listBook);

    let sorByName = listBookArr.sort((a, b) => a[0].localeCompare(b[0]));
    let newListBook = Object.fromEntries(sorByName);
    for (const key in newListBook) {
        console.log(`${key} -> ${newListBook[key]}`);
    }
}
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
)