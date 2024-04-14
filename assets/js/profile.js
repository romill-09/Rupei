import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', async function() {
    // Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAG4DZFxd7Dluszm4WJplNrlYkEL7wtkhM",
      authDomain: "tn-expense-tracker.firebaseapp.com",
      projectId: "tn-expense-tracker",
      storageBucket: "tn-expense-tracker.appspot.com",
      messagingSenderId: "282571308878",
      appId: "1:282571308878:web:4f3e5c148c498750e7281f",
    };

    // Initialize Firebase app
    const firebaseApp = initializeApp(firebaseConfig);

    const auth = getAuth(firebaseApp);

    const db = getFirestore(firebaseApp);

    const user = auth.currentUser;
    if (user) {
       
        document.getElementById('fullName').textContent = user.displayName;
        document.getElementById('contactNo').textContent = user.phoneNumber;
        document.getElementById('emailId').textContent = user.email;

        const q = query(collection(db, "users"), where("email", "==", user.email));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            querySnapshot.forEach(doc => {
                const userData = doc.data();
                // Display user details
                document.getElementById('employmentType').textContent = userData.employmentType;
                document.getElementById('annualIncome').textContent = userData.annualIncome;
                document.getElementById('totalBudget').textContent = userData.totalBudget;
                document.getElementById('spent').textContent = userData.spent;
                document.getElementById('remaining').textContent = userData.remaining;
            });
        } else {
            console.log("No user data found for the current user.");
        }
    } else {
        // No user is signed in
        console.log('No user signed in.');
    }
});
