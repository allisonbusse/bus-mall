import store from './store.js';

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
console.log(displayHistory);

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