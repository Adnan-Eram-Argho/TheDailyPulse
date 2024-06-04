// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5f6VAdpkSMYuL_xam8TKqRawY5kD7_Z0",
  authDomain: "thedailypulse-5e4f0.firebaseapp.com",
  projectId: "thedailypulse-5e4f0",
  storageBucket: "thedailypulse-5e4f0.appspot.com",
  messagingSenderId: "455292429641",
  appId: "1:455292429641:web:ac78348774afafd15ee698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;