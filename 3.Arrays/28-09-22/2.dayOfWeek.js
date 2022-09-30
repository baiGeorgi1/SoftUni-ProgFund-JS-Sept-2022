function dayOfWeek(dayNumber) {
    let days = ['Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ]
    if (dayNumber >= 1 && dayNumber <= 7) {
        dayNumber = days[dayNumber - 1];
        console.log(dayNumber);
    } else {
        console.log('Invalid day!');
    }
}
dayOfWeek(1)