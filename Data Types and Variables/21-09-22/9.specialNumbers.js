function specialNumbers(number) {
    let isSpecial = true;
    for (let count = 1; count <= number; count++) {
        let countString = count.toString();
        let sum = 0;
        for (let i = 0; i < countString.length; i++) {
            sum += Number(countString[i]);
            if (sum <= 11) {
                if (sum % 10 === 5 || sum % 10 === 7 || sum === 11) {
                    isSpecial = 'True'
                } else {
                    isSpecial = 'False'
                }
            } else if (sum > 11) {
                let newSum = sum.toString();
                sum = 0;
                for (let j = 0; j < newSum.length; j++) {
                    
                    sum += Number(newSum[j]);
                }
                //    if (sum <= 11) {
                if (sum % 10 === 5 || sum % 10 === 7 || sum === 11) {
                    isSpecial = 'True'
                } else {
                    isSpecial = 'False'
                    //  }
                }

            }

        } console.log(`${count} -> ${isSpecial}`);
    }
}
specialNumbers(100)