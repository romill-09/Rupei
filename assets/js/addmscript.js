// export 
let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expenseTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

// Function to add an expense
function addExpense(category, amount, date) {
    expenses.push({ category, amount, date });

    totalAmount += amount;
    totalAmountCell.textContent = 'Rs. ' + totalAmount.toFixed(2); // Displaying Rs. before the amount

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        const expenseIndex = expenses.findIndex(expense => expense.category === category && expense.amount === amount && expense.date === date);
        if (expenseIndex !== -1) {
            totalAmount -= expenses[expenseIndex].amount;
            totalAmountCell.textContent = 'Rs. ' + totalAmount.toFixed(2); // Update total amount
            expenses.splice(expenseIndex, 1);
            expenseTableBody.removeChild(newRow);
        }
    });

    categoryCell.textContent = category;
    amountCell.textContent = 'Rs. ' + amount.toFixed(2); // Displaying Rs. before the amount
    dateCell.textContent = date;
    deleteCell.appendChild(deleteBtn);
}

// Function to get the 1st of the current month in YYYY-MM-DD format
function getFirstDayOfMonth() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;

    // Add leading zero if month is single digit
    month = (month < 10) ? '0' + month : month;

    return `${year}-${month}-01`;
}

// Adding default expenses for savings, SIP, and stocks with the 1st of every month as the date
addExpense('Father', 100000, getFirstDayOfMonth());
addExpense('Mother', 5000, getFirstDayOfMonth());

// Event listener for adding custom expenses
addBtn.addEventListener('click', function(){
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if(category === ''){
        alert('Please select a category');
        return;
    }
    if(isNaN(amount) || amount <= 0){
        alert('Please enter a valid amount');
        return;
    }
    if(date === ''){
        alert('Please select a date');
        return;
    }

    addExpense(category, amount, date);
});
