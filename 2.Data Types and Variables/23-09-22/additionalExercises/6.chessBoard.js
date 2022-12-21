function chessBoard(number) {
    let row = number;
    let column = number;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    console.log('black');
                } else {
                    console.log('white');
                }
            } else if (i % 2 === 1) {
                if (j % 2 === 0) {
                    console.log('white');
                } else {
                    console.log('black');
                }
            }
        }
    }
}
chessBoard(
    3
)