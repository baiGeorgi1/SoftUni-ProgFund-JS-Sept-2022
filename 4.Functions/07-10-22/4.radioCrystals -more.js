function crystal(arr) {
    let targetThickness = arr.shift();
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        let chunk = arr[i];
        if (chunk > targetThickness){
            console.log(`Processing chunk ${chunk} microns`);
        while (chunk !== targetThickness) {
            let cut = 0;
            let lap = 0;
            let grind = 0;
            let etch = 0;
            while ((chunk / 4) >= targetThickness) {
                chunk /= 4;
                cut++;
                if ((chunk / 4) < targetThickness) {
                    console.log(`Cut x${cut}`);
                    chunk = Math.floor(chunk);
                    console.log(`Transporting and washing`);
                }
            }
            while ((chunk * 0.8) >= targetThickness) {
                chunk *= 0.8;
                lap++;
                if ((chunk * 0.8) < targetThickness) {
                    console.log(`Lap x${lap}`);
                    chunk = Math.floor(chunk);
                    console.log(`Transporting and washing`);
                }
            }
            while ((chunk - 20) >= targetThickness) {
                chunk -= 20;
                grind++;
                if ((chunk - 20) < targetThickness) {
                    console.log(`Grind x${grind}`);
                    chunk = Math.floor(chunk);
                    console.log(`Transporting and washing`)
                }
            }
            while ((chunk-2) >= targetThickness) {
                chunk -= 2;
                etch++;
                if (chunk === targetThickness){
                    console.log(`Etch x${etch}`);
                    chunk = Math.floor(chunk);
                    console.log(`Transporting and washing`);
                }
                if (chunk < targetThickness) {
                    console.log(`Etch x${etch}`);
                    chunk = Math.floor(chunk);
                    console.log(`Transporting and washing`);
                    chunk += 1;
                    console.log(`X-ray x1`);

                }
            }
        }
        console.log(`Finished crystal ${chunk} microns`);
        }else {
            break;
        }      
    }
}
crystal([1000, 4000, 8100])