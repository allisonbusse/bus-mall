import { getRandomNumber } from '../random-generator.js';

class ProductSet {
    constructor(products) {
        this.list = products.slice();
    } 

    getRandomProduct() {
        const index = getRandomNumber(this.list.length);
        const randomProduct = this.list[index];
        return randomProduct;
    }

    // removeProduct(item) {
    //     return this.list.splice(item, 1);
    // }

    removeProduct(productId) {
        const list = this.list;
        for(let i = 0; i < list.length; i++) {
            const product = list[i];
            if(product.id === productId) {
                list.splice(i, 1);
                return this.list;
            }
        }
    }
    
}

export default ProductSet;

