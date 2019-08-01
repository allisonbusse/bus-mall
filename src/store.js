import productList from './data/products.js';
import ProductSet from './data/product-set.js';

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
    },

    findProduct(sandwiches, code) {
        for(let i = 0; i < sandwiches.length; i++) {
            const sandwich = sandwiches[i];
            
            if(sandwich.code === code) {
                return sandwich;
            }
        }
        return null;
    },

    addProductCode(code) {
        let clickHistory = this.getClickHistory();
        const lineItem = this.findProduct(clickHistory, code);
        if(lineItem) {
            lineItem.quantity++;
        }
        else {
            const lineItem = {
                code: code,
                quantity: 1
            };

            clickHistory.push(lineItem);
        }
        
        store.save('user-clicks', clickHistory);
    },

    getClickHistory() {
        let clickHistory = store.get('user-clicks');
        if(!clickHistory) {
            clickHistory = [];
            
        }
        return clickHistory;
    },

    getItemsDisplayed() {
        let itemsDisplayed = store.get('items-displayed');
        if(!itemsDisplayed) {
            itemsDisplayed = [];
        }
        return itemsDisplayed;
    },

    saveEachDisplay(currentArray) {
        for(let i = 0; i < currentArray.length; i++) {
            let itemsDisplayed = this.getItemsDisplayed();
            let code = currentArray[i].id;
            const lineItem = this.findProduct(itemsDisplayed, code);

            if(lineItem) {
                lineItem.quantity++;
            }
            else {
                const lineItem = {
                    code: code,
                    quantity: 1
                };
    
                itemsDisplayed.push(lineItem);
            }
            
            store.save('items-displayed', itemsDisplayed);
        }}
};





export default store;