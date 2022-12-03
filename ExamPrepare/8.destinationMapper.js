function destinationMapper (code){
    const regExp = /(?<surrounded>[=|\/])(?<country>[A-Z][A-Za-z]{3,})\1/g;
    let countries  = code.matchAll(regExp);
    let travelPoint = 0;
    const destinationArray = [];
    for (const destination of countries) {
        destinationArray.push(destination.groups.country);
        travelPoint += destination.groups.country.length;   
    }
    let allDest = destinationArray.join(', ')
   console.log(`Destinations: ${allDest}`);
   console.log(`Travel Points: ${travelPoint}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
destinationMapper ("ThisIs some InvalidInput")