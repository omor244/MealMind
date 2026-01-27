// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXbHHR2BoLHcAo7FELHv-X53-SwKaKkb0",
    authDomain: "mealmind-1b6ab.firebaseapp.com",
    projectId: "mealmind-1b6ab",
    storageBucket: "mealmind-1b6ab.firebasestorage.app",
    messagingSenderId: "442222913147",
    appId: "1:442222913147:web:5d3caa9dc3bc29cc03a4de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);