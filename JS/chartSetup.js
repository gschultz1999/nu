import centerTextPlugin from './centerTextPlugin.js';

// First Pie Chart
const ctx1 = document.getElementById('myPieChart1').getContext('2d');
const data1 = {
    labels: ['Correct', 'Incorrect'],
    datasets: [{
        label: 'Test Results',
        data: [75, 25], // Example percentages
        backgroundColor: ['#4CAF50', '#F44336'],
        hoverOffset: 4,
    }]
};
const options1 = {
    plugins: { legend: { 
        display: true,
        position: 'bottom' 
    } 
},
    cutout: '70%', // Donut effect
};
new Chart(ctx1, {
    type: 'doughnut',
    data: data1,
    options: options1,
});

// Second Pie Chart
const ctx2 = document.getElementById('myPieChart2').getContext('2d');
const data2 = {
    labels: ['Flashcards Mastered', 'Flashcards Remaining'],
    datasets: [{
        label: 'Flashcard Progress',
        data: [50, 50], // Example percentages
        backgroundColor: ['#2196F3', '#FFC107'],
        hoverOffset: 4,
    }]
};
const options2 = {
    plugins: { legend: { 
        display: true,
        position: 'bottom'
    } 
},
    cutout: '70%',
};
new Chart(ctx2, {
    type: 'doughnut',
    data: data2,
    options: options2,
});

// Register Plugin
Chart.register(centerTextPlugin);
