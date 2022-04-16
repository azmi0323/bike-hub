// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj9c5FO99QYABhFmi7ZEbsmJicmmSFDA4",
  authDomain: "assignment-ten-project.firebaseapp.com",
  projectId: "assignment-ten-project",
  storageBucket: "assignment-ten-project.appspot.com",
  messagingSenderId: "821036746959",
  appId: "1:821036746959:web:67bfde5973a7e39512cfba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;