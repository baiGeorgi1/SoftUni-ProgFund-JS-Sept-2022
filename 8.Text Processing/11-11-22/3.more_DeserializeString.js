function deserial(array) {
    let taskArr = array.slice();
    let line = taskArr.shift();
    const sumArr = [];
    const letterObj = {};
    while (line !== 'end') {
        let [letter, other] = line.split(':');
        letterObj[letter] = other.split('/');
        let indexes = other.split('/');
        for (const index of indexes) {
            sumArr.push(index);
        }
        line = taskArr.shift();
    }
    sumArr.sort((a, b) => a - b);

    for (let index of sumArr) {
        for (const key in letterObj) {
            for (let num of letterObj[key]) {
                if (num === index) {
                    sumArr.splice(index, 1, key);
                    break;
                }
            }
        }
    }
    console.log(sumArr.join(''));
}

deserial(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']
)