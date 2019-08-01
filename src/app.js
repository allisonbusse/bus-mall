import store from './store.js';
import ProductSet from './data/product-set.js';

//Get list of products
const products = store.getProducts();

//Copy the list and make a master version to add and remove from
let masterProductList = new ProductSet(products);
let currentDisplay = [];

//Get domain elements
const imageOne = document.getElementById('choice-one');
const imageTwo = document.getElementById('choice-two');
const imageThree = document.getElementById('choice-three');


//Generate a random product and push to array
const randomProductOne = masterProductList.getRandomProduct();
imageOne.firstChild.src = randomProductOne.image;
imageOne.firstChild.id = randomProductOne.id;
currentDisplay.push(randomProductOne);
    
    //Generate second random product and push to array
const randomProductTwo = masterProductList.getRandomProduct();
imageTwo.firstChild.src = randomProductTwo.image;
imageTwo.firstChild.id = randomProductTwo.id;
currentDisplay.push(randomProductTwo);
    
    //Generate third random product and push to array
const randomProductThree = masterProductList.getRandomProduct();
imageThree.firstChild.src = randomProductThree.image;
imageThree.firstChild.id = randomProductThree.id;
currentDisplay.push(randomProductThree);


// Set up button functionality
let userClicks = 0;

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', handleUserChoice);
}
function handleUserChoice(event) {
    // Check which button triggered click and save to store
    const whichButton = event.target.id;
    store.addProductCode(whichButton);
    store.saveEachDisplay(currentDisplay);
    
    // Create a new class
    let refreshedProductList = new ProductSet(products);
    
    // Remove currently displayed images from that class
    for(let i = 0; i < currentDisplay.length; i++) {
        refreshedProductList.removeProduct(currentDisplay[i].id);
    }
    // Reset current display array
    currentDisplay = [];
    
    //Generate a random product and display image and push to array
    const randomProductOne = refreshedProductList.getRandomProduct();
    imageOne.firstChild.src = randomProductOne.image;
    imageOne.firstChild.id = randomProductOne.id;
    currentDisplay.push(randomProductOne);
    
    //Generate second random product and display image and push to array
    const randomProductTwo = refreshedProductList.getRandomProduct();
    imageTwo.firstChild.src = randomProductTwo.image;
    imageTwo.firstChild.id = randomProductTwo.id;
    currentDisplay.push(randomProductTwo);
    
    //Generate third random product and push to array
    const randomProductThree = refreshedProductList.getRandomProduct();
    imageThree.firstChild.src = randomProductThree.image;
    imageThree.firstChild.id = randomProductThree.id;
    currentDisplay.push(randomProductThree);
    
    
    userClicks++;
    let statusBar = document.getElementById('status-bar-border');
    let barIncrement = document.createElement('div');
    barIncrement.classList.add('status-bar');
    statusBar.appendChild(barIncrement);
    if(userClicks === 25) {
        const imageSection = document.getElementById('image-section');
        imageSection.classList.add('hidden');
        const resultsSection = document.getElementById('bottom');
        resultsSection.classList.remove('hidden');
    }
}

