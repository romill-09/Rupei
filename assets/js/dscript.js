const chartData = {
  labels: ["Food", "Gifts",  "Shopping", "Borrowed", "Recharge", "Invest", "Sports", "Personal Care",  "Savings", "Charitable Donations"],
  data: [/* Data values corresponding to each category */]
};

// Assuming you have data values for each category
// For demonstration, I'll provide some example data values
const foodData = 25;
const giftsData = 8;
const shoppingData = 18;
const borrowedData = 3;
const rechargeData = 5;
const investData = 7;
const sportsData = 6;
const personalCareData = 9;
const savingsData = 20;
const charitableDonationsData = 4;

// Pushing data values into the chartData object
chartData.data.push(
  foodData,
  giftsData,
  shoppingData,
  borrowedData,
  rechargeData,
  investData,
  sportsData,
  personalCareData,
  savingsData,
  charitableDonationsData
);

const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".programming-stats .details ul");

const getCategoryColor = (category) => {
  switch (category) {
    case "Food":
      return "#FF6347"; // Red
    case "Gifts":
      return "#800080"; // Purple
    
    case "Shopping":
      return "#008080"; // Teal
    case "Borrowed":
      return "#FF8C00"; // Dark Orange
    
    case "Recharge":
      return "#2F4F4F"; // Dark Slate Gray
    case "Invest":
      return "#008000"; // Green
    case "Sports":
      return "#FFA07A"; // Light Salmon
    case "Personal Care":
      return "#B0E0E6"; // Powder Blue

    case "Savings":
      return "#228B22"; // Forest Green
    case "Charitable Donations":
      return "#9400D3"; // Dark Violet
    default:
      return "#000000"; // Black (default)
  }
};
new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "Expense",
        data: chartData.data,
        backgroundColor: chartData.labels.map(category => getCategoryColor(category))
      },
    ],
  },
  options: {
    borderWidth: 2,
    borderRadius: 0.20,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true // This will make legend markers as small colored dots
        }
      },
    },
  },
});


populateUl();