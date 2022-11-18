function stringSubstring(searching, input) {
    let text = input.toLowerCase();
    let searchingWord = text.match(searching.toLowerCase());

    if (searchingWord !== null) {
        return console.log(searching);
    }
    console.log(`${searching} not found!`);
}
stringSubstring('JavascriPt1',
    'JavaScript1 is the best programming javascript language'
)