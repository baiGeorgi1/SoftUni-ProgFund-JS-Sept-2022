function maxElements(array) {
    let equalArray = [];
    let length = array.length;
    let result = '';
    for (let i = 0; i < length; i++) {
        let current = i;
        for (let j = i + 1; j < length; j++) {            
            if (array[i] !== array[j]){
                break;    
            }
            if (array[i] === array[j]){
                current += i;
                
            }equalArray.push(current[i]);
                       
        }
    }
 console.log(equalArray);
}
maxElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])