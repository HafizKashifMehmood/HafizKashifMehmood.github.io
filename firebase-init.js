// Firebase initialization — shared across every page.
// This file connects the website to your Firebase project.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQtUm4yDopE1oTbIqia1wLpTgDrWaLcTk",
  authDomain: "hafiz-kashif-project.firebaseapp.com",
  projectId: "hafiz-kashif-project",
  storageBucket: "hafiz-kashif-project.firebasestorage.app",
  messagingSenderId: "472401116712",
  appId: "1:472401116712:web:9dfe294443bdde76ee3f1d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
