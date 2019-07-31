import store from './store.js';
import ProductSet from './data/product-set.js';

//Get list of products
const products = store.getProducts();

//Copy the list and make a master version to add and remove from
let masterProductList = new ProductSet(products);

//Get domain elements
const imageOne = document.getElementById('choice-one');
const imageTwo = document.getElementById('choice-two');
const imageThree = document.getElementById('choice-three');

populateProducts();

function populateProducts() {
//Generate a random product
    const randomProductOne = masterProductList.getRandomProduct();
    randomProductOne.position = imageOne;
    console.log(randomProductOne);

//Display the product image
    imageOne.firstChild.src = randomProductOne.image;

//Remove that product from the master version
    masterProductList.removeProduct(randomProductOne.id);

//Generate second random product
    const randomProductTwo = masterProductList.getRandomProduct();

// //Display second product image
    imageTwo.firstChild.src = randomProductTwo.image;

//Remove second product from master
    masterProductList.removeProduct(randomProductTwo.id);

//Generate third random product
    const randomProductThree = masterProductList.getRandomProduct();

// //Display third product image
    imageThree.firstChild.src = randomProductThree.image;

//Remove third product from master
    masterProductList.removeProduct(randomProductThree.id);

// Create array of current display
    let currentThreeProducts = [randomProductOne, randomProductTwo, randomProductThree];
    console.log(currentThreeProducts);
    let i;

    const newTestProducts = new ProductSet(products);
    let randomTest = newTestProducts.getRandomProduct();
    function newArray(randomTest) {

        for(i = 0; i < currentThreeProducts.length; i++) {

            if(currentThreeProducts.includes(randomTest)) {
                continue;
            } else {
                currentThreeProducts.push(randomTest);
                return currentThreeProducts;
            }
        }  
    }
}


// Set up button functionality
//const buttonArray = [imageOne, imageTwo, imageThree];
let imageOneVotes = 0;
let imageTwoVotes = 0;
let imageThreeVotes = 0;
let imageOneViews = 0;
let imageTwoViews = 0;
let imageThreeViews = 0;
//for(i = 0; i < buttonArray.length; i++) {
imageOne.addEventListener('click', () => {
    imageOneVotes++;
    imageOneViews++;
    imageTwoViews++;
    imageThreeViews++;
    let statusBar = document.getElementById('status-bar-border');
    let barIncrement = document.createElement('div');
    barIncrement.classList.add('status-bar');
    statusBar.appendChild(barIncrement);
    populateProducts();
});

imageTwo.addEventListener('click', () => {
    imageTwoVotes++;
    imageOneViews++;
    imageTwoViews++;
    imageThreeViews++;
    let statusBar = document.getElementById('status-bar-border');
    let barIncrement = document.createElement('div');
    barIncrement.classList.add('status-bar');
    statusBar.appendChild(barIncrement);
    populateProducts();
});

imageThree.addEventListener('click', () => {
    imageThreeVotes++;
    imageOneViews++;
    imageTwoViews++;
    imageThreeViews++;
    let statusBar = document.getElementById('status-bar-border');
    let barIncrement = document.createElement('div');
    barIncrement.classList.add('status-bar');
    statusBar.appendChild(barIncrement);
    populateProducts();
});

//}
    
// After 25 turns
// const imageSection = document.getElementById('image-section');
// imageSection.classList.add('hidden');
// const resultsSection = document.getElementById('bottom');
// resultsSection.classList.remove('hidden');