function companyWorkers(listArr) {
    let companyObj = {};
    for (const line of listArr) {
        let [companyName, workerID] = line.split(' -> ');
        if (!companyObj.hasOwnProperty(companyName)) {
            companyObj[companyName] = [workerID];
        } else {
            if (!companyObj[companyName].includes(workerID)) {
                companyObj[companyName].push(workerID)
            }
        }
    }
    let sorted = Object.entries(companyObj).sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));
    let sortedCompany = Object.fromEntries(sorted);
    for (const company in sortedCompany) {
        console.log(company);
        for (const ID of sortedCompany[company]) {
            console.log(`-- ${ID}`)
        }
    }
}
companyWorkers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',

    'SoftUni -> AA12345',

]

)