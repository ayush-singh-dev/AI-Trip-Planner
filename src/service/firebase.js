
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY,
  authDomain: "nodal-magnet-438709-p4.firebaseapp.com",
  projectId:
    import.meta.env.VITE_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID,
  storageBucket: "nodal-magnet-438709-p4.firebasestorage.app",
  messagingSenderId: "66810796549",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);