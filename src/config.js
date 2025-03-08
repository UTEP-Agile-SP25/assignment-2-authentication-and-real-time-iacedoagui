// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAXaDv0aLpMU7ZHJKbfvlNgqTivnptWJk",
  authDomain: "acedo-sandbox.firebaseapp.com",
  projectId: "acedo-sandbox",
  storageBucket: "acedo-sandbox.firebasestorage.app",
  messagingSenderId: "559372582642",
  appId: "1:559372582642:web:bf432b6cdb0457752dda6b",
  measurementId: "G-PBCCHERQFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app