function stringSubstring(searching, input) {
    let text = input.toLowerCase().split(' ');
    let found = [];
    for (const word of text) {
        if (searching.toLowerCase() === word.toLowerCase()) {
            found.push(searching);
            return console.log(searching);
        }       
    }
    if (found.length < 1) {
            console.log(`${searching} not found!`);
        }
}

stringSubstring('javascript',
    'JavaScriptis the best programming language'

)