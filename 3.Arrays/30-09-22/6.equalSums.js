function equalSum (array){
    let theIndex = 'no';
    let length = array.length;
    
    for (let i = 0;i< length;i++){
        let leftSum = 0;
        let rightSum = 0;

        for (let l = 0;l<i;l++ ){
            leftSum += array[l];
        }
        for (let r = i+1;r<length;r++){
            rightSum += array[r];
        }
        if(rightSum === leftSum){
            theIndex = i;
        }
    }console.log( theIndex);
}
equalSum([1])