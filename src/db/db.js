// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAz3N2aMtccSfS_3bTUyh4LFq3xFWniODI",
    authDomain: "ibadahku-34d2d.firebaseapp.com",
    projectId: "ibadahku-34d2d",
    storageBucket: "ibadahku-34d2d.appspot.com",
    messagingSenderId: "328514384121",
    appId: "1:328514384121:web:6fdfc5858f75a56f9d7228",
    measurementId: "G-D6FYBVVVEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
