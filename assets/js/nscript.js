document.addEventListener('DOMContentLoaded', function() {
    function calculateNetWorth() {
        var assets = parseFloat(document.getElementById('assets').value);
        var liabilities = parseFloat(document.getElementById('liabilities').value);
        var netWorth = assets - liabilities;

        var resultElement = document.getElementById('result');

        if (isNaN(netWorth)) {
            resultElement.innerHTML = "Please enter valid numbers for assets and liabilities.";
        } else {
            resultElement.innerHTML = "Your net worth is: Rs." + netWorth.toFixed(2);
        }
    }

    var calculateButton = document.getElementById('calculatenetworthbutton');
    calculateButton.addEventListener('click', calculateNetWorth);
});