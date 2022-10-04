function arrRotation(arr, rotation) {
    let rotate = rotation;
    for (let i = 0; i < rotate; i++) {
        let indexToMove = arr.shift();
        arr.push(indexToMove);
    }
    console.log(arr.join(' '));
}
arrRotation([51, 47, 32, 61, 21], 2)