// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqbN3a4F9vV7kpdXfwSc6vf1LnC78qnZ8",
  authDomain: "dimple-firebase-ee0ef.firebaseapp.com",
  projectId: "dimple-firebase-ee0ef",
  storageBucket: "dimple-firebase-ee0ef.firebasestorage.app",
  messagingSenderId: "262813498626",
  appId: "1:262813498626:web:6e8974a913601f0c98961b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;