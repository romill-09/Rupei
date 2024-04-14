import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore, collection, addDoc, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

let expenses = [];
let totalAmount = 0;

document.addEventListener('DOMContentLoaded', function() {
    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAG4DZFxd7Dluszm4WJplNrlYkEL7wtkhM",
        authDomain: "tn-expense-tracker.firebaseapp.com",
        projectId: "tn-expense-tracker",
        storageBucket: "tn-expense-tracker.appspot.com",
        messagingSenderId: "282571308878",
        appId: "1:282571308878:web:4f3e5c148c498750e7281f"
      };
      

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore();
    const auth = getAuth();
    const addbtn = document.getElementById('add-btn');

    // Your JavaScript code here, including event listener assignments
    let expenses = [];
    let totalAmount = 0;

    const categorySelect = document.getElementById('category-select');
    const amountInput = document.getElementById('amount-input');
    const dateInput = document.getElementById('date-input');
    const addBtn = document.getElementById('add-btn');
    const expenseTableBody = document.getElementById('expense-table-body');
    const totalAmountCell = document.getElementById('total-amount');

    addBtn.addEventListener('click', async(e) => {
        e.preventDefault();
        const categorySelect = document.getElementById('category-select');
        const amountInput = document.getElementById('amount-input');
        const dateInput = document.getElementById('date-input');
        const totalAmountCell = document.getElementById('total-amount');
    
        try {
            await addDoc(collection(db, "expenses"), {
                category: categorySelect.value,
                amount: amountInput.value,
                date: dateInput.value,
                totalAmount: totalAmountCell.textContent
            });
            
        console.log("Document successfully written!");
        // Optionally, you can redirect the user to another page after successful submission
     }catch (error) {
        console.error("Error writing document: ", error);
     }
    })
    

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
    addExpense('Savings', 100, getFirstDayOfMonth());
    addExpense('SIP', 100, getFirstDayOfMonth());
    addExpense('Investment', 100, getFirstDayOfMonth());
    
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

})
