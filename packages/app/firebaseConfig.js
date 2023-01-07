// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection,addDoc} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNHpntGnhlT4jtrVBT3iMZmN2JkNnLtmc",
  authDomain: "expo-next-mini-trello.firebaseapp.com",
  projectId: "expo-next-mini-trello",
  storageBucket: "expo-next-mini-trello.appspot.com",
  messagingSenderId: "751666251885",
  appId: "1:751666251885:web:fc04ccee40bc9411a79764"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app)

 const x = () => {

 }
