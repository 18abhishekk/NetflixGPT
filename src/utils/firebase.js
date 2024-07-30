// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI4qSAcDrvlKrU7WaP7QnmeBMMPAcwvTs",
  authDomain: "netflixgpt-285fd.firebaseapp.com",
  projectId: "netflixgpt-285fd",
  storageBucket: "netflixgpt-285fd.appspot.com",
  messagingSenderId: "892091832869",
  appId: "1:892091832869:web:48f47de646e44d0f8b3dcc",
  measurementId: "G-XQTPL9F6EV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
