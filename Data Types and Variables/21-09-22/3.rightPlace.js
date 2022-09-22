function rightPlace(string, char, result) {
    let res = string.replace('_', char);
    let out = res === result ? 'Matched' : 'Not Matched';
    console.log(out);
}
rightPlace('Str_ng', 't', 'String')

