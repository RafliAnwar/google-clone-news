import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCkqrjigAWULO1LgahVeYRBYs4O45HbBPs",
    authDomain: "clone-news-test.firebaseapp.com",
    projectId: "clone-news-test",
    storageBucket: "clone-news-test.appspot.com",
    messagingSenderId: "590412261307",
    appId: "1:590412261307:web:0eba69a964ace21e36869e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
