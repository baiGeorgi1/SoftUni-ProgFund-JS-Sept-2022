function formatGrade(grade) {
    let resultGrade = Number(grade);
    let studentGrade = '';
    if (grade < 2 || grade > 6) {
        return console.log('error');;
    }
    if (grade < 3) {
        console.log('Fail (2)');
        return;
    } else if (grade < 3.50) {
        studentGrade = 'Poor';
    } else if (grade < 4.5) {
        studentGrade = 'Good';
    } else if (grade < 5.5) {
        studentGrade = 'Very good';
    } else {
        studentGrade = 'Excellent';
    }
    console.log(`${studentGrade} (${resultGrade.toFixed(2)})`);
}
formatGrade('3.50')