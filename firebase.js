<script type="module">
  // Firebase 12.7.0 imports
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
  import { getFirestore, collection, addDoc, getDocs, Timestamp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

  // Your Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyBIoX7KC131wFiGsmwIc-hWp6td6Yu7qWY",
    authDomain: "autowebsite-testing.firebaseapp.com",
    projectId: "autowebsite-testing",
    storageBucket: "autowebsite-testing.appspot.com",
    messagingSenderId: "86153129960",
    appId: "1:86153129960:web:6a60b1bcbddfb12c6f7e5d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  // Export for other modules (if using multiple files)
  export { auth, db, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, collection, addDoc, getDocs, Timestamp };
</script>
