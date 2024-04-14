import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAG4DZFxd7Dluszm4WJplNrlYkEL7wtkhM",
  authDomain: "tn-expense-tracker.firebaseapp.com",
  projectId: "tn-expense-tracker",
  storageBucket: "tn-expense-tracker.appspot.com",
  messagingSenderId: "282571308878",
  appId: "1:282571308878:web:4f3e5c148c498750e7281f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

// Retrieve the user ID from session storage
const userId = sessionStorage.getItem('userId');

    if (userId) {
      // Fetch and display user data
      fetchAndDisplayUserData(userId);
    } else {
      console.log('User ID not found in session storage');
    }

    function fetchAndDisplayUserData(userId) {
      const userDocRef = db.collection("users").doc(userId);

      userDocRef.get().then((docSnapshot) => {
        if (docSnapshot.exists) {
          const userData = docSnapshot.data();
          displayUserData(userData);
        } else {
          console.log("No such document!");
        }
      }).catch((error) => {
        console.error("Error getting document:", error);
      });
    }

    function displayUserData(userData) {
      // Get the HTML element to display user details
      const userDetailsDiv = document.getElementById('user-details');

      // Construct HTML to display user details
      const userDetailsHTML = `
        <p>Name: ${userData.name}</p>
        <p>Email: ${userData.email}</p>
        <p>Age: ${userData.age}</p>
        <!-- Add more user details as needed -->
      `;

      // Set the inner HTML of the element to display user details
      userDetailsDiv.innerHTML = userDetailsHTML;
    }
