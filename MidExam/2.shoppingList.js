function shoppingList(arr) {
    let list = arr
        .shift()
        .split('!');
    let command = arr.shift();

    while (command !== 'Go Shopping!') {
        let innerCommands = command.split(' ');
        switch (innerCommands[0]) {
            case 'Urgent':
                if (!list.includes(innerCommands[1])) {
                    list.unshift(innerCommands[1]);
                } break;
            case 'Unnecessary':
                if (list.includes(innerCommands[1])) {
                    let duplicatedProduct = list.indexOf(innerCommands[1]);
                    list.splice(duplicatedProduct, 1);
                } break;
            case 'Correct':
                let oldNameProduct = innerCommands[1];
                let newName = innerCommands[2];
                if (list.includes(oldNameProduct)) {
                    let product = list.indexOf(oldNameProduct);
                    list.splice(product, 1, `${newName}`);
                } break;
            case 'Rearrange':
                if (list.includes(innerCommands[1])) {
                    let item = list.indexOf(innerCommands[1]);
                    list.splice(item, 1);
                    list.push(innerCommands[1]);
                } break;
        }
        command = arr.shift();
    }
    let endList = [];
    for (const index of list) {
        if (!endList.includes(index)) {
            endList.push(index);
        }
    }
    console.log(endList.join(', '));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",

    "Correct Pepper Onion",
    "Rearrange Potatoes",
    "Correct Milk Salt", "Rearrange Water", "Go Shopping!"
])

