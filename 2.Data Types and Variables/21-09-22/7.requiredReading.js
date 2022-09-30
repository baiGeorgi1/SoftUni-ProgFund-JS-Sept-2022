function requredReading (bookPages,pagesReadPerHour,daysToRead){
    let totalTime = (bookPages / pagesReadPerHour) ;
    let hourPerday = totalTime / daysToRead
    console.log(hourPerday);
}
requredReading(432,
    15 ,
    4 
     )