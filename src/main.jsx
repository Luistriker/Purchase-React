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
  apiKey: "AIzaSyCHklAABWVQ9ALAe1As6hZSDn8j7zlRcus",
  authDomain: "purchase-react.firebaseapp.com",
  projectId: "purchase-react",
  storageBucket: "purchase-react.appspot.com",
  messagingSenderId: "622822337116",
  appId: "1:622822337116:web:70c4dc66464645c1a55499",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
