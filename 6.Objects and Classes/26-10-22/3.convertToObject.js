function jsonToObj(jsonStr) {
    let person = JSON.parse(jsonStr);
    for (const key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }
}
jsonToObj('{"name": "George", "age": 40, "town": "Sofia"}')