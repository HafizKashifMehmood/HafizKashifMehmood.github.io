// Updates the nav "Sign In" button to "Sign Out" when a user is logged in.
// Included on every page so the nav reflects login state site-wide.
import { auth } from "./firebase-init.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  const btn = document.getElementById('nav-signin-btn');
  if (!btn) return;

  if (user) {
    btn.textContent = 'Sign Out';
    btn.href = '#';
    btn.onclick = (e) => {
      e.preventDefault();
      signOut(auth).then(() => { window.location.href = 'index.html'; });
    };
  } else {
    btn.textContent = 'Sign In';
    btn.href = 'index.html';
    btn.onclick = null;
  }
});
