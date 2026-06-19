// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLP6ikklyUlWGhoJRq4P9cq8jTlReQdck",
  authDomain: "netflix-gpt-eeb2c.firebaseapp.com",
  projectId: "netflix-gpt-eeb2c",
  storageBucket: "netflix-gpt-eeb2c.firebasestorage.app",
  messagingSenderId: "495090655648",
  appId: "1:495090655648:web:9d395e1653c241f2cb84c5",
  measurementId: "G-RB3LLHKY77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth=getAuth();