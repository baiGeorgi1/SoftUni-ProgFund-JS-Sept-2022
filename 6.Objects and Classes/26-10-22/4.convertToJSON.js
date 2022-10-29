function convertToJSON(firstN, lastN, hair) {
    let person = {
        name: firstN,
        lastName: lastN,
        hairColor: hair,
    };
    let jsonString = JSON.stringify(person);
    return jsonString;
}
convertToJSON('George', 'Jones', 'Brown')