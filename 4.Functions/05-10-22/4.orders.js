function orders(product, price) {
    let order = product;
    let productPrice = price;


    switch (order) {
        case 'coffee':
            productPrice *= 1.5;
            break;
        case 'coke':
            productPrice *= 1.4;
            break;
        case 'water':
            productPrice *= 1;
            break;
        case 'snacks':
            productPrice *= 2;
            break;
        default:
            productPrice *= error;
            break;
    }
    console.log(productPrice.toFixed(2));
}
orders("water", 5)