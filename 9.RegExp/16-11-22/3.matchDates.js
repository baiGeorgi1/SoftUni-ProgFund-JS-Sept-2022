function dateFormat(input) {
    const dateList = input.shift();
    const pattern = /(?<date>\d{2})([.\/-])(?<month>[A-Z]{1}[a-z]{2})\2(?<year>\d{4})/g
    let rightDate = dateList.matchAll(pattern);
    for (const match of rightDate) {
        console.log(`Day: ${match.groups.date}, Month: ${match.groups['month']}, Year: ${match.groups['year']}`);
    }
}
dateFormat(['13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'])