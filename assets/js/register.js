import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

import { getDatabase, ref, set, onValue, push } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getFirestore, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { doc, setDoc, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
// Your web app's Firebase configuration
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
const submitClick = document.getElementById("updateButton");

  // Validate contactNo
  if (!/^\d{10}$/.test(contactNo)) {
    alert("Contact No. must be exactly 10 digits long.");
    return;
  }
  
submitClick.addEventListener("click", async(e) => {
  e.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const contactNo = document.getElementById("contactNo").value;
  const employmentType = document.getElementById("employmentType").value;
  const annualIncome = document.getElementById("annualIncome").value;

  try {
    // Add a new document to the "users" collection
    await addDoc(collection(db, "users"), {
      fullName,
      contactNo,
      employmentType,
      annualIncome
    });
    console.log("Document successfully written!");
    // Optionally, you can redirect the user to another page after successful submission
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Error writing document: ", error);
  }
})