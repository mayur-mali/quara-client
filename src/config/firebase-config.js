// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUbu71IzxnRH3OwCyTmqE0IijZhycZuQc",
  authDomain: "quara-clone-image-server.firebaseapp.com",
  projectId: "quara-clone-image-server",
  storageBucket: "quara-clone-image-server.appspot.com",
  messagingSenderId: "232189002853",
  appId: "1:232189002853:web:57459d5ee1a3e86cf6b28c",
  measurementId: "G-HV051N3LXP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
