function triangleOfNumbers (number){    
    for (let i=1;i<=number;i++){
        let print = ' ';
        for (let j = 1;j<=i;j++){
            print +=`${i} `;            
        }        console.log(print);
    }
}
triangleOfNumbers(5)
// Write a function, which receives a single number – n, and prints a triangle from 
// 1 to n as in the examples.
// Constraints
// •	n will be in the interval [1...20].
