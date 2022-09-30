function sortNumbers(num1,num2,num3){
    if (num1 > num2 && num1 >num3){
        console.log(num1);
        if (num2 >= num3){
            console.log(num2);
            console.log(num3);
        }else {
            console.log(num3);
            console.log(num2);
        }
    }else if (num2 > num1 && num2> num3){
        console.log(num2);
        if (num1 >= num3){
            console.log(num1);
            console.log(num3);
        }else {
            console.log(num3);
            console.log(num1);
        }
    }else if (num3 > num1 && num3> num2){
        console.log(num3);
        if (num1 >= num2){
            console.log(num1);
            console.log(num2);
        }else {
            console.log(num2);
            console.log(num1);
        }
        }
} 
sortNumbers (-3,4,3)
// Receive three numbers and 
// you have to sort them in descending order. Print each number on a new line.