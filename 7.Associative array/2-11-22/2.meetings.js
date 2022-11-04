function meetings(array) {
    let organizer = {};
    for (const line of array) {
        let [day, name] = line.split(' ')
        if (organizer.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            organizer[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (const day in organizer) {
        console.log(`${day} -> ${organizer[day]}`);
    }
}
meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']

)