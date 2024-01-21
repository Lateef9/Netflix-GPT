// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbAiv1PgIzuB0262og4BuU4McA7_f5914",
  authDomain: "netflix-gpt-fe54e.firebaseapp.com",
  projectId: "netflix-gpt-fe54e",
  storageBucket: "netflix-gpt-fe54e.appspot.com",
  messagingSenderId: "656784225245",
  appId: "1:656784225245:web:f4900e50cfb83134af3c34",
  measurementId: "G-FK6FCFTNWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();