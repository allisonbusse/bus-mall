import store from '../src/store.js';
import sandwiches from '../src/data/sandwiches.js';

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
    const key = 'sandwich';
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
    const expected = sandwiches;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = store.getProducts();
    
    //Assert
    assert.deepEqual(result, expected);
});

test('get shopping cart', assert => {
    //Arrange
    // Set up your parameters and expectations
    const expected = [];

    //Act 
    // Call the function you're testing and set the result to a const
    const result = store.getShoppingCart();
    
    //Assert
    assert.deepEqual(result, expected);
});

test('add product code', assert => {
    //Arrange
    // Set up your parameters and expectations
    const expected = [{ code: 'blta', quantity: 1 }];
    const code = 'blta';

    //Act 
    // Call the function you're testing and set the result to a const
    store.addProductCode(code);
    const result = store.getShoppingCart();
    
    //Assert
    assert.deepEqual(result, expected);
});


test('add multiple product code', assert => {
    //Arrange
    // Set up your parameters and expectations
    const expected = [{ code: 'blta', quantity: 3 }];
    const code = 'blta';

    //Act 
    // Call the function you're testing and set the result to a const
    store.addProductCode(code);
    store.addProductCode(code);
    store.addProductCode(code);
    const result = store.getShoppingCart();
    
    //Assert
    assert.deepEqual(result, expected);
});


test('get product code', assert => {
    //Arrange
    // Set up your parameters and expectations
    const expected = sandwiches[0];
    const code = 'blta';

    //Act 
    // Call the function you're testing and set the result to a const
   // console.log(sandwiches[0]);
    const result = store.getProduct(code);
    
    //Assert
    assert.deepEqual(result, expected);
});

test('add new product', assert => {
    //Arrange
    // Set up your parameters and expectations
    const product = {
        code: 'banh-mi',
        name: 'Banh Mi',
        image: 'banh-mi.jpg',
        description: 'Spicy and delicious', 
        category: 'hot',
        price: 4.00,
        cost: 2.50
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    // console.log(sandwiches[0]);
    store.addProduct(product);
    const sandwiches = store.getProducts();
    
    //Assert
    assert.deepEqual(sandwiches[sandwiches.length - 1], product);
});

test('get sales', assert => {
    //Arrange
    // Set up your parameters and expectations
    const expected = [];

    //Act 
    // Call the function you're testing and set the result to a const
    const result = store.getSales();
    
    //Assert
    assert.deepEqual(result, expected);
});

test('place order', assert => {
    //Arrange
    // Set up your parameters and expectations
    const expected = [{ code: 'blta', quantity: 2 }];
    const shoppingCartItem = {
        code: 'blta',
        quantity: 2
    };
   
    //Act 
    // Call the function you're testing and set the result to a const
    store.placeOrder(shoppingCartItem);
    const result = store.getSales();
    
    //Assert
    assert.deepEqual(result, expected);
});

