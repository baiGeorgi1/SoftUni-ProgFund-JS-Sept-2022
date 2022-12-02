function destinations (list){
    let countryList = {};

    for (const line of list) {
        let [country,town,price] = line.split(' > ');
        countryList[country] =town;
        
    }


}
destinations([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )