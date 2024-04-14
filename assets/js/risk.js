// Define investment types and associated risks
const investmentTypes = {
    stocks: "high",
    bonds: "moderate",
    realEstate: "low",
    currency: "high",
    funds: "moderate",
    commodities: "low"
};

// Dummy user investment data for demonstration
let userInvestments = [];

// Function to add investment
const addInvestment = () => {
    const type = document.getElementById("type").value;
    const amount = parseFloat(document.getElementById("amount").value);
    
    // Check if amount is a valid number
    if (!isNaN(amount)) {
        userInvestments.push({ type, amount });
        displayInsights();
    } else {
        alert("Please enter a valid amount.");
    }
};

// Calculate risk exposure for each investment
const calculateRiskExposure = (investment) => {
    return investmentTypes[investment.type];
};

// Aggregate cumulative risk exposure
const calculateCumulativeRiskExposure = () => {
    let cumulativeRisk = 0;
    userInvestments.forEach((investment) => {
        const risk = calculateRiskExposure(investment);
        if (risk === "high") {
            cumulativeRisk += investment.amount * 0.1; // High risk exposure
        } else if (risk === "moderate") {
            cumulativeRisk += investment.amount * 0.05; // Moderate risk exposure
        } else if (risk === "low") {
            cumulativeRisk += investment.amount * 0.02; // Low risk exposure
        }
    });
    return cumulativeRisk;
};
// Display insights
const displayInsights = () => {
    const cumulativeRisk = calculateCumulativeRiskExposure();
    const insightsElement = document.getElementById("cumulative-risk");
    insightsElement.textContent = `Cumulative Risk Exposure: ₹${cumulativeRisk.toFixed(2)}`; // Displaying amount in rupees
};
