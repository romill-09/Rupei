const chartData = {
  labels: ["Food", "Travel", "College", "Clothes", "Gifts", "Medics", "Shopping", "Borrowed", "Fuel", "Recharge", "Invest", "Sports", "Personal Care", "Entertainment", "Holidays", "Savings", "Charitable Donations"],
  data: [/* Data values corresponding to each category */]
};

// Assuming you have data values for each category
// For demonstration, I'll provide some example data values
const foodData = 25
const travelData = 15;
const collegeData = 10;
const clothesData = 5;
const giftsData = 8;
const medicsData = 12;
const shoppingData = 18;
const borrowedData = 3;
const fuelData = 10;
const rechargeData = 5;
const investData = 7;
const sportsData = 6;
const personalCareData = 9;
const entertainmentData = 15;
const holidaysData = 10;
const savingsData = 20;
const charitableDonationsData = 4;

// Pushing data values into the chartData object
chartData.data.push(
  foodData,
  travelData,
  collegeData,
  clothesData,
  giftsData,
  medicsData,
  shoppingData,
  borrowedData,
  fuelData,
  rechargeData,
  investData,
  sportsData,
  personalCareData,
  entertainmentData,
  holidaysData,
  savingsData,
  charitableDonationsData
);

const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".programming-stats .details ul");

const getCategoryColor = (category) => {
  switch (category) {
    case "Food":
      return "#FF6347"; // Red
    case "Travel":
      return "#4682B4"; // Steel Blue
    case "College":
      return "#32CD32"; // Lime Green
    case "Clothes":
      return "#FFD700"; // Gold
    case "Gifts":
      return "#800080"; // Purple
    case "Medics":
      return "#4169E1"; // Royal Blue
    case "Shopping":
      return "#008080"; // Teal
    case "Borrowed":
      return "#FF8C00"; // Dark Orange
    case "Fuel":
      return "#A0522D"; // Sienna
    case "Recharge":
      return "#2F4F4F"; // Dark Slate Gray
    case "Invest":
      return "#008000"; // Green
    case "Sports":
      return "#FFA07A"; // Light Salmon
    case "Personal Care":
      return "#B0E0E6"; // Powder Blue
    case "Entertainment":
      return "#800000"; // Maroon
    case "Holidays":
      return "#808000"; // Olive
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