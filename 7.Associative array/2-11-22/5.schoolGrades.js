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
            let grade = Object.values(studentGrades[name]);
            let newAvgGrade = Number(((Number(grade[0]) + avrGrade) / 2).toFixed(2));
            studentGrades[name] = newAvgGrade;
        } else {
            studentGrades[name] = avrGrade;
        }

    }
    console.log(studentGrades);

}
schoolGades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)