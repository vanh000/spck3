import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAJ1S4zCvOxTQJM3AedGvw4oeRWrHYAwnQ",
    authDomain: "buoi3-fead9.firebaseapp.com",
    projectId: "buoi3-fead9",
    storageBucket: "buoi3-fead9.firebasestorage.app",
    messagingSenderId: "140890254383",
    appId: "1:140890254383:web:2e4bb630d6349a9d9e2ada"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const auth = getAuth(app);
export default auth;