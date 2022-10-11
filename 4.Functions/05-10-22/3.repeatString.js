function repeatString (string,repeat){
    let word = string;
    let repeatedTimes = repeat;
    let repeatedString = ''

    for (let i = 1;i<=repeatedTimes;i++){
        repeatedString += word;
    }
console.log(repeatedString);
}
repeatString ("String", 2)