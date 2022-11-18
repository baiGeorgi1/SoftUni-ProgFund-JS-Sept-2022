function exttractFile(path) {
    let file = path
        .split('\\')
        .pop();
    let lastComa = file.lastIndexOf('.');
    let fileName = '';
    let extension = '';
    for (let i = 0; i < lastComa; i++) {
        fileName += file[i];
    } for (j = lastComa + 1; j < file.length; j++) {
        extension += file[j];
    }
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
exttractFile('C:\\Projects\\Data-Structures\\LinkedList.cs.exe')