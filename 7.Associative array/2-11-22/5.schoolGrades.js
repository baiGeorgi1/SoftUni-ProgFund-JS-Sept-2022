function schoolGades(list) {
    const studentGrades = {};

    for (let line of list) {
        let arrLine = line.split(' ');
        const name = arrLine.shift();
        let length = arrLine.length;
        let sum = 0;
        let count = 0;
        for (let index = 0; index < length; index++) {
            count += 1;
            sum += Number(arrLine[index]);
        }
        let avrGrade = Number(sum / count).toFixed(2);
        if (studentGrades.hasOwnProperty(name)) {
            let grade = Number(studentGrades[name]);
            let newAvgGrade = ((grade + Number(avrGrade)) / 2).toFixed(2);
            studentGrades[name] = newAvgGrade;
        } else {
            studentGrades[name] = avrGrade;
        }
    }
    let entries = Object.entries(studentGrades);
    entries.sort((a,b) => a[0].localeCompare(b[0]));
    let alphabeticalList = Object.fromEntries(entries);

    for (const key in alphabeticalList) {
        console.log(`${key}: ${alphabeticalList[key]}`);
    }
}
schoolGades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6','Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
    
)