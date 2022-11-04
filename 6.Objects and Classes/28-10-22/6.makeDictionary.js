function dictionary(array) {
    const data = [];
    const dictionary = {};
    for (const line of array) {
        let object = JSON.parse(line);
        data.push(object);
    }
    for (const line of data) {
        let word = Object.keys(line);
        let explain = Object.values(line);
        dictionary[word] = explain;
        //console.log(`${word} - ${explain}`);
    }
    let entries = Object.entries(dictionary);
    entries.sort((a, b) => a[0].localeCompare(b[0]));
    let sortedDictionary = Object.fromEntries(entries);

    for (const key in sortedDictionary) {
        console.log(`Term: ${key} => Definition: ${sortedDictionary[key]}`);
    }
}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)