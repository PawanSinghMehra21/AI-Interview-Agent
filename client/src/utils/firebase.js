
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "ai-mock-system-final.firebaseapp.com",
  projectId: "ai-mock-system-final",
  storageBucket: "ai-mock-system-final.firebasestorage.app",
  messagingSenderId: "783419564008",
  appId: "1:783419564008:web:19b556d310aaf3b7164e5d",
  measurementId: "G-KK6W3ZW0RL"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}