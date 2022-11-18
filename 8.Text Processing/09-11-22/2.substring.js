function subString(text, startIndex, count) {
    let newText = text.substring(startIndex, startIndex + count);
    console.log(newText);
}
subString('ASentence', 1, 8)