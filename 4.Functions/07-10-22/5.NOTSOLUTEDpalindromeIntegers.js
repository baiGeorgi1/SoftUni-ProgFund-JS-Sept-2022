function palindrome (array){
    let answer = '';
    let arrayLength = array.length;
    for (let index = 0;index < arrayLength;index ++){
        let = checkedNumber = array[index];
        function palindromeIn (checked){
            let curentNum = [checked];
            let currentArr = curentNum.split('');
            let reversedArr = currentArr.reverse();
            if (currentArr === currentArr.reverse()){
                answer = true;
                 return answer;
            }else {
                answer = false;
               return answer;
            }    
        }
        palindromeIn (checkedNumber)
        console.log(answer);
}
}
palindrome ([123,323,421,121])