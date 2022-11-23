// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBD_9di5iLbWoS3amCo3eNBuXxIW6vLolE",
    authDomain: "crud-operations-b458b.firebaseapp.com",
    projectId: "crud-operations-b458b",
    storageBucket: "crud-operations-b458b.appspot.com",
    messagingSenderId: "532959643529",
    appId: "1:532959643529:web:e75487f7ca2a9c1b08c358"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);