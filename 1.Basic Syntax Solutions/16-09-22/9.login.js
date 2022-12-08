function login(array) {
    const username = array.shift();
    let tries = 0;
    for (const word of array) {
        let passWord = word
            .split('')
            .reverse()
            .join('');
        if (username !== passWord) {
            if (tries >= 3) {
                console.log(`User ${username} blocked!`);
                return;
            }
            console.log('Incorrect password. Try again.');
            tries++;

        } else {
            console.log(`User ${username} logged in.`);
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA'])