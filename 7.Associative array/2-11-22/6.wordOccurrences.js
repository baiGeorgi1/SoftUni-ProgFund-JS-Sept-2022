function wordCount(arr) {
    let countObj = [];

    for (const line of arr) {
        let name =  {line} ;

        let counter = 1;
        let word = countObj.find(el => el.line === line);
        if (word) {
            counter += 1;
            word.repeat = counter;
        } else {
            name.repeat = counter;
            countObj.push(name)
        }
    }
   for (const line of countObj) {
     
        console.log(`${Object.key[line]} -> ${Object.values[line]} times`);
    
    
   }    
     
   
}
wordCount(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])