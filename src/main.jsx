import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuJv6CX8l-TrlB6I0f9iVezCk2laIP2pY",
  authDomain: "store-31313.firebaseapp.com",
  projectId: "store-31313",
  storageBucket: "store-31313.appspot.com",
  messagingSenderId: "454057716240",
  appId: "1:454057716240:web:f0db1e2e81f825a5327895",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
