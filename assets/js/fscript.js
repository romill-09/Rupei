const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const expenditureValues = [6200, 9000, 10200, 200,0 , 0, 0, 0, 0, 0, 0, 0];

const ctx = document.getElementById('my-chart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: months,
    datasets: [{
      label: 'Expenditure',
      data: expenditureValues,
      backgroundColor:'#55BE96', // Red color with transparency
      borderColor: '#55BE96 ', // Solid red border
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Expenditure (Rs.)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Months'
        }
      }
    }
  }
});
