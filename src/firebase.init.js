// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Mcmcapjff393m2_mBlw_F0FZa7wIfQc",
  authDomain: "smart-manufacture.firebaseapp.com",
  projectId: "smart-manufacture",
  storageBucket: "smart-manufacture.appspot.com",
  messagingSenderId: "502555611685",
  appId: "1:502555611685:web:67464aa0a54b6cc1c965cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;