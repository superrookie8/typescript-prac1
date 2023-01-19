// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIxrVyLGA4IPcIEyKDvIOXsydhU4o_6Rs",
  authDomain: "easylogin-bb651.firebaseapp.com",
  projectId: "easylogin-bb651",
  storageBucket: "easylogin-bb651.appspot.com",
  messagingSenderId: "758191280539",
  appId: "1:758191280539:web:c369863281a747fe11913e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)