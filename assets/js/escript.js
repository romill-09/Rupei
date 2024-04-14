import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore, collection, addDoc, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

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
    

    // Function to add an expense to the table
// Function to add an expense to the table
function addExpenseToTable(category, amount, date) {
    // Add expense to expenses array
    expenses.push({ category, amount, date });

    // Update total amount
    totalAmount += amount;
    totalAmountCell.textContent = 'Rs. ' + totalAmount.toFixed(2);

    // Create a new row
    const newRow = expenseTableBody.insertRow();

    // Insert cells with expense data
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    // Fill cells with expense data
    categoryCell.textContent = category;
    amountCell.textContent = 'Rs. ' + amount.toFixed(2);
    dateCell.textContent = date;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        // Find index of expense in array
        const expenseIndex = expenses.findIndex(expense => expense.category === category && expense.amount === amount && expense.date === date);
        if (expenseIndex !== -1) {
            // Update total amount
            totalAmount -= expenses[expenseIndex].amount;
            totalAmountCell.textContent = 'Rs. ' + totalAmount.toFixed(2);
            // Remove expense from array and table
            expenses.splice(expenseIndex, 1);
            expenseTableBody.removeChild(newRow);
        }
    });

    // Append delete button to delete cell
    deleteCell.appendChild(deleteBtn);
}

});

