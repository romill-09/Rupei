

/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, mainId) =>{
   const toggle = document.getElementById(toggleId),
   sidebar = document.getElementById(sidebarId),
   main = document.getElementById(mainId)

   if(toggle && sidebar && main){
       toggle.addEventListener('click', ()=>{
           /* Show sidebar */
           sidebar.classList.toggle('show-sidebar')
           /* Add padding main */
           main.classList.toggle('main-pd')
       })
   }
}
showSidebar('header-toggle','sidebar', 'main')

/*=============== LINK ACTIVE ===============*/
const sidebarLink = document.querySelectorAll('.sidebar__link')

function linkColor(){
    sidebarLink.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}

sidebarLink.forEach(l => l.addEventListener('click', linkColor))



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

import { getDatabase, ref, set, onValue, push } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getFirestore, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { doc, setDoc, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// Initialize Firebase Authentication
const firebaseConfig = {
    apiKey: "AIzaSyAG4DZFxd7Dluszm4WJplNrlYkEL7wtkhM",
    authDomain: "tn-expense-tracker.firebaseapp.com",
    projectId: "tn-expense-tracker",
    storageBucket: "tn-expense-tracker.appspot.com",
    messagingSenderId: "282571308878",
    appId: "1:282571308878:web:4f3e5c148c498750e7281f"
  };
// Get the logout link element
const app = initializeApp(firebaseConfig);
const auth = getAuth();

//logout
function logout() {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('User signed out!');
        // Redirect to the signup page
        window.location.href = 'signup.html'; // Adjust the URL as needed
    }).catch((error) => {
        // An error happened.
        console.error('Error signing out:', error);
    });
}

// Check if user is signed in
auth.onAuthStateChanged((user) => {
    if (!user) {
        // No user is signed in.
        console.log('No user is signed in.');
        // Redirect to the signup page
        window.location.href = 'signup.html'; // Adjust the URL as needed
    }
});


