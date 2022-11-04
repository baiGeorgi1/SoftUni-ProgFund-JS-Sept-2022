function movies(array) {
    const movieList = [];

    for (const line of array) {
        if (line.includes('addMovie')) {
            let name = line.split('addMovie ')[1];
            movieList.push({ name });
        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');
            let movie = movieList.find(el => el.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ');
            let movie = movieList.find(el => el.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }
    movieList.forEach(element => {
        if (element.name && element.director && element.date) {
            console.log(JSON.stringify(element));
        }
    });
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]


)