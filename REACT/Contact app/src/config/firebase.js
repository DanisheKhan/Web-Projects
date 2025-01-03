// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW7YwlENMKFmfzeqeB9f4qDuzsWS0ZFVc",
  authDomain: "contact-app-a5785.firebaseapp.com",
  projectId: "contact-app-a5785",
  storageBucket: "contact-app-a5785.firebasestorage.app",
  messagingSenderId: "11897437847",
  appId: "1:11897437847:web:d61a2af0fcf4a6c45533d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);