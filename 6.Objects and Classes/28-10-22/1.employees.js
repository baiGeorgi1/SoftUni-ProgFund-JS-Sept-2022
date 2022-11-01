function employees(array) {
    let employeeList = {};
    let length = array.length;
    for (let index = 0; index<length;index++){
        employeeList.name = array[index];
        employeeList.personalNum =( array[index].length);
        console.log(`Name: ${employeeList.name} -- Personal Number: ${employeeList.personalNum}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)