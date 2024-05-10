// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBvJsdtDxnPZgXtOJeXUfVj7VYOuKg730",
  authDomain: "alternative-product-bb915.firebaseapp.com",
  projectId: "alternative-product-bb915",
  storageBucket: "alternative-product-bb915.appspot.com",
  messagingSenderId: "667733993570",
  appId: "1:667733993570:web:7a292d8334d42ed47b893b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;