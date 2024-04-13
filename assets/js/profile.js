import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

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

const colRef
// Function to fetch user data from Firestore
// const fetchUserData = async () => {
//   try {
//     const docRef = doc(db, "users", "user-id"); // Replace "user-id" with the actual user ID
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       const userData = docSnap.data();
//       // Update HTML elements with the fetched data
//       document.getElementById("fullName").innerText = userData.fullName;
//       document.getElementById("contactNo").innerText = userData.contactNo;
//       document.getElementById("employmentType").innerText = userData.employmentType;
//       document.getElementById("annualIncome").innerText = userData.annualIncome;
//     } else {
//       console.log("No such document!");
//     }
//   } catch (error) {
//     console.error("Error fetching document: ", error);
//   }
// };

// // Call the fetchUserData function when the page loads
// window.onload = fetchUserData;
