function worldTour(input) {
    let tour = input.shift();
    let line = input.shift();
    while (line !== "Travel") {
        let info = line.split(':');
        let [command, ...arguments] = info;
        switch (command) {
            case 'Add Stop':
                let index = Number(arguments[0]);
                let string = arguments[1];
                if (tour.length >= index) {
                    let arr = tour.split('');
                    arr.splice(index, 0, string);
                    tour = arr.join('')
                    console.log(tour);
                }
                break;
            case 'Remove Stop':
                let start = Number(arguments[0]);
                let stop = (Number(arguments[1]) + 1) - start;
                if (start >= 0 && tour.length >= stop) {
                    let removeArr = tour.split('');
                    removeArr.splice(start, stop);
                    tour = removeArr.join('');
                    console.log(tour);
                }
                break;
            case 'Switch':
                let oldDest = arguments[0];
                let newDest = arguments[1];
                if (tour.includes(oldDest)) {
                    tour = tour.replace(oldDest, newDest);
                }
                console.log(tour);
                break;
        }
        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${tour}`);
}
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])	
