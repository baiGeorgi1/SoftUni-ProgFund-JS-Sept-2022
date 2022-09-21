function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        let IsleapYear = true;
        console.log('yes');
    } else {
        console.log('no');
    }
}
leapYear(2003)