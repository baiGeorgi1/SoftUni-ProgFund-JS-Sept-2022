function cats(arr) {
    for (const cat of arr) {
        let [name, age] = cat.split(' ');
        console.log(`${name}, age ${age} says Meow`);
    }
}
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])