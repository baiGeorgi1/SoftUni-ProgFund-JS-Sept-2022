function ages(age) {
    let a = age;
    if (0 <= a && a <= 2) {
        console.log("baby");
    } else if (3 <= a && a <= 13) {
        console.log('child');
    } else if (14 <= a && a <= 19) {
        console.log('teenager');
    } else if (20 <= a && a <= 65) {
        console.log('adult');
    } else if (a >= 66) {
        console.log('elder');
    } else
        console.log('out of bounds');
}
ages(-678)