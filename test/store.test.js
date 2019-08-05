import store from '../src/store.js';
import products from '../src/data/products.js';

const test = QUnit.test;
QUnit.module('Data Store Tests');
QUnit.testStart(() => {
    store.storage.clear();
}); 

store.storage = window.sessionStorage;


test('check storage location', assert => {
    //Arrange
    // Set up your parameters and expectations
    const expected = window.sessionStorage;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = store.storage;

    //Assert
    assert.equal(result, expected);
});

test('check get and save', assert => {
    //Arrange
    // Set up your parameters and expectations
    const key = 'products';
    const sandwich = { type: 'blta' };

    //Act 
    // Call the function you're testing and set the result to a const
    store.save(key, sandwich);
    const result = store.get(key);

    //Assert
    assert.deepEqual(result, sandwich);
});

test('get products', assert => {
    //Arrange
    // Set up your parameters and expectations
    const expected = products;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = store.getProducts();
    
    //Assert
    assert.deepEqual(result, expected);
});

test('find product info', assert => {
    //Arrange
    // Set up your parameters and expectations
    const code = 'pen';
    
    const expected = {
        id: 'pen',
        name: 'Utensil Pen',
        image: '/assets/pen.jpg',
        clicks: 0,
        displays: 0,
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const result = store.findProduct(products, code);

    //Assert
    assert.deepEqual(result, expected);
});

test('get click history', assert => {
    //Arrange
    // Set up your parameters and expectations
    const expected = [];

    //Act 
    // Call the function you're testing and set the result to a const
    const result = store.getClickHistory();
    
    //Assert
    assert.deepEqual(result, expected);
});




