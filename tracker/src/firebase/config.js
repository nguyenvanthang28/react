
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBffsGV3WtyRzPL1ohTsoZzcDUMbvmFVGk",
  authDomain: "tracker-397c7.firebaseapp.com",
  projectId: "tracker-397c7",
  storageBucket: "tracker-397c7.appspot.com",
  messagingSenderId: "1087578937728",
  appId: "1:1087578937728:web:bce691cfc7ec515db10965"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//init servies
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth}
