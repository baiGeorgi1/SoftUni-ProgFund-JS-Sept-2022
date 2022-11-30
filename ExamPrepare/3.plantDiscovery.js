function plantDiscovery(input) {
    let copyOfInput = input.slice();
    const collectedPlants = Number(copyOfInput.shift());
    let plantsName = copyOfInput.splice(0, collectedPlants);
    const collection = [];
    for (const plants of plantsName) {
        collection.push(plants.split('<->'));
    }
    let info = copyOfInput.shift();
    while (info !=='Exhibition') {
        const pattern = /(?<toDo>[A-Za-z]+):\s(?<plant>[A-Za-z]+)\s\-\s(?<rating>\d+)/g;
        let instruction = info.match(pattern);
        for (const index of instruction) {
             let toDo = index.groups.toDo;
       let plant = index.groups.plant;
       let rating = index.groups.rating;
        console.log(plant);
        }
      
      info = copyOfInput.shift();  
    }
    


}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
