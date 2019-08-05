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
    },

    findProduct(sandwiches, code) {
        for(let i = 0; i < sandwiches.length; i++) {
            const sandwich = sandwiches[i];
            
            if(sandwich.id === code) {
                return sandwich;
            }
        }
        return null;
    },

    addProductCode(id) {
        let clickHistory = this.getClickHistory();
        const lineItem = this.findProduct(clickHistory, id);
        if(lineItem) {
            lineItem.quantity++;
        }
        else {
            const lineItem = {
                id: id,
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

    getTotalClicks() {
        let totalClicks = store.get('total-clicks');
        if(!totalClicks) {
            totalClicks = [];
            
        }
        return totalClicks;
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
            let id = currentArray[i].id;
            const lineItem = this.findProduct(itemsDisplayed, id);

            if(lineItem) {
                lineItem.quantity++;
            }
            else {
                const lineItem = {
                    id: id,
                    quantity: 1
                };
    
                itemsDisplayed.push(lineItem);
            }
            
            store.save('items-displayed', itemsDisplayed);
        }}
};





export default store;