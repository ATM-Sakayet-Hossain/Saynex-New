// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzDcmV6HlUsh9ElluMMqnvWUW-942GLCQ",
  authDomain: "exam-4d535.firebaseapp.com",
  projectId: "exam-4d535",
  storageBucket: "exam-4d535.firebasestorage.app",
  messagingSenderId: "440587344076",
  appId: "1:440587344076:web:2664a519043a384b48ca69"
};

// Initialize Firebase
export const dbConfig = initializeApp(firebaseConfig);