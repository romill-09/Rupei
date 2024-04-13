import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

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
const db = getFirestore(app);
const colRef = collection(db, 'Insurance');

getDocs(colRef)
    .then((querySnapshot) => {
        const insuranceCategories = {
            high: [],
            moderate: [],
            "less risk": [] // Enclosed "less risk" in quotes
        };

        // Group insurances by risk type
        querySnapshot.forEach((doc) => {
            const insuranceData = doc.data();
            const riskType = insuranceData.type;

            // Check if the riskType is defined in insuranceCategories, if not, initialize it as an empty array
            if (!insuranceCategories[riskType]) {
                insuranceCategories[riskType] = [];
            }

            insuranceCategories[riskType].push(insuranceData);
        });

        // Display insurances by risk type
        const insuranceList = document.querySelector('.insurance-list');

        // Helper function to create insurance items
        const createInsuranceItem = (insurance) => {
            const insuranceItem = document.createElement('div');
            insuranceItem.classList.add('insurance-item');

            const insuranceName = document.createElement('h3');
            insuranceName.textContent = insurance.name;
            insuranceItem.appendChild(insuranceName);

            const insurancePrice = document.createElement('p');
            insurancePrice.textContent = `Price: ${insurance.price}`;
            insuranceItem.appendChild(insurancePrice);

            return insuranceItem;
        };

        // Create category containers and populate with insurance items
        for (const [riskType, insurances] of Object.entries(insuranceCategories)) {
            if (insurances.length > 0) {
                // Create a category container
                const categoryContainer = document.createElement('div');
                categoryContainer.classList.add('category-container');

                // Create category heading
                const categoryHeading = document.createElement('h2');
                categoryHeading.textContent = riskType.toUpperCase() + " Risk";
                categoryContainer.appendChild(categoryHeading);

                // Create container for insurance items
                const insuranceItemsContainer = document.createElement('div');
                insuranceItemsContainer.classList.add('insurance-items-container');

                // Add insurance items to the container
                insurances.forEach((insurance) => {
                    const insuranceItem = createInsuranceItem(insurance);
                    insuranceItemsContainer.appendChild(insuranceItem);
                });

                categoryContainer.appendChild(insuranceItemsContainer);
                insuranceList.appendChild(categoryContainer);
            }
        }
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
