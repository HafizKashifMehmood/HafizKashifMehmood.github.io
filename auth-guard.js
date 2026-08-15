// Protects a page: if no one is signed in, redirect to the Sign In page.
// The page body stays hidden (see inline style) until this check finishes,
// so a logged-out visitor never briefly sees the protected content.
import { auth } from "./firebase-init.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "signin.html";
  } else {
    document.body.style.visibility = "visible";
  }
});
