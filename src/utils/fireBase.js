// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcJG1yaKOjpfmeXyvBZlRX8_bJAFhhz9Y",
  authDomain: "netflixgpt-ab23f.firebaseapp.com",
  projectId: "netflixgpt-ab23f",
  storageBucket: "netflixgpt-ab23f.appspot.com",
  messagingSenderId: "252601569183",
  appId: "1:252601569183:web:708e6f7cdc4ef22a17b7aa",
  measurementId: "G-0YH1PHV4Z2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);