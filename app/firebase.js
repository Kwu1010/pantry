// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUnRBm74kw3IQnOE6ImHXdLRYg-7N73-Y",
  authDomain: "hspantryapp-ab316.firebaseapp.com",
  projectId: "hspantryapp-ab316",
  storageBucket: "hspantryapp-ab316.appspot.com",
  messagingSenderId: "1068698078160",
  appId: "1:1068698078160:web:7545000e82c0461890c7d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };