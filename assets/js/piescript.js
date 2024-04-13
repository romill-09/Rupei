document.addEventListener('DOMContentLoaded', function () {
  // Select the chart container
  var chartContainer = document.getElementById('donut-chart');

  // Create data for the chart
  var chartData = {
    labels: ['Property', 'Living', 'Investment', 'Bills', 'Vacation'],
    datasets: [{
      data: [35, 25, 20, 15, 5], // Adjusted values
      backgroundColor: [
        '#8B4513', // DarkBrown
        '#1E90FF', // DodgerBlue
        '#006400', // DarkGreen
        '#A52A2A', // Brown
        '#8A2BE2'  // BlueViolet
      ]
    }]
  };

  // Configure options for the chart
  var chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Expenses Breakdown'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  // Create a new donut chart instance
  var myDonutChart = new Chart(chartContainer, {
    type: 'doughnut',
    data: chartData,
    options: chartOptions
  });
});
