import { getRandomNumber } from '../random-generator.js';

class ProductSet {
    constructor(products) {
        this.list = products.slice();
    } 

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

    getRandomProduct() {
        const index = getRandomNumber(this.list.length);
        const randomProduct = this.list[index];
        this.removeProduct(randomProduct.id);
        return randomProduct;
    }

    

    // removeProduct(item) {
    //     return this.list.splice(item, 1);
    // }

    
}

export default ProductSet;

