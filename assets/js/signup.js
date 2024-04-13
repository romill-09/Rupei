// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// Your web app's Firebase configuration
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
const provider = new GoogleAuthProvider();

const signInButton = document.getElementById("signInButton");
const signOutButton = document.getElementById("signOutButton");
const registerButton = document.getElementById("registerButton");

registerButton.style.display = "none";

const signInWithGoogle = async () => {
  console.log("ji")
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(user);
    // Show the register button after successful sign-in
    registerButton.style.display = "block";
  } catch (error) {
    console.error(error);
  }
};

// Sign-out function
// try {
//   await signOut(auth);
//   alert("You have signed out successfully!");
//   // Hide the register button after sign-out
//   registerButton.style.display = "none";
// } catch (error) {
//   console.error(error);
// }

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, show the register button
    registerButton.style.display = "block";
  } else {
    // User is signed out, hide the register button
    registerButton.style.display = "none";
  }
});

signInButton.addEventListener("click", () => {
  signInWithGoogle()

});

// Redirect to register page on register button click
registerButton.addEventListener("click", () => {
  window.location.href = "register.html";
});
updateButton.addEventListener("click", () => {
  window.location.href = "template1.html";
});