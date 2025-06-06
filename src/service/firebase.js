
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmAiuf9KTYaFvPa_nvLvmp1zsmmhKdJHE",
  authDomain: "nodal-magnet-438709-p4.firebaseapp.com",
  projectId: "nodal-magnet-438709-p4",
  storageBucket: "nodal-magnet-438709-p4.firebasestorage.app",
  messagingSenderId: "66810796549",
  appId: "1:66810796549:web:856cdf3ebffb5204f89a6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);