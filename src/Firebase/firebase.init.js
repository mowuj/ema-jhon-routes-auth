// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuh5xBXbD3i6tng6fGhzBOcX4gG2539ao",
  authDomain: "ema-john-simple-e5c44.firebaseapp.com",
  projectId: "ema-john-simple-e5c44",
  storageBucket: "ema-john-simple-e5c44.appspot.com",
  messagingSenderId: "461619254175",
  appId: "1:461619254175:web:851aae7e3ee893d1ec63aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;