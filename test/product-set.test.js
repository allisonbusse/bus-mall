import store from '../src/store.js';
import products from '../src/data/products.js';
import ProductSet from '../src/data/product-set.js';

const test = QUnit.test;
QUnit.module('Product Data Tests');
QUnit.testStart(() => {
    store.storage.clear();
}); 



test('creates copy of source list', assert => {
    //Arrange
    // Set up your parameters and expectations
    

    //Act 
    // Call the function you're testing and set the result to a const
    const result = new ProductSet(products);

    //Assert
    assert.deepEqual(result.list, products);
    assert.notEqual(result.list, products);
});

test('get random product', assert => {
    //Arrange
    // Set up your parameters and expectations
    const productList = new ProductSet(products);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const randomProduct = productList.getRandomProduct();
    

    //Assert
    assert.notOk(productList.list.includes(randomProduct));
});

test('remove product', assert => {
    //Arrange
    // Set up your parameters and expectations
    const productList = new ProductSet(products);
    const removedProduct = products[0];

    //Act 
    // Call the function you're testing and set the result to a const
    const result = productList.removeProduct(removedProduct.id);
    
    //Assert
    assert.notOk(productList.list.includes(result));
});

