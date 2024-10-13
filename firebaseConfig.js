// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5c-AvsEoO-f9qf-tUnMSPZbmsu1zPb9w",
  authDomain: "fir-demo-a708d.firebaseapp.com",
  databaseURL: "https://fir-demo-a708d-default-rtdb.firebaseio.com",
  projectId: "fir-demo-a708d",
  storageBucket: "fir-demo-a708d.appspot.com",
  messagingSenderId: "760190083559",
  appId: "1:760190083559:web:94a7d6026925f4157c9d42",
  measurementId: "G-DTY2E160F7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
