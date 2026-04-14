let isLoggingIn = true;

function toggleForm() {
    isLoggingIn = !isLoggingIn;
    // Update the UI labels
    document.querySelector('h2').innerText = isLoggingIn ? "Login to your wallet" : "Create StudyCoin Account";
    document.getElementById('main-btn').innerText = isLoggingIn ? "Sign In" : "Sign Up";
    document.getElementById('toggle-text').innerHTML = isLoggingIn 
        ? 'Don\'t have an account? <span onclick="toggleForm()" style="color:orange; cursor:pointer;">Sign Up</span>'
        : 'Already have an account? <span onclick="toggleForm()" style="color:orange; cursor:pointer;">Login</span>';
}

function handleAuth() {
    const email = document.querySelector('input[type="email"]').value;
    const pass = document.querySelector('input[type="password"]').value;

    if (!email || !pass) {
        alert("Please fill in both fields.");
        return;
    }

    if (isLoggingIn) {
        // Check if user exists in browser memory
        const savedPass = localStorage.getItem(email);
        if (savedPass === pass) {
            alert("Success! Welcome to StudyCoin.");
            // Add your dashboard link here later
        } else {
            alert("Account not found or wrong password.");
        }
    } else {
        // Save user to browser memory
        localStorage.setItem(email, pass);
        alert("Account Created! You can now log in.");
        toggleForm(); // Switch back to login mode
    }
}

<script src="script.js"></script>
<!DOCTYPE html>
<html>
<head>
  <title>StudyCoin Login</title>
</head>
<body>

  <h2>Login</h2>

  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">

  <button onclick="signup()">Sign Up</button>
  <button onclick="login()">Login</button>

  <p id="msg"></p>

  <!-- Firebase -->
  <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"></script>

  <script>
    // 🔑 PASTE YOUR CONFIG HERE
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      appId: "YOUR_APP_ID"
    };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    // SIGN UP
    function signup() {
      auth.createUserWithEmailAndPassword(
        email.value,
        password.value
      ).then(() => {
        msg.innerText = "Account Created!";
      }).catch(err => {
        msg.innerText = err.message;
      });
    }

    // LOGIN
    function login() {
      auth.signInWithEmailAndPassword(
        email.value,
        password.value
      ).then(() => {
        msg.innerText = "Login Successful!";
      }).catch(err => {
        msg.innerText = err.message;
      });
    }
  </script>

</body>
</html>
