// 1. Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// 2. Your specific Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADsDs1QtO2lai8DzA4JxvKg7Nf1lDk5E",
  authDomain: "studycoin-stc.firebaseapp.com",
  databaseURL: "https://studycoin-stc-default-rtdb.firebaseio.com",
  projectId: "studycoin-stc",
  storageBucket: "studycoin-stc.firebasestorage.app",
  messagingSenderId: "840351904766",
  appId: "1:840351904766:web:7ec85a6e8d2cdfa4c246af"
};

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 4. Handle the Login process
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get values from your input fields
            const email = document.getElementById('username').value; // In your HTML, the email input has id="username"
            const password = document.getElementById('password').value;

            // Sign in with Firebase
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    message.innerText = "Login successful! Welcome to StudyCoin.";
                    message.style.color = "green";
                    console.log("User logged in:", userCredential.user);
                    // window.location.href = "dashboard.html"; // Uncomment when you have a dashboard
                })
                .catch((error) => {
                    message.innerText = "Login failed: " + error.message;
                    message.style.color = "red";
                    console.error("Auth Error:", error.code);
                });
        });
    }
});
