import store from './store.js';

const userClicks = store.getClickHistory();
const displayHistory = store.getItemsDisplayed();
console.log(userClicks);
console.log(userClicks[0].code);

const itemLabels = [];
const clickNumber = [];
const displayNumber = [];


for(let i = 0; i < displayHistory.length; i++) {
    const item = displayHistory[i];
    itemLabels.push(item.code);
    displayNumber.push(item.quantity);
    let clickedItem;
    for(let j = 0; j < userClicks.length; j++) {
        if(displayHistory[i].code === userClicks[j].code) {
            clickedItem = userClicks[i];
            clickedItem.quantity++;
        }
    }
    clickNumber.push(clickedItem.quantity);

}


const ctx = document.getElementById('chart');
Chart.defaults.global.defaultFontColor = 'white';
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: itemLabels,
        datasets: [{
            label: 'Number of Clicks',
            data: clickNumber,
            backgroundColor: 'blue'
        },
        {
            label: 'Number of Views',
            data: displayNumber,
            backgroundColor: 'red'
        }
        ]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    min: 0,
                    max: 5
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