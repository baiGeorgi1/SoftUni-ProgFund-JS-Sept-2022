function enigma(inputArr) {

    const messages = Number(inputArr.shift());
    const line = inputArr.slice(0, messages);
    const keyPattern = /[STARstar]/g
    const decoded = [];
    for (const text of line) {
        let decoding = '';
        const key = text.match(keyPattern).length;
        let length = text.length;
        for (let index = 0; index < length; index++) {
            let decodedSymbol = text.charCodeAt(index) - key;
            let symbol = String.fromCharCode(decodedSymbol)
            decoding += symbol;
        }
        decoded.push(decoding);
    }
    const infoPattern = /([\w]*)@(?<planet>[A-Za-z]+)([\w]*):(?<population>[\d]+)([\w]*)!(?<command>[A|D])!([\w]*)->(?<army>[\d]+)([\w]*)/g;

    let attack = 0;
    let destr = 0;
    const attPlanet = [];
    const destrPlanet = [];
    for (const task of decoded) {
        let toDo = task.matchAll(infoPattern);
        if (toDo !== null) {
            for (const order of toDo) {
                if (order.groups.command === 'A') {
                    attack++;
                    attPlanet.push(order.groups.planet);
                } else if (order.groups.command === 'D') {
                    destr++;
                    destrPlanet.push(order.groups.planet);
                }
            }
        }
    }
    console.log(`Attacked planets: ${attack}`);
    attPlanet.sort();
    for (const planet of attPlanet) {
        console.log(`-> ${planet}`);
    }
    console.log(`Destroyed planets: ${destr}`);
    destrPlanet.sort();
    for (const planet of destrPlanet) {
        console.log(`-> ${planet}`);
    }
}
enigma([3, 'tt(DGsvywgerx>6444444444%H%1B9444', ' GQhrr|A977777(H(TTTT ', 'EHfsytsnhf?8555&I&2C9555SR'])
//enigma([2,'STCDoghudd4=63333$D$0A53333','EHfsytsnhf?8555&I&2C9555SR'])