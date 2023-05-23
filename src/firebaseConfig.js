// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxLnGH20kSlGfgPAwitHqVBbEsqmVjTaY",
  authDomain: "react-entrega-final-8a3e3.firebaseapp.com",
  projectId: "react-entrega-final-8a3e3",
  storageBucket: "react-entrega-final-8a3e3.appspot.com",
  messagingSenderId: "483553777572",
  appId: "1:483553777572:web:f04dcedd7eca2e6b60d331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
