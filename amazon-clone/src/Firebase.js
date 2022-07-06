// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXObXDT5qaigQ3i-shDX2mc8OW9dvI3S8",
  authDomain: "clone-c659f.firebaseapp.com",
  projectId: "clone-c659f",
  storageBucket: "clone-c659f.appspot.com",
  messagingSenderId: "1091688960086",
  appId: "1:1091688960086:web:2f4b2f5d8c420c07fbabf7",
  measurementId: "G-9B7M86BLMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

