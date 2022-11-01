function storeProvision(arr1, arr2) {
    const productsInStore = {};
    let length = arr1.length;
    let lengthTwo = arr2.length;

    for (let index = 0; index < length; index += 2) {
        let currentProduct = arr1[index];
        productsInStore[currentProduct] = Number(arr1[index + 1]);
    }
    for (let i = 0; i < lengthTwo; i += 2) {
        const deliveryProd = arr2[i];
        if (!productsInStore.hasOwnProperty(deliveryProd)) {
            productsInStore[deliveryProd] = 0;
        }
        productsInStore[deliveryProd] += Number(arr2[i + 1]);
    }
    for (const key in productsInStore) {
        console.log(`${key} -> ${productsInStore[key]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]


)