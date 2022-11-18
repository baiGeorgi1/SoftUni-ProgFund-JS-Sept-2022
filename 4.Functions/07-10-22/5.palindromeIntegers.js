function palindrome(array) {

    for (const element of array) {
        let isPalindrome = true;
        let number = element
            .toString()
            .split('');
        let reversedNum = number
            .reverse()
            .join('');
        if (element == reversedNum) {
            isPalindrome;
        } else {
            isPalindrome = false;
        }
        console.log(isPalindrome);
    }
}
palindrome([123, 323, 421, 121])