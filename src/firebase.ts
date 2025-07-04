// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB0nnWwPXYCp-8fYKCzrZN-pGTJVvf11mM",
    authDomain: "codementorai-ec521.firebaseapp.com",
    projectId: "codementorai-ec521",
    storageBucket: "codementorai-ec521.firebasestorage.app",
    messagingSenderId: "165579410008",
    appId: "1:165579410008:web:ae1cc58d6e52b593e9982d",
    measurementId: "G-3V101H65MW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
