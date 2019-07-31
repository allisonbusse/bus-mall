import productList from './data/products.js';

const store = {
    storage: window.localStorage,
    
    // Save item to store
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },

    // Get item from store
    get(key) {
        const json = store.storage.getItem(key);
        const parsedItem = JSON.parse(json);
        return parsedItem;
    },

    getProducts() {
        let products = store.get('products');
        if(!products) {
            store.save('products', productList);
            products = productList;
        }
        return products;
    }

};

export default store;