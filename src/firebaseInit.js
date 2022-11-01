// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZUu65E_cTXDsg7kwrYjR3KktvUsUWwL4",
  authDomain: "nazikogluseyahetweb.firebaseapp.com",
  projectId: "nazikogluseyahetweb",
  storageBucket: "nazikogluseyahetweb.appspot.com",
  messagingSenderId: "40238180730",
  appId: "1:40238180730:web:a08f632f73a697971d8ec3",
  measurementId: "G-P8NG1CD9W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);