import store from './store.js';
import products from './data/products.js';

const userClicks = store.getClickHistory();
const displayHistory = store.getItemsDisplayed();
const masterList = store.getProducts();

const clickNumber = [];
const displayNumber = [];
const itemNames = [];


for(let i = 0; i < displayHistory.length; i++) {
    const item = displayHistory[i];
    displayNumber.push(item.quantity);
    for(let z = 0; z < masterList.length; z++) {
        if(displayHistory[i].id === masterList[z].id) {
            itemNames.push(masterList[z].name);
        }
    }
    for(let j = 0; j < userClicks.length; j++) {
        if(displayHistory[i].id === userClicks[j].id) {
            clickNumber.push(userClicks[j].quantity);
        } 
    }

}

const ctx = document.getElementById('chart');
// eslint-disable-next-line no-undef
Chart.defaults.global.defaultFontColor = 'white';
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: itemNames,
        datasets: [{
            label: 'Number of Clicks',
            data: clickNumber,
            backgroundColor: 'white',
            barThickness: 'flex'
        },
        {
            label: 'Number of Views',
            data: displayNumber,
            backgroundColor: '#9b9b9b',
        }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                barThickness: 10
            }],
            xAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1,
                        min: 0,
                        max: 10
                    }
                }]
        },
        legend: {
            labels: {
                fontColor: 'white'
            }
        }
    }
});

// Reset button functionality
const resetButton = document.getElementById('reset-survey');
resetButton.addEventListener('click', () => {
    // Reset user clicks
    let clickHistory = store.getClickHistory();
    let displayHistory = store.getItemsDisplayed();
  
    for(let i = 0; i < products.length; i++){
        for(let j = 0; j < clickHistory.length; j++) {
            if(clickHistory[j].id === products[i].id) {
                products[i].clicks += clickHistory[j].quantity;
            }
        }
        for(let z = 0; z < displayHistory.length; z++) {
            if(displayHistory[z].id === products[i].id) {
                products[i].displays += displayHistory[z].quantity;
            }
        }
    }
    store.save('products', products);
    clickHistory = [];
    store.save('user-clicks', clickHistory);
    displayHistory = [];
    store.save('items-displayed', displayHistory);
});



